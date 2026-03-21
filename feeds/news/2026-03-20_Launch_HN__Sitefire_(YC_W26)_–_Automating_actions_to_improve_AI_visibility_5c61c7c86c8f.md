---
title: 'Launch HN: Sitefire (YC W26) – Automating actions to improve AI visibility'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://news.ycombinator.com/item?id=47457472'
author: vincko
published: 'Fri, 20 Mar 2026 17:05:38 +0000'
fetched: '2026-03-20T23:44:37.818Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47457472'
hash: 5c61c7c86c8f
read: false
starred: false
---

Hi HN! We're Vincent and Jochen from sitefire ([https://sitefire.ai](https://sitefire.ai)). Our platform makes it easy for brands to improve their visibility in AI search.We’ve been working together for years and have backgrounds in RL/optimization at Stanford and software engineering. We came to this idea after speaking with marketing teams who were seeing declining traffic due to Google’s AI Overviews and didn’t know what to do.This space can feel esoteric. Many case studies, few actual studies. Constant battle against myths (e.g. you need a llms.txt vs. you don't need a llms.txt) and "GEO hacks". We try to be more data-driven. And we try to be more bold and build a system that not only monitors, but actually improves traffic from AI search.While Google performs a single search, AI search engines expand the user prompt into 3-10 fan-out queries. The sourced pages are ranked using a classified algorithm similar to Reciprocal Rank Fusion (RFF). Finally, the LLMs skim the pages and decide what snippets to cite. Our goal is making sure brands have the right content that makes it through this funnel.Here is how sitefire works:- The user defines a set of prompts they want to monitor. These are synthetic prompts - we generate them based on SEO keywords and their monthly search volume.- We submit these prompts to ChatGPT, Gemini, Google AI Mode, etc. on a daily basis and capture the answers. We extract fan-out queries, sourced pages, citations, and brand mentions.- For each topic, our agents analyze which web pages are sourced and cited the most, and why. They also consider similar pages that you already have.- Based on the diagnosis, our content agents draft improvements or create new pages, and push them directly to the client’s CMS.- We integrate with the client’s network logs and Google Analytics to monitor the increase in AI bot requests and human referrals to their page.This system is continuously updated, so it always shows which content works, and how to adapt the existing sitemap. For one client that used sitefire to optimize their blog, the AI-optimized articles increased their AI bot requests from ~200/day to ~570/day within ten days.A risk we recognize is that AI-generated content is filling brands’ websites with slop. Whilst it’s still early days and we don’t claim to have figured everything out yet, our intention is to mitigate this by focusing the content on specific, unique information: real product capabilities, real pricing, honest comparisons. The clients still review every page before it goes live, so they can ensure the content is true to their brand.Some clients use our platform themselves. For others we act more like an agency, automating steps as we go. The goal is for sitefire to run mostly on its own, with clients approving changes via Slack, Claude or their CMS.Here's a video demo: [https://screen.studio/share/fw7VQQak](https://screen.studio/share/fw7VQQak)If you'd like to try what we've built so far, sign up at [https://sitefire.ai](https://sitefire.ai).

---

Comments URL: [https://news.ycombinator.com/item?id=47457472](https://news.ycombinator.com/item?id=47457472)

Points: 32

# Comments: 20
