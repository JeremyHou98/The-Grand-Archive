---
title: 'Show HN: I built a Cargo-like build tool for C/C++'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/randerson112/craft'
author: randerson_112
published: 'Thu, 09 Apr 2026 16:04:54 +0000'
fetched: '2026-04-09T17:57:18.267Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47705413'
hash: 199456df9ce0
read: false
starred: false
---

I love C and C++, but setting up projects can sometimes be a pain.

Every time I wanted to start something new I'd spend the first hour writing CMakeLists.txt, figuring out find\_package, copying boilerplate from my last project, and googling why my library isn't linking. By the time the project was actually set up I'd lost all momentum.

So, I built Craft - a lightweight build and workflow tool for C and C++. Instead of writing CMake, your project configuration goes in a simple craft.toml:

```
  [project]
  name = "my_app"
  version = "0.1.0"
  language = "c"
  c_standard = 99

  [build]
  type = "executable"
```

Run craft build and Craft generates the CMakeLists.txt automatically and builds your project. Want to add dependencies? That's just a simple command:

```
  craft add --git https://github.com/raysan5/raylib --links raylib
  craft add --path ../my_library
  craft add sfml
```

Craft will clone the dependency, regenerate the CMake, and rebuild your project for you.

Other Craft features: craft init - adopt an existing C/C++ project into Craft or initialize an empty directory. craft template - save any project structure as a template to be initialized later. craft gen - generate header and source files with starter boilerplate code. craft upgrade - keeps itself up to date.

CMakeLists.extra.cmake for anything that Craft does not yet handle.

Cross platform - macOS, Linux, Windows.

It is still early (I just got it to v1.0.0) but I am excited to be able to share it and keep improving it.

Would love feedback. Please also feel free to make pull requests if you want to help with development!

* * *

Comments URL: [https://news.ycombinator.com/item?id=47705413](https://news.ycombinator.com/item?id=47705413)

Points: 32

\# Comments: 44
