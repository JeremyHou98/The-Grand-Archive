---
name: daily-summary
description: Generate a daily digest/summary note for 大案牍库. Use this skill whenever the user asks to "generate today's summary", "create daily digest", "总结今天的新闻", "生成每日总结", "写今天的摘要", or asks to summarize feed posts for a specific date. This skill knows the vault's feed structure, output format, and how to write to summary/ via Obsidian CLI.
version: 0.1.0
---

# Daily Summary Skill

Generate a structured daily digest note from feed posts in the vault.

## Vault Structure

```
feeds/
├── finance/    YYYY-MM-DD_Title_HASH.md
├── news/       YYYY-MM-DD_Title_HASH.md
├── social/     YYYY-MM-DD_Title_HASH.md
├── tech/       YYYY-MM-DD_Title_HASH.md
├── blog/
└── podcast/
summary/
└── YYYY_MM_DD.md   ← output goes here
```

Each feed file has YAML frontmatter with `title`, `link`, `source`, `fetched`, `published`, `category`.
Filenames use the **fetched** date, not published date.

## Workflow

### 1. Discover Posts

Use Glob to find all feed posts for the target date:
```
feeds/**/YYYY-MM-DD_*.md
```

For large result sets (300+), work from filenames alone — titles contain enough signal for importance/deduplication judgement.

### 2. Curate: Deduplicate and Prioritize

**Deduplication:** Multiple sources often cover the same event with slightly different titles. Merge these — keep the most informative title as the representative. Common duplicate patterns:
- Same event from Bloomberg + Reuters + local outlet
- Same 微博 topic appearing as short title + full question format

**Importance signals (high → low):**
- Breaking/developing geopolitical or economic events
- Policy announcements with broad impact (central bank, government, major regulation)
- Major tech releases or security incidents
- Significant market movements with clear cause
- Notable cultural or social events with wide resonance

**Exclude:**
- Pure entertainment/celebrity gossip with no broader significance
- Highly repetitive market micro-updates (e.g., 5 articles all saying "oil rose 0.3%")
- Evergreen lifestyle content with no news angle

### 3. Group Into Themes

Cluster curated posts into 5–8 thematic sections. Name sections concisely in Chinese. Common groupings for this vault:

- 伊朗战争 / 中东局势
- 美国经济 / 就业数据
- 美国政治
- AI / 科技
- 中国市场 / 中国
- 全球政治
- 能源 / 金融
- 技术 / 开发（Hacker News 类）
- 中文社交热点
- 科学 / 其他

Adjust theme names and count to fit what actually happened that day — don't force empty sections.

### 4. Write Summaries

For each section, write **2–5 sentences** covering:
- The core facts/events
- Why it matters or what changed
- Key actors, numbers, or outcomes

Write in Chinese. Be factual and concise — no filler phrases like "值得关注的是".

### 5. Create the Output File

Use Obsidian CLI to create the file, then write content via eval (avoids file-lock conflicts):

```bash
obsidian create path="summary/YYYY_MM_DD.md" silent content="placeholder"
```

Then write the full content via `obsidian eval`:

```javascript
(async () => {
  const file = app.vault.getAbstractFileByPath('summary/YYYY_MM_DD.md');
  await app.vault.modify(file, content);
  return 'done';
})()
```

Finally open it:
```bash
obsidian open path="summary/YYYY_MM_DD.md"
```

## Output Format

```markdown
---
date: YYYY-MM-DD
tags:
  - daily-summary
  - YYYY/MM/DD
---

# YYYY-MM-DD 每日总结

## 主题名称

2–5句中文总结。聚焦核心事实、影响和关键数字。

- [[feeds/category/YYYY-MM-DD_Title_HASH|Display Title]]
- [[feeds/category/YYYY-MM-DD_Title_HASH|Display Title]]

## 下一个主题

...
```

### Wikilink format

Always use full path wikilinks with display text:
```
[[feeds/news/2026-04-02_Iran_war_day34_abc123|Iran war: day 34 summary]]
```

Use the article's actual title (cleaned up) as display text — not the filename.

### Tag format

Date tag uses `/` for Obsidian nested tag hierarchy:
- `2026/04/02` creates nested tags `2026` → `04` → `02`

## Notes

- The filename uses underscores: `2026_04_02.md` (not hyphens)
- `summary/` folder is already excluded from Obsidian graph/search via Settings → Excluded files if needed
- For dates with 300+ posts: curate to 30–50 representative items across 6–8 themes
- Prefer `feeds/news/` and `feeds/finance/` for international stories; `feeds/social/` for Chinese trending topics
