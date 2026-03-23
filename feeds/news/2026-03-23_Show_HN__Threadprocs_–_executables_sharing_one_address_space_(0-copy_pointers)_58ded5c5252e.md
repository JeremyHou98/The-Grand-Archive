---
title: 'Show HN: Threadprocs – executables sharing one address space (0-copy pointers)'
source: Hacker News
source_url: 'https://hnrss.org/frontpage'
link: 'https://github.com/jer-irl/threadprocs'
author: jer-irl
published: 'Mon, 23 Mar 2026 16:08:01 +0000'
fetched: '2026-03-23T16:58:58.050Z'
category: news
tags:
  - 创业
  - YC
language: ''
guid: 'https://news.ycombinator.com/item?id=47491414'
hash: 58ded5c5252e
read: false
starred: false
---

This project launches multiple independent programs into a single shared virtual address space, while still behaving like separate processes (independent binaries, globals, and lifetimes). When threadprocs share their address space, pointers are valid across them with no code changes for well-behaved Linux binaries.

Unlike threads, each threadproc is a standalone and semi-isolated process. Unlike dlopen-based plugin systems, threadprocs run traditional executables with a \`main()\` function. Unlike POSIX processes, pointers remain valid across threadprocs because they share the same address space.

This means that idiomatic pointer-based data structures like \`std::string\` or \`std::unordered\_map\` can be passed between threadprocs and accessed directly (with the usual data race considerations).

This accomplishes a programming model somewhere between pthreads and multi-process shared memory IPC.

The implementation relies on directing ASLR and virtual address layout at load time and implementing a user-space analogue of \`exec()\`, as well as careful manipulation of threadproc file descriptors, signals, etc. It is implemented entirely in unprivileged user space code: <[https://github.com/jer-irl/threadprocs/blob/main/docs/02-imp...](https://github.com/jer-irl/threadprocs/blob/main/docs/02-implementation.md)\>.

There is a simple demo demonstrating “cross-threadproc” memory dereferencing at <[https://github.com/jer-irl/threadprocs/tree/main?tab=readme-...](https://github.com/jer-irl/threadprocs/tree/main?tab=readme-ov-file#demo)\>, including a high-level diagram.

This is relevant to systems of multiple processes with shared memory (often ring buffers or flat tables). These designs often require serialization or copying, and tend away from idiomatic C++ or Rust data structures. Pointer-based data structures cannot be passed directly.

There are significant limitations and edge cases, and it’s not clear this is a practical model, but the project explores a way to relax traditional process memory boundaries while still structuring a system as independently launched components.

* * *

Comments URL: [https://news.ycombinator.com/item?id=47491414](https://news.ycombinator.com/item?id=47491414)

Points: 18

\# Comments: 11
