---
title: 'Show HN: I made open source, zero power PCB hackathon badges'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/KaiPereira/Overglade-Badges'
author: kaipereira
published: 'Sat, 04 Apr 2026 14:20:21 +0000'
fetched: '2026-04-04T22:27:21.252Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47639303'
hash: 2b52a65a0620
read: false
starred: false
---

I love getting cool swag from hackathons and I also love designing PCB's, so when my friend asked me if I would design hackathon badges for a large game jam in singapore, I was absolutely down!

The theme of overglade was a "The game jam within a game", pretty cool concept right! High schoolers from around the world were flown out to the event by hackclub after they spent about 70 hours designing their own game.

These badges needed to be really cheap and simple, because we were going to manufacture about a hundred in a pretty limited amount of time. I went with a zero-power approach, which means sticking with e-inks, and I decided to include NFC if the organizers wanted to introduce it into the roleplay of the event, and so participants could add their website or github if they so choose!

I used an RP2040-based architecture because it's really easy and cheap to get on the first try, and then added an ST25 passive NFC tag which was really simple to configure. The badge is in the shape of a ticket, because you got a "ticket" to the event after spending a lot of time designing games to qualify! 20 GPIO's are broken out onto the edges if you're ever in a pinch at a hackathon, and I wanted the badges to feel really fun so there's a lot of art designed by various people in the community!

The badge worked really well and I learned quite a lot in the process. My takeaways are to manufacture a BUNCH of extra badges, because some will end up breaking; to think about your PCB in 3D, because one of the inductors was a bit tall and caused more badges to break; and to have a strong vision of your final product, because it really helped me to create something unique and beautiful :D

I like to journal about all my projects, so if you'd like to read my full design process, feel free to take a look at my journal ([https://github.com/KaiPereira/Overglade-Badges/blob/master/J...](https://github.com/KaiPereira/Overglade-Badges/blob/master/JOURNAL.md)). If you also have any questions or feedback, I'd be happy to answer them!

* * *

Comments URL: [https://news.ycombinator.com/item?id=47639303](https://news.ycombinator.com/item?id=47639303)

Points: 4

\# Comments: 0
