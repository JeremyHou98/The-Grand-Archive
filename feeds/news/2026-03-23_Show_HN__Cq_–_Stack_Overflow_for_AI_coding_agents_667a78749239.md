---
title: 'Show HN: Cq – Stack Overflow for AI coding agents'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://blog.mozilla.ai/cq-stack-overflow-for-agents/'
author: peteski22
published: 'Mon, 23 Mar 2026 16:11:03 +0000'
fetched: '2026-03-23T23:55:01.569Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47491466'
hash: 667a78749239
read: false
starred: false
---

Hi all, I'm Peter at Staff Engineer and Mozilla.ai and I want to share our idea for a standard for shared agent learning, conceptually it seemed to fit easily in my mental model as a Stack Overflow for agents.

The project is trying to see if we can get agents (any agent, any model) to propose 'knowledge units' (KUs) as a standard schema based on gotchas it runs into during use, and proactively query for existing KUs in order to get insights which it can verify and confirm if they prove useful.

It's currently very much a PoC with a more lofty proposal in the repo, we're trying to iterate from local use, up to team level, and ideally eventually have some kind of public commons.

At the team level (see our Docker compose example) and your coding agent configured to point to the API address for the team to send KUs there instead - where they can be reviewed by a human in the loop (HITL) via a UI in the browser, before they're allowed to appear in queries by other agents in your team.

We're learning a lot even from using it locally on various repos internally, not just in the kind of KUs it generates, but also from a UX perspective on trying to make it easy to get using it and approving KUs in the browser dashboard. There are bigger, complex problems to solve in the future around data privacy, governance etc. but for now we're super focussed on getting something that people can see some value from really quickly in their day-to-day.

Tech stack:

\* Skills - markdown

\* Local Python MCP server (FastMCP) - managing a local SQLite knowledge store

\* Optional team API (FastAPI, Docker) for sharing knowledge across an org

\* Installs as a Claude Code plugin or OpenCode MCP server

\* Local-first by default; your knowledge stays on your machine unless you opt into team sync by setting the address in config

\* OSS (Apache 2.0 licensed)

Here's an example of something which seemed straight forward, when asking Claude Code to write a GitHub action it often used actions that were multiple major versions out of date because of its training data. In this case I told the agent what I saw when I reviewed the GitHub action YAML file it created and it proposed the knowledge unit to be persisted. Next time in a completely different repo using OpenCode and an OpenAI model, the cq skill was used up front before it started the task and it got the information about the gotcha on major versions in training data and checked GitHub proactively, using the correct, latest major versions. It then confirmed the KU, increasing the confidence score.

I guess some folks might say: well there's a CLAUDE.md in your repo, or in ~/.claude/ but we're looking further than that, we want this to be available to all agents, to all models, and maybe more importantly we don't want to stuff AGENTS.md or CLAUDE.md with loads of rules that lead to unpredictable behaviour, this is targetted information on a particular task and seems a lot more useful.

Right now it can be installed locally as a plugin for Claude Code and OpenCode:

claude plugin marketplace add mozilla-ai/cq claude plugin install cq

This allows you to capture data in your local ~/.cq/local.db (the data doesn't get sent anywhere else).

We'd love feedback on this, the repo is open and public - so GitHub issues are welcome. We've posted on some of our social media platforms with a link to the blog post (below) so feel free to reply to us if you found it useful, or ran into friction, we want to make this something that's accessible to everyone.

Blog post with the full story: [https://blog.mozilla.ai/cq-stack-overflow-for-agents/](https://blog.mozilla.ai/cq-stack-overflow-for-agents/) GitHub repo: [https://github.com/mozilla-ai/cq](https://github.com/mozilla-ai/cq)

Thanks again for your time.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47491466](https://news.ycombinator.com/item?id=47491466)

Points: 20

\# Comments: 4
