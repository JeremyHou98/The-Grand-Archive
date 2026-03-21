/**
 * 类型定义
 */

/** sources.yaml 中的订阅源配置 */
export interface Source {
  name: string;
  url: string;
  category: string;
  enabled: boolean;
  fetch_interval: number;
  tags: string[];
  description: string;
}

export interface SourcesConfig {
  sources: Source[];
}

/** categories.yaml 中的分类定义 */
export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface CategoriesConfig {
  categories: Category[];
}

/** Feed 条目的 front matter metadata */
export interface EntryMeta {
  title: string;
  source: string;
  source_url: string;
  link: string;
  author: string;
  published: string;
  fetched: string;
  category: string;
  tags: string[];
  language: string;
  guid: string;
  hash: string;
  read: boolean;
  starred: boolean;
}
