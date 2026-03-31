---
title: 如何看待 Anthropic 官方工具 Claude Code 源码泄露事件？
source: 知乎热榜
source_url: '{{RSSHUB_BASE_URL}}/zhihu/hot'
link: 'https://www.zhihu.com/question/2022394365436248248'
author: ''
published: 'Tue, 31 Mar 2026 11:26:30 GMT'
fetched: '2026-03-31T23:32:58.575Z'
category: social
tags:
  - 知乎
  - 热榜
language: ''
guid: 'https://www.zhihu.com/question/2022394365436248248'
hash: d1f20a6a2be6
read: false
starred: false
---

近日安全研究员爆料，Anthropic 在 npm 官方仓库发布 Claude Code 更新时，因配置失误在 v2.1.88 版本中意外包含了体积约 60MB 的 Source Map 调试文件。 通过该泄露文件，研究人员已完整还原出 1906 个原始 TypeScript 源码文件。泄露内容详尽展示了工具与后端 API 的交互协议、内部遥测数据采集逻辑、安全沙箱的实现机制，以及此前被视为核心机密的 Prompt 拼接策略（System Prompt）。 虽然此次事件未直接涉及 Claude 模型权重，但由于源码被彻底公开，该工具的内部架构、进程间通信协议及权限控制逻辑已完全暴露在公众视野中。 请问这次泄露对 Anthropic 的技术壁垒会造成多大打击？竞争对手是否能通过这些源码复刻其在代码上下文处理上的工程经验？此外，这种基础工程失误对于正在使用该工具的企业和开发者来说，是否存在被利用安全漏洞或导致隐私泄露的风险？ 参考： \[1\] https://github.com/instructkr/claude-code \[2\] https://x.com/Fried\_rice/status/2038894956459290963
