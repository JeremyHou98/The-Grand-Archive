---
title: 'Show HN: A deterministic middleware to compress LLM prompts by 50-80%'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/ARPAHLS/skillware'
author: rosspeili
published: 'Sat, 21 Mar 2026 15:49:30 +0000'
fetched: '2026-03-21T16:55:08.574Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47468104'
hash: 67ea45f8a7d1
read: false
starred: false
---

Hi HN,

I’m working on Skillware, an open-source framework that treats AI capabilities as installable, self-contained modules.

I just added a "Prompt Token Rewriter" skill. It’s an offline heuristic middleware that strips conversational filler and redundant context from long agentic loops before they hit the LLM. It saves significant token costs and inference time, and it's 100% deterministic (no extra model calls).

We're building a registry of "Agentic Know-How" (Logic + Cognition + Governance). If you have a specialized tool for LLMs or want to see what a "standard" skill looks like, I'd love your feedback or a PR:

[https://github.com/ARPAHLS/skillware](https://github.com/ARPAHLS/skillware)

* * *

Comments URL: [https://news.ycombinator.com/item?id=47468104](https://news.ycombinator.com/item?id=47468104)

Points: 10

\# Comments: 3
