---
title: 'Show HN: PhAIL – Real-robot benchmark for AI models'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://phail.ai'
author: vertix
published: 'Tue, 31 Mar 2026 16:25:43 +0000'
fetched: '2026-03-31T19:57:26.408Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47589797'
hash: 245418c8368c
read: false
starred: false
---

I built this because I couldn't find honest numbers on how well VLA models \[1\] actually work on commercial tasks. I come from search ranking at Google where you measure everything, and in robotics nobody seemed to know.

PhAIL runs four models (OpenPI/pi0.5, GR00T, ACT, SmolVLA) on bin-to-bin order picking – one of the most common warehouse operations. Same robot (Franka FR3), same objects, hundreds of blind runs. The operator doesn't know which model is running.

Best model: 64 UPH. Human teleoperating the same robot: 330. Human by hand: 1,300+.

Everything is public – every run with synced video and telemetry, the fine-tuning dataset, training scripts. The leaderboard is open for submissions.

Happy to answer questions about methodology, the models, or what we observed.

\[1\] Vision-Language-Action: [https://en.wikipedia.org/wiki/Vision-language-action\_model](https://en.wikipedia.org/wiki/Vision-language-action_model)

* * *

Comments URL: [https://news.ycombinator.com/item?id=47589797](https://news.ycombinator.com/item?id=47589797)

Points: 12

\# Comments: 8
