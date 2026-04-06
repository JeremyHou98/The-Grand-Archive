---
title: 'Show HN: I built a 2-min quiz that shows you how bad you are at estimating'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://www.convexly.app/'
author: convexly
published: 'Mon, 06 Apr 2026 12:50:20 +0000'
fetched: '2026-04-06T20:35:30.528Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47660262'
hash: a69186ddbbb0
read: false
starred: false
---

I've gotten to the point in my career where I now make strategic decisions often (hiring, firing, choosing what equipment to go with, etc.), as well as in my personal life where I need to strongly weigh my options for a big purchase or investment. I found a not-so-surprising parallel between the two as these decisions "resolved." Am I making good decisions or am I getting lucky?

Did some research, read some books, and realized I should get in the habit of tracking my decision process. That quickly turned into the idea that formed Convexly.

The landing page is a 10-question calibration quiz where you assign a confidence level to statements drawn from a rotating pool of 100 (working on making the pool larger) and you get a Brier score back instantly. No signup required, and you can share your scores right away.

If you find it interesting, you can create a free account where you can track your decisions with probability estimates, resolve them over time, and get calibration curves that show if you are over/underconfident. From what I've seen so far, users are overconfident when they say they're between 70-90% sure about something.

For the math: Beta-PERT distributions for the payoff modeling, Kelly criterion for the position sizing, signal detection theory for separating skill from randomness.

On the coding side: FastAPI with NumPy/SciPy, frontend in Next.js and Supabase.

So far this has been a solo project of mine. If you want to see all the features use code SHOWHN for 30 days of full access, no credit card required.

Curious if anything about your score surprised you after taking the quiz.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47660262](https://news.ycombinator.com/item?id=47660262)

Points: 7

\# Comments: 2
