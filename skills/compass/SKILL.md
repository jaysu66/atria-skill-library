---
name: compass
description: This skill should be used whenever writing, reading, or updating product requirements, and before starting any development work on a project that has a COMPASS.md at its root. Trigger phrases include 梳理需求, 写需求, 需求文档, 需求管理, 指南针, compass, 需求汇总, 这个功能要做成什么样, requirements, spec. Also use proactively at the start of any feature work to load direction and constraints before writing code, and whenever a decision needs to be checked against project iron rules. Defines a deliberately minimal two-file system — COMPASS.md for direction, docs/需求/ for what to build. This minimalism is a decision, not an oversight.
---

# Compass — 给开发 agent 的指南针

两份文件。没有第三份。

| 文件 | 回答什么 | 什么时候读 |
|---|---|---|
| `COMPASS.md`(项目根) | 产品是什么 · 往哪走 · 什么绝对不碰 · 边界怎么判 | **每次开工必读** |
| `docs/需求/<模块>.md` | 这块要做成什么样 | 做哪个模块读哪个 |

## 开工流程

1. 读 `COMPASS.md` 全文。
2. 读要做的那个模块的需求文件。
3. 开工。

不读其他需求文件——它们与当前任务无关。

需求里没写、指南针也推导不出来的,**停下来问用户**。不要脑补一个"看起来合理"的假设填进去——这是 LLM 最常见的失败方式,写下 `[待确认: 具体问题]` 并向用户提出,比猜一个答案继续做的代价小得多。

## 写 COMPASS.md 条目

每条四行:

```markdown
## 一句话规则
展开说明,一到两句。
**为什么**:真实的、具体的理由。有实际案例就写案例。
**违反的样子**:一个具体的、能被认出来的反例。
**边界怎么判**:一个可以自问的问题,让 agent 遇到没列举的情况能自己推导。
```

`边界怎么判` 这一行是整个系统里唯一保留的"机制",不要省略。规则是有限的,判断力可迁移——它直接决定用户还要不要反复解释。

**COMPASS.md 装什么**:产品定位、业务铁律、AI 权限边界、数据原则、体验原则。技术约束和体验原则同等重要,不要只写技术。

**COMPASS.md 不装什么**:任务级约束(写进对应任务书)、实现细节、操作命令、协作流程(那些属于 CLAUDE.md / AGENTS.md)。

## 写需求条目

```markdown
## 一句话需求

**要什么**:结果,不是步骤。
**不做什么**:显式写出边界。
**验收**:给定 <具体输入/状态>,能 <具体结果>,且 <具体约束>。
**为什么**:来源和动机。
**状态**:draft | confirmed | done
```

四条硬规矩:

- **写结果约束,不写实现步骤。** 写"查找须 O(1),30 分钟后过期",不写"用 HashMap"。写了实现提示,agent 会照抄字面指令,反而锁死本该由它判断的路径。
- **必须写"不做什么"。** agent 会把没提到的空白当成可自由发挥的空间。
- **验收必须可证伪。** 写"给定 X 能 Y 且 Z",不写"功能正常""tests should pass"。
- **不出现具体工具名。** 需求描述要什么,不描述某个平台怎么配。工具满足不了是实现问题,记在别处,需求原文不动——否则工具的天花板会变成业务的天花板。

## 明确不做的事

以下机制在设计时被逐条评估并**主动否决**。除非用户明确要求,不要加回来:

| 不做 | 为什么 |
|---|---|
| 独立的 ADR 目录 | 决策理由写在 COMPASS 条目的"为什么"或需求条目里。同一个理由写三处,是维护负担的开始 |
| 校验文档格式的 CI 脚本 | 为系统而系统。真出现腐化再说 |
| 流程分档(小改动/大改动走不同流程) | "小改动不写需求"是常识,制度化只增加认知负担 |
| 需求追溯矩阵 | 多团队强合规场景的工具,小团队套上是大锤打坚果 |
| 需求编号体系 / 状态机 / 必填字段校验 | 同上 |
| 把需求拆成多层按需加载 | 那是在优化 token 效率,不是在解决"agent 知不知道该做什么" |

判断标准:**一个机制的维护成本必须小于它防止的损失。** 改一条需求应该只动一处文件。

## 写作反模式

- **别堆规则。** 指令条数增加会降低遵从率;Anthropic 删掉 Claude Code 80% 的 system prompt 后表现反而更好。写不下的通常是不该写的。
- **别抄别的项目的规格。** 抄来的如果不是为你的问题写的,就是噪音。
- **别写"最佳实践"填充。** 每一行都要能被指认出解决了哪个具体问题。
- **别用叙事。** 不写"我们当初是怎么解决的",写"现在的规则是什么、为什么"。

## 维护

需求变了就改需求文件那一处,不联动别处。

COMPASS.md 里发现失效的条目(对应任务早已完成、引用的东西已不存在)当场删掉——僵尸约束会持续误导每一个新 agent。
