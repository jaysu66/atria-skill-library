# Atria Skill Library

这是 Atria 的个人能力与经验总库，面向希望获得可复用 Skill、工作方法和实践经验的用户。当前版本：**0.1.0-private.1**。

它和 [atria-cli](../atria-cli) 是两个不同受众的资产包：

- `atria-skill-library`：按领域提供 Skill、Pack 和经验文档。可以只阅读，不需要运行 CLI。
- `atria-cli`：浏览器、Windows 桌面和录制回放等执行能力。只想使用插件的人不必安装本仓库。

## 首批共享 Skill：Agent Engineering

首批内容来自 Agent 工程实践，但它只是第一个领域，不代表本仓库未来只服务 Agent 开发。

| Skill | 解决什么问题 | 适合谁 |
|---|---|---|
| [`os`](skills/agent-engineering/os/) | 多会话项目归位、状态、锁、信箱、交接和治理 | 使用并行 Agent 的项目负责人 |
| [`compass`](skills/agent-engineering/compass/) | 用最小结构写清产品方向、边界、需求和验收 | 产品负责人、开发 Agent |
| [`design-os`](skills/agent-engineering/design-os/) | UI 判断、反 AI 味、设计流程、反馈和交付预检 | UI/前端设计者和 Agent |

每个 Skill 都有自己的 README 和 `SKILL.md`：README 给人看，`SKILL.md` 给 Agent 路由和执行。可以按目录单独安装，不需要整包启用。

## 面向未来的扩展

新增能力按领域放入 `skills/<domain>/`，例如 `research`、`content`、`commerce` 或 `productivity`。领域只是组织方式，不是强制安装的产品模块。

- `skills/`：可被 Agent 调用的能力
- `packs/`：按受众组合的可选安装包
- `notes/`：复盘、判断和工程经验，不强行包装成 Skill

执行型能力仍由独立的 [atria-cli](https://github.com/jaysu66/atria-cli) 提供；本仓库通过说明和清单引用它，不复制底层引擎。

## 安装、更新与验证

当前为私有预览。下载仓库后，把需要的完整 Skill 目录复制到目标 Agent 的 Skills 目录，或由宿主提供的 Skill 安装机制接入。不要只复制 `SKILL.md`：有些能力需要同目录的 references、scripts 或 assets。详细步骤见 [安装与更新](docs/INSTALL.md)。

```powershell
npm test
```

这个命令会核对 manifest、Skill 入口、README、目录名、公开边界和常见敏感信息；它不替代许可证审查或真实宿主体验。

不要复制以下内容：真实项目 `PROJECT-STATE.md`、mailbox、锁、会话记录、个人偏好、客户资料、凭据、本机路径和进行中的进程状态。

## 设计原则

1. 方法资产与执行资产分离，用户可以自由选择。
2. 共享版只保留可移植规则、模板和示例；个人经验先留在私有源库。
3. Skill 只在匹配任务时加载，避免把整套方法灌入每个 Agent。
4. 事实、推断、假设和未知分开写；未验证的经验不包装成保证。

## 状态

正式共享区目前只有上表 3 个 Skill。`incubator/` 是本机来源待核的候选区，被 Git 忽略，不进入下载包，也不应被 Agent 自动发现。

这是私有共享资产预览，不是最终公共发行版。见 [开放准备状态](OPEN-SOURCE-READINESS.md)、[许可状态](LICENSE-STATUS.md)、[贡献说明](CONTRIBUTING.md)、[安全说明](SECURITY.md) 和 [机器清单](manifests/skills.json)。
