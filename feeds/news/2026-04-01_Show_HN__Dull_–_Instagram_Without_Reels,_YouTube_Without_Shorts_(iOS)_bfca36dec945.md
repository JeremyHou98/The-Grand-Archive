---
title: 'Show HN: Dull – Instagram Without Reels, YouTube Without Shorts (iOS)'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://getdull.app'
author: kasparnoor
published: 'Wed, 01 Apr 2026 21:04:53 +0000'
fetched: '2026-04-01T22:34:52.864Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47606560'
hash: bfca36dec945
read: false
starred: false
---

I kept deleting and redownloading Instagram because I couldn't stop watching Reels but needed the app for DMs. Tried screen time limits, just overrode them. So I built this.

Dull loads Instagram, YouTube, Facebook, and X and filters out short-form content with a mix of CSS and JS injection. MutationObserver handles anything that lazy-loads after the page renders, which is most of the annoying stuff since these platforms love to load content dynamically.

The ongoing work is maintaining the filters. Platforms change their DOM all the time, Instagram obfuscates class names, YouTube restructures how Shorts appear in the feed, etc. It's a cat-and-mouse thing that never really ends.

Also has grayscale mode, time limits, and usage tracking.

Happy to answer questions.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47606560](https://news.ycombinator.com/item?id=47606560)

Points: 5

\# Comments: 0
