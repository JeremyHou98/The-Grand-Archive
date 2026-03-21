# 大案牍库

RSS 订阅源收集与分类管理工具。

## 简介

「大案牍库」用于从各类 RSS 源收集 Feed，并按主题进行归类整理，方便统一阅读与检索。

所有内容以 **Markdown + YAML front matter** 的形式存储——人类可直接阅读，同时携带结构化 metadata 以支持自动化处理。

## 功能

- 收集并聚合多来源 RSS Feed
- 按类别对订阅源进行分类管理
- 提供统一的信息检索入口
- 每篇条目带有完整 metadata（来源、时间、标签、语言、去重哈希等）

## 目录结构

```
大案牍库/
├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
├── index.ts                    # CLI 入口
│
├── src/                        # 源码
│   ├── types.ts                #   类型定义
│   ├── config.ts               #   配置加载器
│   ├── fetcher.ts              #   RSS 抓取与存储
│   └── generate.ts             #   静态 JSON 数据生成器
│
├── web/                        # SPA Dashboard (Vite + React + TailwindCSS)
│   ├── src/                    #   React 源码
│   ├── public/data/            #   生成的静态 JSON 数据
│   └── dist/                   #   构建产物（部署到 GitHub Pages）
│
├── config/                     # 配置文件
│   ├── sources.yaml            #   RSS 订阅源列表
│   └── categories.yaml         #   分类定义
│
├── feeds/                      # Feed 条目存储（按分类归档）
│   ├── tech/                   #   科技
│   ├── news/                   #   新闻
│   ├── blog/                   #   博客
│   ├── podcast/                #   播客
│   └── uncategorized/          #   未分类
│
├── templates/                  # 模板
│   └── entry.md                #   条目模板（含 metadata 字段说明）
│
├── scripts/                    # 脚本（抓取、处理、导出等）
│
└── archive/                    # 归档（旧条目定期迁移至此）
```

## 条目格式

每篇 Feed 条目是一个独立的 Markdown 文件，命名为 `YYYY-MM-DD_标题.md`，存放在对应分类目录下。

文件结构：

```markdown
---
title: "文章标题"
source: 来源名称
source_url: https://example.com/feed.xml
link: https://example.com/posts/xxx
author: 作者
published: 2026-03-20T10:00:00+08:00    # 发布时间
fetched: 2026-03-20T16:30:00+08:00      # 抓取时间
category: tech                           # 分类 ID
tags: [RSS, 教程]                        # 标签
language: zh-CN                          # 语言
guid: https://example.com/posts/xxx      # 唯一标识
hash: a1b2c3d4e5f6                       # 内容哈希（去重用）
read: false                              # 已读状态
starred: false                           # 收藏状态
---

正文内容（Markdown 格式）...
```

### Metadata 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 文章标题 |
| `source` | string | 来源订阅名称 |
| `source_url` | string | RSS 源地址 |
| `link` | string | 原文链接 |
| `author` | string | 作者 |
| `published` | ISO 8601 | 原文发布时间 |
| `fetched` | ISO 8601 | 本地抓取时间 |
| `category` | string | 分类 ID（对应 `categories.yaml`）|
| `tags` | list | 标签列表 |
| `language` | string | 语言代码 |
| `guid` | string | RSS `<guid>` 唯一标识 |
| `hash` | string | 内容摘要哈希，用于去重 |
| `read` | bool | 是否已读 |
| `starred` | bool | 是否收藏 |

## 技术栈

- **运行时**: [Bun](https://bun.sh/)
- **语言**: TypeScript
- **后端依赖**: rss-parser, yaml, gray-matter
- **前端**: Vite + React + TailwindCSS
- **部署**: GitHub Pages（静态 SPA）

## 快速开始

```bash
# 安装 Bun（如未安装）
curl -fsSL https://bun.sh/install | bash

# 安装依赖
bun install

# 查看帮助
bun run help
```

## 使用方法

```bash
# 抓取所有已启用的订阅源
bun run fetch

# 只抓取某个分类
bun run fetch tech

# 只抓取名称包含关键词的源
bun run fetch 雪球

# 列出所有已保存的条目
bun run list

# 只列出某个分类的条目
bun run list tech

# 查看所有已配置的订阅源
bun run sources
```

### 添加新订阅源

编辑 `config/sources.yaml`，添加：

```yaml
- name: 订阅名称
  url: https://example.com/feed.xml
  category: tech          # 对应 categories.yaml 中的分类 ID
  enabled: true
  fetch_interval: 3600
  tags: [标签1, 标签2]
  description: 简短描述
```

然后运行 `bun run fetch` 即可。

## Dashboard (SPA)

项目包含一个静态 SPA Dashboard，可部署到 GitHub Pages。

```bash
# 生成静态数据 + 启动开发服务器
bun run dev

# 生成静态数据 + 构建生产版本
bun run build

# 预览构建结果
bun run preview

# 部署到 GitHub Pages
bun run deploy
```

Dashboard 包含：
- 总览统计卡片（条目数、订阅源数、分类数、标签数）
- 按分类 / 按来源柱状图
- 近 30 天抓取活动热力图
- 标签云
- 条目列表（支持分类过滤和关键词搜索）

## GitHub Pages 部署

1. 确保已拉取最新 feeds：`bun run fetch`
2. 构建：`bun run build`
3. 部署：`bun run deploy`（将 `web/dist` 发布到 `gh-pages` 分支）

或通过 GitHub Actions 自动化：定时运行 `fetch` + `build`，然后发布到 Pages。

## 许可证

MIT
