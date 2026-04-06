---
title: 'Launch HN: Freestyle: Sandboxes for AI Coding Agents'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://www.freestyle.sh'
author: benswerd
published: 'Mon, 06 Apr 2026 16:32:11 +0000'
fetched: '2026-04-06T17:41:59.836Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47663147'
hash: 81431d1adcee
read: false
starred: false
---

We’re Ben and Jacob, cofounders of Freestyle ([https://freestyle.sh](https://freestyle.sh)). We’re building a cloud for Coding Agents.

For the first generation of agents it looked like workflows with minimal tools. 2 years ago we published a package to let AI work in SQL, at that time GPT-4 could write simple scripts. Soon after the first AI App Builders started using AI to make whole websites; we supported that with a serverless deploy system.

But the current generation is going much further, instead of minimal tools and basic serverless apps AI can utilize the full power of a computer (“sandbox”). We’re building sandboxes that are interchangeable with EC2s from your agents perspective, with bonus features:

1\. We’ve figured out how to fork a sandbox horizontally without more than a 400ms pause in it. That's not forking the filesystem, we mean forking the whole memory of it. If you’re half way down a browser page with animations running, they’ll be in the same place in all the forks. If you’re running a minecraft server every block and player will be in the same place on the forks. If you’re running a local environment and an error comes up in process that error will be there in all the forks. This works for snapshotting as well, you can save your place and come back weeks later.

2\. Our sandboxes start in ~500ms.

Demo: [https://www.loom.com/share/8b3d294d515442f296aecde1f42f5524](https://www.loom.com/share/8b3d294d515442f296aecde1f42f5524)

Compared with other sandboxes, our goal is to be the most powerful. We support full Linux + hardware-virtualization, eBPF, Fuse, etc. We run full Debian with multiple users and we use a systemd init instead of runc. Whatever your AI expects to work on debian should work on these vms, and if it doesn’t send a bug report.

In order to make this possible, we’ve moved to our own bare metal racks. Early in our testing we realized that moving VMs across cloud nodes would not have acceptable performance properties. We asked Google Cloud and AWS for a quote on their bare metal nodes and found that the monthly cost was equivalent to the total cost of the hardware so we did that.

Our goal is to build the necessary infrastructure to replicate the human devloop on the massively multi-tenant scale of AI, so these VMs should be as powerful as the ones you’re used to, while also being available to provision in seconds.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47663147](https://news.ycombinator.com/item?id=47663147)

Points: 37

\# Comments: 11
