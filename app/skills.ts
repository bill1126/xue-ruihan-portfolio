export const skills = [
  {
    number: "01",
    label: "Product Design",
    group: "产品设计",
    icon: "document",
    iconSrc: "/skill-icons/product-design.svg",
    folderSrc: "/skill-folders/folder-green.webp",
    summary:
      "用户研究、竞品分析、需求拆解、业务流程梳理，能够输出 PRD 与原型图，熟练使用 Figma、墨刀、Axure。",
    highlights: ["PRD", "原型图", "Figma", "墨刀", "Axure"],
    tone: "blue",
  },
  {
    number: "02",
    label: "AI Application",
    group: "AI 应用",
    icon: "cube",
    iconSrc: "/skill-icons/ai-application.svg",
    folderSrc: "/skill-folders/folder-purple.webp",
    summary:
      "熟练使用 Claude Code、Codex、Cursor 等工具提效，用 Coze、Dify 搭建 Agent 工作流，具备 AI 策略迭代经验。",
    highlights: ["Claude Code", "Codex", "Cursor", "Coze", "Dify", "Agent 工作流"],
    tone: "ink",
  },
  {
    number: "03",
    label: "AI Evaluation",
    group: "AI 评测",
    icon: "bars",
    iconSrc: "/skill-icons/ai-evaluation.svg",
    folderSrc: "/skill-folders/folder-blue.webp",
    summary:
      "搭建 RAG 知识库，运用 LLM-as-a-Judge 评测流程，具备 Bad Case 分析与 Prompt 迭代经验，能够控制 AI 输出风险。",
    highlights: ["RAG 知识库", "LLM-as-a-Judge", "Bad Case", "Prompt 迭代", "AI 输出风险"],
    tone: "paper",
  },
  {
    number: "04",
    label: "Language",
    group: "语言证书",
    icon: "chat",
    iconSrc: "/skill-icons/language.svg",
    folderSrc: "/skill-folders/folder-lime.webp",
    summary: "CET-6，普通话二甲，可阅读英文技术文档。",
    highlights: ["CET-6", "普通话二甲", "英文技术文档"],
    tone: "cyan",
  },
] as const;
