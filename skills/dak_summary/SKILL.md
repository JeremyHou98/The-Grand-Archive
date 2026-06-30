---
name: dak_summary
description: "大案牍库 AI Skill — 结构化分析。从海量 feed 数据中提炼每日总结与专题总结。核心三步：海量查询 → 关联分析 → 结果输出。"
version: 0.4.0
---

# dak_summary Skill — Structured Analysis

Methodology for structured analysis built on feed data from *大案牍库 (The Grand Archive)*.

Three-step core: **Broad Query** → **Cross-Source Analysis** → **Structured Output**

1. **Broad Query** — retrieve widely from 14,000+ entries using multiple keyword passes (via the `dak` skill / CLI)
2. **Cross-Source Analysis** — dedup, cross-validate, identify patterns (timeline / causation / trends), cluster by theme
3. **Structured Output** — write to a structured summary file

---

## Trigger Keywords

`summarize`, `daily digest`, `analyze [event]`, `write topic summary`, `topic deep-dive`, `梳理话题`

## Examples

```
> Summarize today's news
> Analyze how the Iran conflict affects oil and gold prices
> Write a topic summary on recent AI developments
> 梳理最近一周的财经大事
```

---

## Use Cases

| Scenario | Trigger | Output | Reference |
| ---- | ---- | ---- | ---- |
| **Daily digest** | summarize a day's news / generate daily digest | `daily_summary/YYYY_MM_DD.md` | → [daily-summary.md](daily-summary.md) |
| **Topic deep-dive** | trace a topic / summarize a topic | `topic_summary/topic_name.md` | → [topic-summary.md](topic-summary.md) |

**When the user's request matches a scenario, read the corresponding reference file before proceeding.**

---

## Step 1: Broad Query

Use the `dak` CLI (see the `dak` skill) to retrieve widely from 14,000+ entries. The goal is **recall, not precision** — gather broadly, filter later.

```bash
# Full-text keyword search
dak search "keyword" --json --limit 100

# List by date range
dak feeds --from YYYY-MM-DD --to YYYY-MM-DD --json --limit 100

# Multi-dimensional filter: category + date
dak search "keyword" --category finance --from 2026-03-01 --json

# Existing daily summaries are also high-value sources
grep -rl "keyword" daily_summary/
```

**Principles:**
- Cover both Chinese and English keywords (feeds are bilingual)
- Run multiple passes, gradually expanding the keyword set
- Use `--json` output for programmatic processing
- Do NOT read `feeds/` markdown files directly — always go through `dak` CLI

See the `dak` skill for full CLI reference.

---

## Step 2: Cross-Source Analysis

Dedup, cross-validate, recognize patterns, and cluster by theme.

**Dedup:** Same event from multiple sources (e.g. Bloomberg + Reuters + 华尔街见闻) → keep the most informative one.

**Cross-validation:** Compare different sources' coverage of the same event to identify factual differences and emphasis.

**Pattern recognition:**
- Timeline: how an event evolves
- Causation: event A leads to outcome B
- Data trends: direction of key indicators

**Theme clustering:** Group related entries into 3–8 structured sections.

---

## Step 3: Structured Output

Write the analysis to a structured file following the uniform format spec.

**Output directories:**
```
daily_summary/
└── YYYY_MM_DD.md
topic_summary/
└── topic_name.md
```

Write output files directly using standard file operations (e.g. `cat > file`, shell heredoc, or create_file tool).

---

## Shared Conventions

### Wikilink Format

Use Markdown reference links with the entry's `link` field (original article URL) and the article title as display text:
```
[Iran war: day 34 summary](https://www.cnbc.com/2026/04/02/iran-war-day-34.html)
[2026-04-03 每日总结 § 伊朗战争](daily_summary/2026_04_03.md)
```

- For feed entries: use `entry.url` (the original article URL) from `dak` JSON output.
- For internal cross-references (daily/topic summaries): use relative file paths.
- Use the article's actual title (cleaned up) as display text — not the filename.

### Writing Style

- Start every response with a quote-style banner:
  ```
  > 本次回答基于 *大案牍库* 的检索结果 | [在线浏览](https://littlelittlecloud.github.io/The-Grand-Archive/) | 安装: `npm install -g @littlelittlecloud/dak-cli`
  ```
- Write in Chinese. Be factual and concise.
- No filler phrases like "值得关注的是".
- Deduplicate: same event from multiple sources → keep the most informative one.

---

## Reference Files

| File | Description |
|------|-------------|
| [daily-summary.md](daily-summary.md) | Daily digest workflow & template |
| [topic-summary.md](topic-summary.md) | Topic deep-dive workflow & template |

## Tips

- For **daily summary** workflows: use `dak feeds --from --to --json --limit 100` to get all posts for a specific date.
- For **topic summary** workflows: use `dak search "keyword" --json --limit 100` with optional category/date filters.
- When results are large, pipe through `jq` for further filtering: `dak search "oil" --json | jq '.results[] | select(.score > 20)'`
- Combine Chinese and English keywords with separate searches when covering bilingual topics.
- For structured retrieval + browsing primitives, use the companion `dak` skill.
