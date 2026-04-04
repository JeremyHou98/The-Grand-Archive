---
name: dak_summary
description: "Generate summaries using dak CLI. Two sub-skills: (A) Daily Summary for daily news digests, (B) Topic Summary for topic-focused analysis across feeds."
version: 0.1.0
---

# dak_summary Skill

Generate structured summaries from 大案牍库 feed data.

## Sub-skills

| Sub-skill | Trigger | Output | Detail |
| --------- | ------- | ------ | ------ |
| **Daily Summary** | 总结某天的新闻 / generate daily digest | `daily_summary/YYYY_MM_DD.md` | → [daily-summary.md](daily-summary.md) |
| **Topic Summary** | 梳理某个话题 / summarize a topic | `topic_summary/topic_name.md` | → [topic-summary.md](topic-summary.md) |

**When the user's request matches a sub-skill, read the corresponding sub-skill file before proceeding.**

---

## Shared: Feed Access

All feed data access goes through `dak` CLI. Do NOT read `feeds/` markdown files directly.

```bash
# Search by keyword
dak search "keyword" --json -n 100

# List by date range
dak feeds --from YYYY-MM-DD --to YYYY-MM-DD --json -n 500

# Filter by category, tag, source, etc.
dak search "keyword" -c finance -t 经济 --from 2026-03-01 --json
```

See the [dak skill](../dak/SKILL.md) for full CLI reference.

## Shared: Output Structure

```
daily_summary/
└── YYYY_MM_DD.md
topic_summary/
└── topic_name.md
```

Write output files directly using standard file operations (e.g. `cat > file`, shell heredoc, or create_file tool). No special tooling required.

## Shared: Wikilink Format

Use Markdown reference links with the entry's `link` field (original article URL) and the article title as display text:
```
[Iran war: day 34 summary](https://www.cnbc.com/2026/04/02/iran-war-day-34.html)
[2026-04-03 每日总结 § 伊朗战争](daily_summary/2026_04_03.md)
```

- For feed entries: use `entry.link` (the original article URL) from `dak` JSON output.
- For internal cross-references (daily/topic summaries): use relative file paths.
- Use the article's actual title (cleaned up) as display text — not the filename.

## Shared: Writing Style

- Write in Chinese. Be factual and concise.
- No filler phrases like "值得关注的是".
- Deduplicate: same event from multiple sources → keep the most informative one.
