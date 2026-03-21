---
# ===== Feed 条目模板 =====
# 以下 YAML front matter 为每篇条目的 metadata

title: ""                    # 文章标题
source: ""                   # 来源订阅名称
source_url: ""               # 来源 RSS 地址
link: ""                     # 原文链接
author: ""                   # 作者
published: ""                # 发布时间 (ISO 8601: 2026-03-20T12:00:00+08:00)
fetched: ""                  # 抓取时间 (ISO 8601)
category: ""                 # 分类 ID (对应 categories.yaml)
tags: []                     # 标签列表
language: ""                 # 语言 (zh-CN / en / ...)
guid: ""                     # 条目唯一标识 (来自 RSS <guid>)
hash: ""                     # 内容摘要哈希 (用于去重)
read: false                  # 是否已读
starred: false               # 是否收藏
---

<!-- 正文内容（从 RSS description/content 提取） -->
