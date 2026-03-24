---
title: 'Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/BerriAI/litellm/issues/24512'
author: dot_treo
published: 'Tue, 24 Mar 2026 12:06:29 +0000'
fetched: '2026-03-24T19:52:16.304Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47501426'
hash: f9d9074ab24e
read: false
starred: false
---

About an hour ago new versions have been deployed to PyPI.

I was just setting up a new project, and things behaved weirdly. My laptop ran out of RAM, it looked like a forkbomb was running.

I've investigated, and found that a base64 encoded blob has been added to proxy\_server.py.

It writes and decodes another file which it then runs.

I'm in the process of reporting this upstream, but wanted to give everyone here a headsup.

It is also reported in this issue: [https://github.com/BerriAI/litellm/issues/24512](https://github.com/BerriAI/litellm/issues/24512)

* * *

Comments URL: [https://news.ycombinator.com/item?id=47501426](https://news.ycombinator.com/item?id=47501426)

Points: 180

\# Comments: 310
