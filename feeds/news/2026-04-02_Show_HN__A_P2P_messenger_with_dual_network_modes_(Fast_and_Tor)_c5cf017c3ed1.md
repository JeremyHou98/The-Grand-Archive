---
title: 'Show HN: A P2P messenger with dual network modes (Fast and Tor)'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/Realman78/Kiyeovo/'
author: Realman78
published: 'Thu, 02 Apr 2026 15:32:45 +0000'
fetched: '2026-04-02T21:35:19.295Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47615844'
hash: c5cf017c3ed1
read: false
starred: false
---

Hello HN,

I have been working on a desktop P2P messenger called Kiyeovo for the last ~8 months, and I just published its beta version.

Quick backstory: It started out as a CLI application for my Graduate Thesis, where I tried to make the most secure and private messenger application possible. Then, I transformed it into a desktop application, gave it "clearnet" support and added a bunch of features.

Short summary:

The app runs in 2 completely isolated modes:

\- fast mode: relay/DCUtR -> lower latency, calls support

\- anonymous mode: Tor message routing -> slower, anonymous

These modes use different protocol IDs, DHT namespaces, pubsub topics and storage scopes so there’s no data crossover between them.

Messaging works peer-to-peer when both parties are online, but falls back to DHT "offline buckets" when one of them is not. To ensure robustness, messages are ACK-ed and deleted after being read.

Group chats use GossipSub for realtime messaging. Group messages are also saved to offline buckets in order for offline users to be able to read them upon logging in. Kick/Join/Leave events are also propagated using the DHT. Group metadata and all offline data is of course encrypted.

Other features: Chats are E2E, file sharing is supported, 1:1 audio/video calls are supported (only in fast mode though, using WebRTC)

Tradeoffs: Tor has noticeable latency, offline delivery is not immediately guaranteed, but rather "eventually consistent"; beta version does not have group calls yet.

I’d appreciate feedback, that's why I posted this as a beta version

Repo: [https://github.com/Realman78/Kiyeovo](https://github.com/Realman78/Kiyeovo)

* * *

Comments URL: [https://news.ycombinator.com/item?id=47615844](https://news.ycombinator.com/item?id=47615844)

Points: 16

\# Comments: 2
