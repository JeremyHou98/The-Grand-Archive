---
title: 'Show HN: Red Grid Link – peer-to-peer team tracking over Bluetooth, no servers'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/RedGridTactical/RedGridLink'
author: redgridtactical
published: 'Fri, 20 Mar 2026 22:25:51 +0000'
fetched: '2026-03-20T23:44:37.808Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47461529'
hash: 33429a50f9b1
read: false
starred: false
---

I go on a lot of backcountry trips where I barely get cell service. If my group splits, nobody knows knows where anyone is until you regroup at camp or at your destination. You can buy Garmin radios or try to set up an ATAK, but ATAK is Android-only and assumes you have a TAK Server running somewhere to make use of all of the functionality. Cool tools themselves, but expensive to set up correctly. I just wanted two iPhones to share their location directly over Bluetooth when cell coverage was lacking.Red Grid Link does that. Start a session, and anyone nearby running the app shows up on your offline map. When they walk out of range their marker stays as a "ghost" that slowly fades.The hard part was making sync reliable over BLE. The connections drop all the time. Someone turns a corner, walks behind a vehicle, whatever. I built a CRDT sync layer (LWW Register + G-Counter) so there's never merge conflicts. Each update is just under 200 bytes (from what I have tested so far). When a user/teammate disappears the app does exponential backoff from 2 to 30 seconds before giving up and marking them as a ghost.Everything is encrypted (AES-256-GCM, ECDH P-256 key exchange per peer pair). Sessions can require a PIN or QR code to join. It also offers offline topo maps with MGRS grid coordinates, same system as in my other app, Red Grid MGRS.The app is free, and I'm looking for some honest feedback from other real-world users. Let me know if you have any questions!

---

Comments URL: [https://news.ycombinator.com/item?id=47461529](https://news.ycombinator.com/item?id=47461529)

Points: 8

# Comments: 1
