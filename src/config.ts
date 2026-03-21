/**
 * 配置加载器 — 读取 config/ 目录下的 YAML 配置文件
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { parse as parseYaml } from "yaml";
import type { SourcesConfig, CategoriesConfig, LoadedSource, Category } from "./types";

const ROOT = resolve(import.meta.dir, "..");
const RSSHUB_PLACEHOLDER = "{{RSSHUB_BASE_URL}}";
const DEFAULT_RSSHUB_BASE = "http://localhost:1200";
const RSSHUB_BASE_URL = (() => {
  const env = process.env.RSSHUB_BASE_URL?.trim();
  const base = env && env.length > 0 ? env : DEFAULT_RSSHUB_BASE;
  return base.replace(/\/+$/, "");
})();

function resolveRequestUrl(url: string): string {
  if (!url) return url;
  if (url.startsWith("/")) {
    return `${RSSHUB_BASE_URL}${url}`;
  }
  if (url.includes(RSSHUB_PLACEHOLDER)) {
    return url.split(RSSHUB_PLACEHOLDER).join(RSSHUB_BASE_URL);
  }
  return url;
}

export function loadSources(): LoadedSource[] {
  const raw = readFileSync(resolve(ROOT, "config/sources.yaml"), "utf-8");
  const config = parseYaml(raw) as SourcesConfig;
  return config.sources
    .filter((s) => s.enabled)
    .map((source) => ({
      ...source,
      requestUrl: resolveRequestUrl(source.url),
    }));
}

export function loadCategories(): Category[] {
  const raw = readFileSync(resolve(ROOT, "config/categories.yaml"), "utf-8");
  const config = parseYaml(raw) as CategoriesConfig;
  return config.categories;
}
