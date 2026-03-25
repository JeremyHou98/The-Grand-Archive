---
title: 'Show HN: Optio – Orchestrate AI coding agents in K8s to go from ticket to PR'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/jonwiggins/optio'
author: jawiggins
published: 'Wed, 25 Mar 2026 17:10:21 +0000'
fetched: '2026-03-25T23:32:12.363Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47520220'
hash: b515b23388b5
read: false
starred: false
---

I think like many of you, I've been jumping between many claude code/codex sessions at a time, managing multiple lines of work and worktrees in multiple repos. I wanted a way to easily manage multiple lines of work and reduce the amount of input I need to give, allowing the agents to remove me as a bottleneck from as much of the process as I can. So I built an orchestration tool for AI coding agents:

Optio is an open-source orchestration system that turns tickets into merged pull requests using AI coding agents. You point it at your repos, and it handles the full lifecycle:

\- Intake — pull tasks from GitHub Issues, Linear, or create them manually

\- Execution — spin up isolated K8s pods per repo, run Claude Code or Codex in git worktrees

\- PR monitoring — watch CI checks, review status, and merge readiness every 30s

\- Self-healing — auto-resume the agent on CI failures, merge conflicts, or reviewer change requests

\- Completion — squash-merge the PR and close the linked issue

The key idea is the feedback loop. Optio doesn't just run an agent and walk away — when CI breaks, it feeds the failure back to the agent. When a reviewer requests changes, the comments become the agent's next prompt. It keeps going until the PR merges or you tell it to stop.

Built with Fastify, Next.js, BullMQ, and Drizzle on Postgres. Ships with a Helm chart for production deployment.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47520220](https://news.ycombinator.com/item?id=47520220)

Points: 6

\# Comments: 5
