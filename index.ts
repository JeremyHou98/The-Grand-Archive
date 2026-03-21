/**
 * CLI 入口 — bun run fetch / bun run list / bun run sources
 */

import { loadSources, loadCategories } from "./src/config";
import { fetchSource } from "./src/fetcher";
import { readdirSync } from "fs";
import { resolve, join } from "path";
import matter from "gray-matter";

const ROOT = import.meta.dir;
const FEEDS_DIR = resolve(ROOT, "feeds");

// ─── 命令 ──────────────────────────────────────────

async function cmdFetch(filter?: string) {
  const sources = loadSources();
  const targets = filter
    ? sources.filter((s) => s.name.includes(filter) || s.category === filter)
    : sources;

  if (targets.length === 0) {
    console.log("没有匹配的订阅源。");
    return;
  }

  console.log(`\n📡 开始抓取 ${targets.length} 个订阅源...\n`);

  let totalSaved = 0;
  let totalSkipped = 0;
  let totalErrors = 0;

  for (const source of targets) {
    process.stdout.write(`  ⏳ ${source.name} ...`);
    const result = await fetchSource(source);
    totalSaved += result.saved;
    totalSkipped += result.skipped;
    totalErrors += result.errors;

    if (result.errors > 0) {
      console.log(""); // 错误信息已在 fetcher 中打印
    } else {
      console.log(` ✓ ${result.saved} 新条目, ${result.skipped} 已存在`);
    }
  }

  console.log(`\n✅ 完成：${totalSaved} 新保存 | ${totalSkipped} 跳过 | ${totalErrors} 失败\n`);
}

async function cmdList(category?: string) {
  const categories = loadCategories();
  const targetCategories = category
    ? categories.filter((c) => c.id === category)
    : categories;

  let totalCount = 0;

  console.log("\n📋 Feed 条目列表\n");

  for (const cat of targetCategories) {
    const dir = resolve(FEEDS_DIR, cat.id);
    let files: string[] = [];
    try {
      files = readdirSync(dir)
        .filter((f) => f.endsWith(".md") && f !== ".gitkeep")
        .sort()
        .reverse();
    } catch {
      // 目录不存在
    }

    if (files.length === 0 && category) {
      console.log(`  ${cat.name} (${cat.id}): 暂无条目`);
      continue;
    }
    if (files.length === 0) continue;

    console.log(`  ── ${cat.name} (${cat.id}) ── ${files.length} 条`);

    for (const file of files.slice(0, 20)) {
      try {
        const raw = await Bun.file(join(dir, file)).text();
        const { data } = matter(raw);
        const readMark = data.read ? "✓" : "○";
        const starMark = data.starred ? "★" : " ";
        const date = (data.published || "").toString().slice(0, 10);
        console.log(`    ${readMark} ${starMark} [${date}] ${data.title || file}  ← ${data.source || "?"}`);
      } catch {
        console.log(`    ? ${file}`);
      }
    }

    if (files.length > 20) {
      console.log(`    ... 还有 ${files.length - 20} 条`);
    }

    totalCount += files.length;
    console.log("");
  }

  console.log(`共 ${totalCount} 条\n`);
}

function cmdSources() {
  const sources = loadSources();
  console.log(`\n📡 已配置 ${sources.length} 个订阅源：\n`);
  for (const s of sources) {
    const status = s.enabled ? "✓" : "✗";
    console.log(`  ${status} [${s.category}] ${s.name}`);
    console.log(`    ${s.url}`);
  }
  console.log("");
}

function printHelp() {
  console.log(`
大案牍库 — RSS Feed 收集与分类工具

用法:
  bun run fetch [filter]     抓取 RSS 订阅源 (可按名称/分类过滤)
  bun run list [category]    列出已保存的条目
  bun run sources            列出所有订阅源
  bun run help               显示帮助

示例:
  bun run fetch              抓取所有已启用的源
  bun run fetch tech         只抓取 tech 分类的源
  bun run fetch 雪球         只抓取名称含「雪球」的源
  bun run list               列出所有条目
  bun run list tech          只列出科技分类
`);
}

// ─── 路由 ──────────────────────────────────────────

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "fetch":
    await cmdFetch(args[0]);
    break;
  case "list":
    await cmdList(args[0]);
    break;
  case "sources":
    cmdSources();
    break;
  case "help":
  case "--help":
  case "-h":
  default:
    printHelp();
    break;
}