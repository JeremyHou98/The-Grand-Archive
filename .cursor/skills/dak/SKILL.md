---
name: dak
description: |
  Search and browse feed data from 大案牍库 (The Grand Archive): 14,000+ live news entries from 20+ sources, updated every 30 minutes. Supports full-text search and filtering by category, source, tag, and date range via the dak CLI / TypeScript SDK. For structured analysis, use the companion dak-summary skill.
  Use when user asks to: search news, find articles, look up recent reports, browse feeds, dak search, dak feeds, find recent items.
  Triggers: "search", "find articles", "dak search", "dak feeds", "look up", "browse", "find recent", "搜索新闻", "查找文章", "浏览 feed"
---

# dak Skill — Search & Browse

Search and access feed data from *大案牍库 (The Grand Archive)*.

Supports full-text search, filtering by category / source / tag / date range across 14,000+ live news entries from 20+ sources, updated every 30 minutes.

---

## Trigger Keywords

`search`, `find articles`, `dak search`, `dak feeds`, `look up`, `browse`, `find recent`

## Examples

```
> Search for finance news about tariffs
> Find recent articles about AI with dak
> Look up oil price reports from March 2026
> Browse Bloomberg entries from yesterday
```

---

## Tools

- **CLI** — `dak` command (install: `npm install -g @littlelittlecloud/dak-cli`)
- **SDK** — `@littlelittlecloud/dak` TypeScript HTTP client (install: `npm install @littlelittlecloud/dak`)

Both connect to the dak-server API over HTTP. Server URL defaults to `https://dak-news.com`.

Set an API key to unlock premium access:
```bash
export DAK_API_KEY=your-api-key
```

---

## Quick Reference

```bash
# Full-text search
dak search "tariff"
dak search "AI" --category tech --limit 10
dak search "oil price" --from 2026-03-01 --json

# Browse feeds
dak feeds
dak feeds --category tech --limit 20
dak feeds --source Bloomberg --limit 10

# Stats & suggestions
dak stats
dak suggest "inflat"
```

### Filter Options

| Option | Description |
|--------|-------------|
| `--category <cat>` | `finance` / `news` / `tech` / `social` / `blog` / `podcast` / `uncategorized` |
| `--source <src>` | Filter by source name |
| `--from <date>` | Published after (ISO 8601) |
| `--to <date>` | Published before (ISO 8601) |
| `--limit <n>` | Max results (default 20) |
| `--offset <n>` | Pagination offset |
| `--json` | JSON output (recommended for programmatic use) |

---

## Reference

For full CLI / SDK reference (all commands, options, methods, error handling, examples), see [dak-cli.md](dak-cli.md).

## Tips

- Use `--json` output for programmatic processing: `dak search "tariff" --json --limit 100`
- Combine Chinese and English keywords with separate searches when covering bilingual topics.
- Tier limits apply: anonymous (28 days), free (90 days), premium (unlimited). Sign in or set `DAK_API_KEY` for broader history.
- For structured analysis (daily digest, topic deep-dive), use the companion `dak-summary` skill.
