---
title: 'Show HN: TTF-DOOM – A raycaster running inside TrueType font hinting'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/4RH1T3CT0R7/ttf-doom'
author: 4RH1T3CT0R
published: 'Mon, 06 Apr 2026 19:25:39 +0000'
fetched: '2026-04-06T22:34:05.171Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47665685'
hash: 645691bf19bd
read: false
starred: false
---

TrueType fonts have a hinting VM that grid-fits glyphs. It has a stack, storage area, conditionals, function calls, and it turns out it's Turing-complete. So I built a raycasting engine in the hinting bytecode.

The glyph "A" in the font has 16 vertical bar contours. The hinting program reads player coordinates from font variation axes via GETVARIATION, does DDA ray marching against a tile map in the storage area, and repositions bar heights with SCFS. It ends up looking like a crude Wolfenstein-style view.

Small visuzlization: [https://github.com/4RH1T3CT0R7/ttf-doom/blob/main/docs/media...](https://github.com/4RH1T3CT0R7/ttf-doom/blob/main/docs/media/transform.gif)

About 6.5 KB of bytecode total - 13 functions, 795 storage slots, sin/cos lookup tables.

JS handles movement, enemies, and shooting, then passes the coordinates to the font through CSS font-variation-settings. The font is basically a weird GPU.

The weirdest parts: - TrueType MUL does (a_b)/64, not a_b. So 1\*4=0. The DIV instruction is equally cursed. - No WHILE loops. Everything compiles to recursive FDEFs. FreeType limits call depth to ~64 frames. - SVTCA\[0\] is Y, SVTCA\[1\] is X. Of course.

There's a small compiler behind this - lexer, parser, codegen - that turns a C-like DSL into TT assembly.

Demo GIF: [https://github.com/4RH1T3CT0R7/ttf-doom/blob/main/docs/media...](https://github.com/4RH1T3CT0R7/ttf-doom/blob/main/docs/media/demo.gif)

Live demo: [https://4rh1t3ct0r7.github.io/ttf-doom/](https://4rh1t3ct0r7.github.io/ttf-doom/) (Chrome/Edge, WASD+arrows, Space to shoot, Tab for debug overlay)

This is a DOOM-style raycaster, not a port of the original engine - similar to DOOMQL and the Excel DOOM. The wall rendering does happen in the font's hinting VM though. Press Tab in the demo to watch the font variation axes change as you move.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47665685](https://news.ycombinator.com/item?id=47665685)

Points: 8

\# Comments: 2
