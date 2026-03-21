---
title: Cursor自研新模型反超 Opus 4.6，主打“价格打一折”，网友群嘲“Kimi 2.5套壳”，马斯克认证
source: 华尔街见闻
source_url: '{{RSSHUB_BASE_URL}}/wallstreetcn/news/global'
link: 'https://wallstreetcn.com/articles/3768054'
author: ''
published: 'Sat, 21 Mar 2026 05:33:37 GMT'
fetched: '2026-03-21T10:24:07.770Z'
category: finance
tags:
  - 财经
  - 全球市场
language: ''
guid: '3768054'
hash: a94b05316383
read: false
starred: false
---

AI编程工具Cursor高调发布自研模型Composer 2，宣称性能超越Claude Opus 4.6且价格大幅压低，却在不到3小时内遭开发者揭穿——其底层基座正是中国月之暗面的开源模型Kimi K2.5。

这场"自研"风波迅速席卷AI社区，马斯克亲自下场认证，最终以Cursor联合创始人公开致歉、Kimi官方发文祝贺收场。

3月21日，据硬AI消息，Cursor联合创始人Aman Sanger在事件发酵后发文承认，**"没有在博客中从一开始就提及Kimi基础模型是我们的疏漏，会在下一个模型中修正这一点。"**

月之暗面官方账号随即回应："**恭喜Cursor推出Composer 2**，很骄傲看到Kimi K2.5成为基础模型，这就是我们喜欢的开源生态。"月之暗面同时澄清，Cursor系通过Fireworks AI托管的强化学习与推理平台访问Kimi K2.5，**属于授权商业合作**。

## 性能超越Opus 4.6，价格"脚踝斩"

Cursor本周五正式上线Composer 2，并在发布博客中宣称，该模型在其衡量的所有基准测试上均取得大幅提升，包括Terminal-Bench 2.0和SWE-bench Multilingual。

