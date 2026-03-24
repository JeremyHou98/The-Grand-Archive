---
title: 'Show HN: ProofShot – Give AI coding agents eyes to verify the UI they build'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://proofshot.argil.io/'
author: jberthom
published: 'Tue, 24 Mar 2026 07:46:46 +0000'
fetched: '2026-03-24T09:27:39.855Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47499672'
hash: cbe464f581d5
read: false
starred: false
---

I use AI agents to build UI features daily. The thing that kept annoying me: the agent writes code but never sees what it actually looks like in the browser. It can’t tell if the layout is broken or if the console is throwing errors.

So I built a CLI that lets the agent open a browser, interact with the page, record what happens, and collect any errors. Then it bundles everything — video, screenshots, logs — into a self-contained HTML file I can review in seconds.

proofshot start --run "npm run dev" --port 3000 # agent navigates, clicks, takes screenshots proofshot stop

It works with whatever agent you use (Claude Code, Cursor, Codex, etc.) — it’s just shell commands. It's packaged as a skill so your AI coding agent knows exactly how it works. It's built on agent-browser from Vercel Labs which is far better and faster than Playwright MCP.

It’s not a testing framework. The agent doesn’t decide pass/fail. It just gives me the evidence so I don’t have to open the browser myself every time.

Open source and completely free.

[https://github.com/AmElmo/proofshot](https://github.com/AmElmo/proofshot)

* * *

Comments URL: [https://news.ycombinator.com/item?id=47499672](https://news.ycombinator.com/item?id=47499672)

Points: 20

\# Comments: 14
