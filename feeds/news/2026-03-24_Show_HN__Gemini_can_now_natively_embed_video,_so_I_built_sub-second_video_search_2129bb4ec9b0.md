---
title: >-
  Show HN: Gemini can now natively embed video, so I built sub-second video
  search
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/ssrajadh/sentrysearch'
author: sohamrj
published: 'Tue, 24 Mar 2026 14:58:27 +0000'
fetched: '2026-03-24T16:06:21.389Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47503617'
hash: 2129bb4ec9b0
read: false
starred: false
---

Gemini Embedding 2 can project raw video directly into a 768-dimensional vector space alongside text. No transcription, no frame captioning, no intermediate text. A query like "green car cutting me off" is directly comparable to a 30-second video clip at the vector level.

I used this to build a CLI that indexes hours of footage into ChromaDB, then searches it with natural language and auto-trims the matching clip. Demo video on the GitHub README. Indexing costs ~$2.50/hr of footage. Still-frame detection skips idle chunks, so security camera / sentry mode footage is much cheaper.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47503617](https://news.ycombinator.com/item?id=47503617)

Points: 6

\# Comments: 0