![](https://wpimg-wscn.awtmt.com/0bf89548-55ea-43ff-8fe5-774b1b55594e.png)

在衡量智能体终端操作能力的Terminal-Bench 2.0上，Composer 2的表现位于GPT-5.4和Claude Opus 4.6之间，在CursorBench基准上的性价比表现则明显超过上述两款模型。

**定价是Cursor此次发布的核心卖点。**标准版Composer 2的输入价格为0.5美元/百万tokens、输出价格为2.5美元/百万tokens，与Claude Opus 4.6相比几乎是"脚踝斩"级别的降幅。

Cursor同步推出速度更快的变体Composer 2 Fast，定价为每百万输入tokens 1.5美元、每百万输出tokens 7.5美元，在延续价格优势的同时主打响应速度。

Cursor将这一性价比突破归因于一种新的强化学习方法，并强调这是"实实在在训练出来的能力，而非推理技巧"。

## 发布不到3小时，底层基座遭曝光

然而，Composer 2的高光时刻极为短暂。发布后不到3小时，X平台用户@fynnso发现该模型的模型ID显示为kimi-k2p5-rl-0317-s515-fast，随即得出结论："Composer 2其实就是经过强化学习的Kimi K2.5。"

![](https://wpimg-wscn.awtmt.com/b35cbd87-3bfb-4ff3-99ae-f22e927492ea.png)

**这一发现迅速在X和Hacker News等技术社区扩散，梗图与讨论齐飞。**马斯克亦在@fynnso的帖子下直接回复"Yeah, it's Kimi 2.5"，进一步放大了话题热度。

![](https://wpimg-wscn.awtmt.com/2c6b8d66-37d0-49c8-b103-b72bc72bca9a.png)

Reddit社区r/singularity的讨论同样热烈。有用户评论称：

> "最搞笑的是，大家还在夸Composer 2是巨大飞跃，结果全程用的是别人的模型。这让人不禁想，有多少所谓'专有模型'其实只是套了个logo的开源微调版。"
> 
> ![](https://wpimg-wscn.awtmt.com/e1427185-3a93-420f-aa8f-1ec7cad26686.png)

也有观点认为，Cursor的真正护城河在于其从大量开发者使用中积累的任务解决数据，而非预训练本身，"每个投资人都知道他们没有在做自己的基础模型，他们本应从一开始就坦诚说明。"

## Cursor致歉，Kimi确认授权合作

面对舆论压力，Cursor团队做出正面回应。

Aman Sanger公开确认，团队对多个基座模型进行了困惑度评测，Kimi K2.5"证明是最强的"，随后在此基础上叠加了持续预训练和4倍规模的高算力强化学习，并通过Fireworks AI的推理与RL采样器进行部署。

![](https://wpimg-wscn.awtmt.com/0477924c-689e-4822-9e50-684407262f34.png)

Cursor开发者教育副总裁Lee Robinson补充披露了更多技术细节：**最终模型中来自基座的算力约占1/4，其余3/4来自Cursor自身训练。**

Robinson同时表示，虽然Composer 2基于开源模型开发，但未来团队也会进行完整的预训练。

![](https://wpimg-wscn.awtmt.com/cbfe1e42-6737-4d9c-bdf8-1edbfac49dcf.png)

月之暗面官方随后明确表态，强调此次合作符合许可证要求，属于授权商业合作，并对Cursor发布Composer 2表示祝贺。

![](https://wpimg-wscn.awtmt.com/bb03bf96-a3ba-4ed2-aed7-cd4e66889648.png)

至此，这场争议的法律与授权层面基本厘清，但Cursor在发布时刻意回避底座信息的做法，在开发者社区仍留有余波。

## "做笔记"强化学习：Cursor的技术自述

尽管底座来源引发争议，Cursor在技术层面的工作仍有其独立价值。

Cursor在博客中详细介绍了其核心方法——一种名为"自我总结（self-summary）"的强化学习机制，旨在解决AI编程助手在处理超长复杂任务时因上下文窗口有限而"跑偏"的痛点。

![](https://wpimg-wscn.awtmt.com/29984b16-701e-4bf4-b23e-9ae0bc490235.png)

具体而言，模型在执行任务过程中，会在达到固定token长度触发点时主动暂停，生成一段"阶段总结"，随后基于压缩后的上下文继续推进任务。这种总结能力被纳入强化学习的奖励机制：总结质量越高、后续任务成功率越高，模型获得的奖励越大，反之则受到惩罚。

Cursor披露的内部测试数据显示，与传统摘要方法相比，**该方法的token用量仅为传统方法的1/5，而压缩带来的错误减少约50%**。

Cursor以"将Doom游戏跑在MIPS架构上"这一高难度任务为例，Composer在经过170轮交互后找到精确解法，并将10万余tokens的上下文压缩至约1000个。

![](https://wpimg-wscn.awtmt.com/69064fd7-b988-4e54-8d89-a35d559f824b.png)

## 开源生态与透明度之争

此次事件的更深层讨论，指向AI应用层与开源生态之间的互信问题。

Hugging Face联合创始人兼CEO Clement Delangue从中看到了开源的价值，表示中国的开源模型如今已成为塑造全球AI技术栈的最大力量。

**竞争对手Windsurf则迅速抓住时机，宣布未来一周将对用户免费开放Kimi K2.5，借势吸引Cursor用户。**

分析指出，对于Cursor而言，这场风波在融资关键节点上带来了额外的舆论压力。据报道，Cursor目前正以500亿美元估值进行新一轮融资。

Cursor CEO Aman Sanger此前表示，Cursor是"既不是纯粹的应用程序开发商，也不是模型提供商"的新型公司。

> 这次事件表明，当开源底座性能逐渐逼近顶尖闭源模型，下游应用厂商如何在商业包装与技术透明度之间取得平衡，将成为行业无法回避的议题。

风险提示及免责条款

市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。
