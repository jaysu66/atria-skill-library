# design-os Community Core

## 用途

`design-os` 帮助 Agent 在做 UI 前先建立设计方向，用可观察标准处理“乱、廉价、像 AI”等直觉反馈，并在真实页面上完成交付前检查。

## 能力

- 设计标准和反 AI 味检查
- 通过用户自己的 Refero MCP 进行可选参考研究
- 新项目的参考、`DESIGN.md` 和实现流程
- 动效与交互技法选择
- 把用户直觉翻译成具体问题和证据
- 浏览器真页面预检和交付复检

## 使用方式

1. 读取本目录 `SKILL.md`。
2. 按任务加载 `1-judgment`、`2-techniques`、`3-references` 或 `4-workflow` 下的对应文件。
3. 在项目根维护自己的 `DESIGN.md`。
4. 交付前执行 `1-judgment/PREFLIGHT.md` 的检查。

## 共享版边界

本版本包含可移植的设计判断、技法和流程。作者个人偏好、客户案例、Refero 抽取档案、第三方截图、字体二进制和研究原文均未纳入。需要 Refero 时，从 [`3-references/REFERO.md`](3-references/REFERO.md) 进入并使用用户自己的官方连接。

## 适合谁

适合 UI/前端 Agent、产品设计师和需要统一审美与交互质量的团队。不需要使用 `atria-cli`；它是独立的方法 Skill。

## 来源与许可

来源：作者个人 Design OS 的 Community Core 整理版；本仓库是共享版本的唯一来源。仓库内容采用 Apache-2.0；Refero 和其他第三方内容不因此被重新许可，详见根目录 `THIRD_PARTY_NOTICES.md`。
