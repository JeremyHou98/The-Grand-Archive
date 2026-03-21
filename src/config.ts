/**
 * 配置加载器 — 读取 config/ 目录下的 YAML 配置文件
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { parse as parseYaml } from "yaml";
import type { SourcesConfig, CategoriesConfig, Source, Category } from "./types";

const ROOT = resolve(import.meta.dir, "..");

export function loadSources(): Source[] {
  const raw = readFileSync(resolve(ROOT, "config/sources.yaml"), "utf-8");
  const config = parseYaml(raw) as SourcesConfig;
  return config.sources.filter((s) => s.enabled);
}

export function loadCategories(): Category[] {
  const raw = readFileSync(resolve(ROOT, "config/categories.yaml"), "utf-8");
  const config = parseYaml(raw) as CategoriesConfig;
  return config.categories;
}
