---
title: 'Zooming UIs in 2026: Prezi, impress.js, and why I built something different'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://news.ycombinator.com/item?id=47665194'
author: tinchox6
published: 'Mon, 06 Apr 2026 18:53:15 +0000'
fetched: '2026-04-06T19:52:01.971Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47665194'
hash: 76675e81a40f
read: false
starred: false
---

There are essentially two established ways to use zooming in web interfaces today. They serve different purposes and make different tradeoffs. I built a third one, so I'll try to be fair about what each does well and where it falls short.

\* Prezi Prezi pioneered the zooming canvas for presentations and remains the market leader in that space. It recently added AI-powered generation and text editing tools. It's a polished product with real traction.

But Prezi is a closed platform, not a library. You can't use its zoom engine in your own app. Pricing starts at $15/month for meaningful features, and exporting to PowerPoint flattens all zoom effects into static slides. A recurring complaint from users is that the zooming and panning transitions cause motion sickness. And fundamentally, Prezi uses zoom as a storytelling device between pre-arranged frames. It's not a navigation model. It's a presentation model.

\* impress.js impress.js brought Prezi-like zooming to the open web. It's a presentation framework based on CSS3 transforms and transitions, directly inspired by Prezi. It was genuinely groundbreaking when it launched. Its architecture is step-based: you position "steps" in 3D space and the camera moves between them. That's great for presentations, but it doesn't help you build an app where users navigate by zooming into content. impress.js has no concept of dynamically mounting views, managing zoom depth, or handling navigation state. It's a slide deck engine with a zoom trick.

\* Zumly This is what I built. Full disclosure: I'm the sole developer. The idea is offering an alternative to traditional page navigation using zooming. You mark an element as zoomable, point it to a view, and Zumly handles the transition and inserts new views. That's basically it.

I started Zumly in 2020 after leaving behind Zircle UI (a Vue zooming library), trying to take what I learned further. Framework-agnostic, focused just on the zoom part. Since then I've rewritten the engine several times, changed the approach more than once. Only now I'm actually happy with how it feels.

Views are dynamically mounted and unmounted during zoom transitions. In impress.js, all steps exist in the DOM simultaneously. In Zumly, you zoom into a trigger element, and the target view gets injected and scaled into place. This is closer to how routing works in SPAs than to how slide decks work.

The landing page is built with Zumly itself so you can get the feel before touching any code.

Curious if anyone else has thought about this space. What makes zooming UIs work or fail?

Landing page (built with Zumly): https://zumerlab.github.io/zumly

GitHub: https://github.com/zumerlab/zumly

* * *

Comments URL: [https://news.ycombinator.com/item?id=47665194](https://news.ycombinator.com/item?id=47665194)

Points: 11

\# Comments: 2
