/**
 * RSS 抓取器 — 从订阅源获取条目并保存为 Markdown 文件
 */

import RSSParser from "rss-parser";
import { createHash } from "crypto";
import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync } from "fs";
import { resolve, join } from "path";
import matter from "gray-matter";
import type { Source, EntryMeta } from "./types";

const ROOT = resolve(import.meta.dir, "..");
const FEEDS_DIR = resolve(ROOT, "feeds");
const STATUS_FILE = resolve(ROOT, "config/fetch-status.json");

export interface FetchStatus {
  name: string;
  url: string;
  category: string;
  lastFetched: string;
  lastResult: "success" | "error";
  lastError?: string;
  entriesSaved: number;
  entriesSkipped: number;
}

/** 加载已有的抓取状态 */
function loadFetchStatus(): Record<string, FetchStatus> {
  try {
    if (existsSync(STATUS_FILE)) {
      return JSON.parse(readFileSync(STATUS_FILE, "utf-8"));
    }
  } catch { /* ignore */ }
  return {};
}

/** 保存抓取状态 */
function saveFetchStatus(status: Record<string, FetchStatus>) {
  writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2), "utf-8");
}

/** 更新单个源的状态 */
export function updateSourceStatus(
  source: Source,
  result: "success" | "error",
  saved: number,
  skipped: number,
  error?: string
) {
  const status = loadFetchStatus();
  status[source.url] = {
    name: source.name,
    url: source.url,
    category: source.category,
    lastFetched: new Date().toISOString(),
    lastResult: result,
    lastError: error,
    entriesSaved: saved,
    entriesSkipped: skipped,
  };
  saveFetchStatus(status);
}

/** 获取所有源的抓取状态 */
export function getAllFetchStatus(): Record<string, FetchStatus> {
  return loadFetchStatus();
}

const parser = new RSSParser({
  timeout: 15_000,
  headers: {
    "User-Agent": "DaAnDuKu-RSS-Fetcher/1.0",
  },
});

/** 生成内容哈希（用于去重） */
function contentHash(text: string): string {
  return createHash("md5").update(text).digest("hex").slice(0, 12);
}

/** 清理文件名中的非法字符 */
function sanitizeFilename(name: string): string {
  return name
    .replace(/[\/\\:*?"<>|]/g, "_")
    .replace(/\s+/g, "_")
    .slice(0, 80);
}

/** 检查条目是否已存在（通过 guid 或 hash 去重） */
function entryExists(categoryDir: string, guid: string, hash: string): boolean {
  if (!existsSync(categoryDir)) return false;

  const files = readdirSync(categoryDir).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    try {
      const content = Bun.file(join(categoryDir, file));
      // 简单检查文件名中是否包含 hash，避免每次都完整解析
      if (file.includes(hash)) return true;
    } catch {
      // ignore
    }
  }
  return false;
}

/** 将 HTML 粗略转为 Markdown（简易版） */
function htmlToMarkdown(html: string): string {
  if (!html) return "";
  return html
    // 移除 script/style
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, "")
    // 标题
    .replace(/<h([1-6])[^>]*>(.*?)<\/h\1>/gi, (_, level, text) => `${"#".repeat(+level)} ${text}\n\n`)
    // 段落
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    // 粗体
    .replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gi, "**$2**")
    // 斜体
    .replace(/<(em|i)[^>]*>(.*?)<\/\1>/gi, "*$2*")
    // 链接
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    // 图片
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "![$2]($1)")
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, "![]($1)")
    // 代码块
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "```\n$1\n```\n\n")
    // 行内代码
    .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
    // 列表
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    .replace(/<\/?[uo]l[^>]*>/gi, "\n")
    // 换行
    .replace(/<br\s*\/?>/gi, "\n")
    // 水平线
    .replace(/<hr\s*\/?>/gi, "\n---\n")
    // 引用
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "> $1\n\n")
    // 移除剩余 HTML 标签
    .replace(/<[^>]+>/g, "")
    // 实体解码
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    // 清理多余空行
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** 从单个订阅源抓取并保存条目 */
export async function fetchSource(source: Source): Promise<{ saved: number; skipped: number; errors: number }> {
  const categoryDir = resolve(FEEDS_DIR, source.category);
  if (!existsSync(categoryDir)) {
    mkdirSync(categoryDir, { recursive: true });
  }

  let feed;
  try {
    feed = await parser.parseURL(source.url);
  } catch (err) {
    const errMsg = (err as Error).message;
    console.error(`  ✗ 无法获取 [${source.name}]: ${errMsg}`);
    updateSourceStatus(source, "error", 0, 0, errMsg);
    return { saved: 0, skipped: 0, errors: 1 };
  }

  let saved = 0;
  let skipped = 0;

  for (const item of feed.items) {
    const title = item.title || "无标题";
    const link = item.link || "";
    const guid = item.guid || item.id || link;
    const content = item["content:encoded"] || item.content || item.contentSnippet || item.summary || "";
    const hash = contentHash(`${guid}${title}`);

    // 去重检查
    if (entryExists(categoryDir, guid, hash)) {
      skipped++;
      continue;
    }

    const published = item.pubDate || item.isoDate || "";
    const now = new Date().toISOString();
    const datePrefix = published
      ? new Date(published).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10);

    const meta: EntryMeta = {
      title,
      source: source.name,
      source_url: source.url,
      link,
      author: item.creator || item.author || "",
      published,
      fetched: now,
      category: source.category,
      tags: [...source.tags],
      language: "",
      guid,
      hash,
      read: false,
      starred: false,
    };

    const markdown = htmlToMarkdown(content);
    const fileContent = matter.stringify(markdown ? `\n${markdown}\n` : "\n", meta);

    const filename = `${datePrefix}_${sanitizeFilename(title)}_${hash}.md`;
    const filepath = join(categoryDir, filename);

    try {
      writeFileSync(filepath, fileContent, "utf-8");
      saved++;
    } catch (err) {
      console.error(`  ✗ 写入失败 [${title}]: ${(err as Error).message}`);
    }
  }

  updateSourceStatus(source, "success", saved, skipped);
  return { saved, skipped, errors: 0 };
}
