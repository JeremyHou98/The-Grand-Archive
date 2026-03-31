---
title: 'Show HN: How This Graybeard Built the Fastest and Freest Postgres BM25 Search'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/timescale/pg_textsearch'
author: tjgreen
published: 'Tue, 31 Mar 2026 16:29:52 +0000'
fetched: '2026-03-31T19:57:26.399Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47589856'
hash: f79dd2057e58
read: false
starred: false
---

Last summer we faced a conundrum at my company, Tiger Data, a Postgres cloud vendor whose main business is in timeseries data. We were trying to grow our business towards emerging AI-centric workloads and wanted to provide a state-of-the-art hybrid search stack in Postgres. We'd already built pgvectorscale in house with the goal of scaling semantic search beyond pgvector's main memory limitations. We just needed a scalable ranked keyword search solution too.

The problem: core Postgres doesn't provide this; the leading Postgres BM25 extension, ParadeDB, is guarded behind AGPL; developing our own extension appeared daunting. We'd need a small team of sharp engineers and 6-12 months, I figured. And we'd probably still fall short of the performance of a mature system like Parade/Tantivy.

Or would we? I'd be experimenting long enough with AI-boosted development at that point to realize that with the latest tools (Claude Code + Opus) and an experienced hand (I've been working in database systems internals for 25 years now), the old time estimates pretty much go out the window.

I told our CTO I thought I could solo the project in one quarter. This raised some eyebrows.

It did take a little more time than that (two quarters), and we got some real help from the community (amazing!) after open-sourcing the pre-release. But I'm thrilled/exhausted today to share that pg\_textsearch v1.0 is freely available via open source (Postgres license), on Tiger Data cloud, and hopefully soon, a hyperscalar near you:

[https://github.com/timescale/pg\_textsearch](https://github.com/timescale/pg_textsearch)

In the blog post accompanying the release, I overview the architecture and present benchmark results using MS-MARCO. To my surprise, we were not only able to meet Parade/Tantivy's query performance, but exceed it substantially, measuring a 4.7x advantage on query throughput at scale:

[https://www.tigerdata.com/blog/pg-textsearch-bm25-full-text-...](https://www.tigerdata.com/blog/pg-textsearch-bm25-full-text-search-postgres)

It's exciting (and, to be honest, a little unnerving) to see a field I've spent so much time toiling in change so quickly in ways that enable us to be more ambitious in our technical objectives. Technical moats are moats no longer.

The benchmark scripts and methodology are available in the github repo. Happy to answer any questions in the thread.

Thanks,

TJ (tj@tigerdata.com)

* * *

Comments URL: [https://news.ycombinator.com/item?id=47589856](https://news.ycombinator.com/item?id=47589856)

Points: 22

\# Comments: 1
