---
title: 'Show HN: Robust LLM Extractor for Websites in TypeScript'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/lightfeed/extractor'
author: andrew_zhong
published: 'Thu, 26 Mar 2026 03:55:52 +0000'
fetched: '2026-03-26T04:43:39.658Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47526486'
hash: 6166f0ae0756
read: false
starred: false
---

We've been building data pipelines that scrape websites and extract structured data for a while now. If you've done this, you know the drill: you write CSS selectors, the site changes its layout, everything breaks at 2am, and you spend your morning rewriting parsers.

LLMs seemed like the obvious fix — just throw the HTML at GPT and ask for JSON. Except in practice, it's more painful than that:

\- Raw HTML is full of nav bars, footers, and tracking junk that eats your token budget. A typical product page is 80% noise. - LLMs return malformed JSON more often than you'd expect, especially with nested arrays and complex schemas. One bad bracket and your pipeline crashes. - Relative URLs, markdown-escaped links, tracking parameters — the "small" URL issues compound fast when you're processing thousands of pages. - You end up writing the same boilerplate: HTML cleanup → markdown conversion → LLM call → JSON parsing → error recovery → schema validation. Over and over.

We got tired of rebuilding this stack for every project, so we extracted it into a library.

Lightfeed Extractor is a TypeScript library that handles the full pipeline from raw HTML to validated, structured data:

\- Converts HTML to LLM-ready markdown with main content extraction (strips nav, headers, footers), optional image inclusion, and URL cleaning - Works with any LangChain-compatible LLM (OpenAI, Gemini, Claude, Ollama, etc.) - Uses Zod schemas for type-safe extraction with real validation - Recovers partial data from malformed LLM output instead of failing entirely — if 19 out of 20 products parsed correctly, you get those 19 - Built-in browser automation via Playwright (local, serverless, or remote) with anti-bot patches - Pairs with our browser agent (@lightfeed/browser-agent) for AI-driven page navigation before extraction

We use this ourselves in production at Lightfeed, and it's been solid enough that we decided to open-source it.

GitHub: [https://github.com/lightfeed/extractor](https://github.com/lightfeed/extractor) npm: npm install @lightfeed/extractor Apache 2.0 licensed.

Happy to answer questions or hear feedback.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47526486](https://news.ycombinator.com/item?id=47526486)

Points: 6

\# Comments: 0
