# Atria Agent Practice

这是 Atria 的 Agent 协作与工程方法仓库，面向希望改进 Agent 工作方式的开发者和团队。

它和 [atria-cli](../atria-cli) 是两个不同受众的资产包：

- `agent-practice`：思考、协作、需求和设计方法。可以只阅读，不需要运行 CLI。
- `atria-cli`：浏览器、Windows 桌面和录制回放等执行能力。只想使用插件的人不必安装本仓库。

## 首批共享 Skill

| Skill | 解决什么问题 | 适合谁 |
|---|---|---|
| `os` | 多会话项目归位、状态、锁、信箱、交接和治理 | 使用并行 Agent 的项目负责人 |
| `compass` | 用最小结构写清产品方向、边界、需求和验收 | 产品负责人、开发 Agent |
| `design-os` | UI 判断、反 AI 味、设计流程、反馈和交付预检 | UI/前端设计者和 Agent |

每个 Skill 都有自己的 README 和 `SKILL.md`：README 给人看，`SKILL.md` 给 Agent 路由和执行。可以按目录单独安装，不需要整包启用。

## 安装方式

当前为私有预览。下载仓库后，把需要的 Skill 目录复制到目标 Agent 的 Skills 目录，或由宿主提供的 Skill 安装机制接入。先阅读该目录 README，再按 `SKILL.md` 的路由加载引用文件。

不要复制以下内容：真实项目 `PROJECT-STATE.md`、mailbox、锁、会话记录、个人偏好、客户资料、凭据、本机路径和进行中的进程状态。

## 设计原则

1. 方法资产与执行资产分离，用户可以自由选择。
2. 共享版只保留可移植规则、模板和示例；个人经验先留在私有源库。
3. Skill 只在匹配任务时加载，避免把整套方法灌入每个 Agent。
4. 事实、推断、假设和未知分开写；未验证的经验不包装成保证。

## 状态

这是私有共享资产预览，不是最终公共发行版。见 [LICENSE-STATUS.md](LICENSE-STATUS.md) 和 [manifests/skills.json](manifests/skills.json)。
