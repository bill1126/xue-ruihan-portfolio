export const projects = [
  {
    index: "01",
    slug: "food-nutrition-agent",
    title: "食序 AI 食养助手",
    period: "2026.04 - 2026.06",
    role: "项目负责人",
    cover: "/food-nutrition-cover.png",
    summary:
      "面向 25-35 岁职场亚健康用户，设计个性化饮食管理和 AI 食养推荐服务闭环。",
    problem: "饮食管理缺少个性化与持续反馈，用户难以把健康建议转化为日常行动。",
    solution: "设计“状态问答 - Agent 推荐 - AI 报告 - 健康档案”的闭环，并基于 Dify 搭建食养推荐 Agent。",
    outcome: "完成从方案设计到评测验证的全链路落地，沉淀 RAG 知识库与 LLM-as-a-Judge 评测流程。",
    tags: ["Dify 搭建", "RAG 知识库", "大模型评测", "健康食养"],
    highlights: [
      "设计“状态问答 - Agent 推荐 - AI 报告 - 健康档案”的服务链路。",
      "基于 Dify 搭建食养推荐 Agent，完成用户交互到 AI 输出的可用性验证。",
      "搭建 RAG 食养知识库与 LLM-as-a-Judge 评测流程，迭代知识库与 Prompt。",
    ],
  },
  {
    index: "02",
    slug: "drone-rescue-agent",
    title: "天网寻踪无人机搜救",
    period: "2026.04 - 2026.06",
    role: "项目负责人",
    cover: "/drone-rescue-cover.png",
    summary:
      "针对无人机失踪人口搜救场景，设计调度 Agent、App 原型和服务系统方案。",
    problem: "搜救任务中案件信息分散、区域划定和多角色协同复杂，影响搜救效率。",
    solution: "设计覆盖案件管理、搜寻区域、航线规划和任务执行的调度 Agent 与服务系统。",
    outcome: "输出调度方案、App 原型与服务系统设计，项目获中国研究生未来飞行器创新大赛三等奖。",
    tags: ["Agent 设计", "服务设计", "低空搜救", "界面体验"],
    highlights: [
      "梳理案件管理、搜寻区域划定、航线规划和任务执行的端到端流程。",
      "明确多角色任务分发、状态流转与结果反馈机制。",
      "项目获中国研究生未来飞行器创新大赛三等奖。",
    ],
  },
] as const;
