---
title: 'Show HN: AI SDLC Scaffold, repo template for AI-assisted software development'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/pangon/ai-sdlc-scaffold/'
author: pangon
published: 'Sat, 21 Mar 2026 12:43:09 +0000'
fetched: '2026-03-21T17:23:15.436Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47466513'
hash: e6f9f66a5732
read: false
starred: false
---

I built an open-source repo template that brings structure to AI-assisted software development, starting from the pre-coding phases: objectives, user stories, requirements, architecture decisions.

It's designed around Claude Code but the ideas are tool-agnostic. I've been a computer science researcher and full-stack software engineer for 25 years, working mainly in startups. I've been using this approach on my personal projects for a while, then, when I decided to package it up as scaffold for more easy reuse, I figured it might be useful to others too. I published it under Apache 2.0, fork it and make it yours.

You can easily try it out: follow the instructions in the README to start using it.

The problem it solves:

AI coding agents are great at writing code, but they work much better when they have clear context about what to build and why. Most projects jump straight to implementation. This scaffold provides a structured workflow for the pre-coding phases, and organizes the output so that agents can navigate it efficiently across sessions.

How it works:

Everything lives in the repo alongside source code. The AI guidance is split into three layers, each optimized for context-window usage:

1\. Instruction files (CLAUDE.md, CLAUDE..md): always loaded, kept small. They are organized hierarchically, describe repo structure, maintain artifact indexes, and define cross-phase rules like traceability invariants.

2\. Skills (.claude/skills/SDLC-\*): loaded on demand. Step-by-step procedures for each SDLC activity: eliciting requirements, gap analysis, drafting architecture, decomposing into components, planning tasks, implementation.

3\. Project artifacts: structured markdown files that accumulate as work progresses: stakeholders, goals, user stories, requirements, assumptions, constraints, decisions, architecture, data model, API design, task tracking. Accessed selectively through indexes.

This separation matters because instruction files stay in the context window permanently and must be lean, skills can be detailed since they're loaded only when invoked, and artifacts scale with the project but are navigated via indexed tables rather than read in full.

Key design choices:

Context-window efficiency: artifact collections use markdown index tables (one-line description and trigger conditions) so the agent can locate what it needs without reading everything.

Decision capture: decisions made during AI reasoning and human feedback are persisted as a structured artifact, to make them reviewable, traceable, and consistently applied across sessions.

Waterfall-ish flow: sequential phases with defined outputs. Tedious for human teams, but AI agents don't mind the overhead, and the explicit structure prevents the unconstrained "just start vibecoding" failure mode.

How I use it:

Short, focused sessions. Each session invokes one skill, produces its output, and ends. The knowledge organization means the next session picks up without losing context. I've found that free-form prompting between skills is usually a sign the workflow is missing a piece.

Current limitations:

I haven't found a good way to integrate Figma MCP for importing existing UI/UX designs into the workflow. Suggestions welcome.

Feedback, criticism, and contributions are very welcome!

* * *

Comments URL: [https://news.ycombinator.com/item?id=47466513](https://news.ycombinator.com/item?id=47466513)

Points: 8

\# Comments: 1
