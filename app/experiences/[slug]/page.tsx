/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import TopNav from "../../components/TopNav";
import WorkDetailNav from "../../components/WorkDetailNav";
import WorkHashScroller from "../../components/WorkHashScroller";
import WorkSequenceNav from "../../components/WorkSequenceNav";
import { experiences } from "../../experiences";
import { workImageGroups } from "../../workImageGroups";

type ExperiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const caseStudyContent = {
  "ape-education-ai-games": {
    eyebrow: "XIAOYUAN / H5 AI GAME PRODUCT DELIVERY",
    title: "我负责 3 款 H5 AI 学习小游戏的完整落地",
    intro:
      "围绕小学 AI 用户留存提升目标，我独立完成 3 款 H5 AI 学习小游戏，把玩法想法拆成需求、页面、反馈机制和开发 Prompt，并推动上线交付。",
    chips: ["玩法设计", "需求拆解", "AI Coding", "多端适配", "上线交付"],
    outcomes: [
      ["3 款", "H5 AI 学习小游戏"],
      ["40%", "上线后 7 日留存"],
      ["+32%", "较此前留存提升"],
      ["10x", "同类项目开发效率提升"],
    ],
    workflow: [
      ["目标理解", "围绕小学 AI 用户留存提升目标拆解机会点"],
      ["玩法构思", "设计互动学习场景、游戏机制与反馈方式"],
      ["需求拆解", "输出页面结构、题型规则、交互状态和边界条件"],
      ["Prompt 转化", "把玩法逻辑转为 Claude Code / Cursor 可执行提示"],
      ["多端适配", "处理移动端、Pad、屏幕尺寸与交互热区问题"],
      ["上线复盘", "沉淀 AI Coding 工作流与可复用开发规范"],
    ],
    evidenceTitle: "我做的不只是写 Prompt，而是把 AI Coding 变成产品落地流程",
    evidenceText:
      "这段经历覆盖从业务目标、玩法方案、需求文档到 AI 协作开发和上线验收的完整链路，最后沉淀为可复用流程。",
    evidenceItems: ["业务目标", "玩法方案", "上线交付"],
    summaryCards: [
      ["我做了什么", "玩法构思、需求拆解、界面设计、AI Coding 协作与上线交付。"],
      ["结果", "独立完成 3 款 H5 小游戏，上线后 7 日留存约 40%，较此前提升约 32%。"],
      ["沉淀", "将玩法逻辑、题型规则、交互反馈和 SDK 接入转化为结构化 Prompt。"],
    ],
    modules: [
      ["业务转玩法", "把留存目标转化为可玩、可测、可上线的 H5 学习小游戏方案。"],
      ["需求转 Prompt", "将玩法逻辑、题型规则、交互反馈和 SDK 接入转化为结构化 Prompt。"],
      ["体验适配", "独立处理移动端 / Pad 多机型适配，保障多终端稳定体验。"],
      ["流程沉淀", "把单次项目经验沉淀为 AI Coding 工作流和开发规范。"],
    ],
    buildNotes: ["玩法想法", "交互状态", "开发 Prompt", "上线验收"],
    heroImage: "/ape-ai-games-overview.webp",
    heroImageAlt: "猿辅导 AI 产品实习工作拆解与成果量化展示",
    visualSections: [
      {
        eyebrow: "WORKFLOW ASSET",
        title: "AI coding 规范沉淀",
        body: "把单个游戏开发中反复出现的问题拆成页面流程、SDK、Prompt、验收清单和可复用 Skill，让下一款游戏可以沿用同一套开发流程。",
        image: "/ape-ai-coding-workflow.webp",
        alt: "AI coding 规范沉淀与可复用开发流程展示",
      },
      {
        eyebrow: "UI DISPLAY",
        title: "部分界面 UI 展示",
        body: "三款 H5 小游戏覆盖不同题型、场景和反馈机制，重点验证低龄学习场景里的可玩性、清晰度和多端适配稳定性。",
        image: "/ape-ai-games-ui-display.webp",
        alt: "猿辅导 H5 AI 学习小游戏部分界面 UI 展示",
      },
    ],
  },
  "tal-learning-agent": {
    eyebrow: "LEARNING AGENT / STUDY LOOP",
    title: "学习闭环设计 | 从错题诊断到 AI 带学验证",
    intro:
      "我围绕学生错题积压和复习缺乏针对性的问题，拆解诊断、学习、练习、验证链路，让 AI 不只是生成内容，而是进入可验证的学习闭环。",
    chips: ["错因诊断", "路径分流", "学习验证", "Agent 架构", "Skill 设计"],
    outcomes: [
      ["60%", "功能落地后 7 日留存"],
      ["2 道", "每日错题推荐策略"],
      ["4 类", "Agent 可调用 Skill"],
      ["闭环", "诊断到验证链路"],
    ],
    workflow: [
      ["问题定位", "错题积压 / 复习弱针对性"],
      ["目标定义", "学习闭环提效与留存验证"],
      ["链路设计", "诊断 - 学习 - 练习 - 验证"],
      ["Agent 拆解", "任务流、Skill、输入输出"],
      ["策略制定", "优先级、推荐频次、结果反馈"],
      ["能力沉淀", "举一反三、记忆卡、异常兜底"],
    ],
    evidenceTitle: "从学习问题到 Agent 任务链路",
    evidenceText:
      "重点不是单点功能，而是把错因诊断、路径分流和结果反馈串成可持续迭代的学习系统。",
    evidenceItems: ["错因诊断", "路径分流", "学习验证"],
    summaryCards: [
      ["我做了什么", "定位错题积压和复习低效问题，设计 AI 带学与学习验证任务流。"],
      ["结果", "功能落地小精龙 App，7 日留存率达 60%。"],
      ["沉淀", "将错题练习、举一反三、记忆卡生成封装为 Agent 可调用 Skill。"],
    ],
    modules: [
      ["诊断模型", "依据错题类型、知识点掌握程度与复习时效识别学习优先级。"],
      ["推荐策略", "每日推荐 2 道错题，兼顾薄弱项、复习周期和转化效率。"],
      ["Skill 封装", "将错题练习、举一反三、记忆卡生成设计为 Agent 可调用能力。"],
      ["验证闭环", "通过结果反馈修正学习路径，并为后续策略迭代留出数据入口。"],
    ],
    buildNotes: ["错因输入", "路径分流", "Agent Skill", "结果反馈"],
    heroImage: "/tal-learning-agent-overview.webp",
    heroImageAlt: "学而思 AI 产品实习工作拆解与成果量化展示",
    visualSections: [
      {
        eyebrow: "AGENT PATH DESIGN",
        title: "错题复习 Agent 方案设计",
        body: "从错因诊断到路径分流，搭建学习、练习与验证闭环。",
        image: "/tal-learning-agent-paths.webp",
        alt: "学而思错题复习 Agent 从错因诊断到路径分流展示",
      },
    ],
  },
  "yuanhe-medical-agent": {
    eyebrow: "MEDICAL AI / TO B WORKFLOW",
    title: "业务流程梳理 | 从多角色协同到 AI Agent 原型",
    intro:
      "我面向双向转诊和智慧药政管理场景，梳理多角色业务流程、权限边界和高频痛点，输出 PRD、高保真原型与可控的 AI Agent 工作流。",
    chips: ["流程图", "PRD", "高保真原型", "Agent 工作流", "质量测评"],
    outcomes: [
      ["58 家", "医院接入使用"],
      ["2 类", "医疗政务平台"],
      ["多轮", "原型评审与迭代"],
      ["Case", "AI 输出质量测评"],
    ],
    workflow: [
      ["角色梳理", "医生、医院、平台、监管方"],
      ["流程建模", "转诊、填单、审核、流转"],
      ["权限边界", "多方角色可见、可操作范围"],
      ["Agent 设计", "流程指引、风险预警、人工确认"],
      ["质量测评", "Case 验证与 Bad Case 迭代"],
      ["落地协同", "评审、改版、医院接入"],
    ],
    evidenceTitle: "To B 场景里的 AI 必须可控、可确认",
    evidenceText:
      "医疗政务系统的关键不是炫技，而是把 AI 能力嵌入可追踪、可审核、可人工确认的业务节点。",
    evidenceItems: ["流程边界", "Agent 节点", "测评 Case"],
    summaryCards: [
      ["我做了什么", "梳理双向转诊和智慧药政平台流程，输出 PRD、高保真原型和 Agent 方案。"],
      ["结果", "双向转诊平台已接入 58 家医院使用。"],
      ["沉淀", "围绕医生填单、流程指引、风险预警定义 AI Agent 工作流与确认节点。"],
    ],
    modules: [
      ["角色权限", "明确多方角色的信息可见范围、操作权限和流转责任。"],
      ["流程指引", "围绕医生填单、材料审核、异常提醒设计可执行的辅助链路。"],
      ["风险预警", "为关键节点设置人工确认，降低 AI 输出在业务系统中的风险。"],
      ["质量迭代", "通过 Bad Case 分析推动多轮 Prompt、规则和原型优化。"],
    ],
    buildNotes: ["角色流程", "权限边界", "Agent 节点", "人工确认"],
    heroImage: "/yuanhe-medical-agent-overview.webp",
    heroImageAlt: "源和信息 AI 产品实习成果量化与工作拆解展示",
    visualSections: [
      {
        eyebrow: "PLATFORM WORKFLOW",
        title: "双向转诊平台流程拆解",
        body: "梳理多角色流程、需求边界与 AI 能力嵌入位置。",
        image: "/yuanhe-medical-agent-workflow.webp",
        alt: "源和信息双向转诊平台复杂流程拆解展示",
      },
      {
        eyebrow: "UI DISPLAY",
        title: "双向转诊平台多端界面展示",
        body: "展示卫健委端、管理端和医生端核心界面。",
        image: "/yuanhe-medical-agent-ui.webp",
        alt: "源和信息双向转诊平台多端界面展示",
      },
    ],
  },
} as const;

export async function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return {};
  }

  return {
    title: `${experience.company} | 薛瑞涵`,
    description: experience.summary,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  const content = caseStudyContent[experience.slug];

  if (content.heroImage && content.visualSections.length > 0) {
    return (
      <main className="projectDetail detailPage caseStudyPage imageOnlyCasePage workScrollCasePage">
        <TopNav active="work" />
        <WorkDetailNav activeHref={`/experiences/${experience.slug}`} />
        <WorkHashScroller />
        <WorkSequenceNav />
        <div className="workDetailScene">
          <section className="caseImageGallery workSequenceGallery" aria-label="实习和项目详情顺序展示">
            {workImageGroups.map((group, groupIndex) => (
              <article className="workSequenceGroup" data-work-anchor={group.id} id={group.id} key={group.href}>
                <header className="workSequenceHeader">
                  <span>
                    {String(groupIndex + 1).padStart(2, "0")}/{String(workImageGroups.length).padStart(2, "0")}
                  </span>
                  <h2>{group.label}</h2>
                </header>
                {group.images.map((image) => (
                  <figure className="caseImageOnlyFrame" key={image.src}>
                    <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
                  </figure>
                ))}
              </article>
            ))}
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="projectDetail detailPage caseStudyPage">
      <TopNav active="work" />
      <WorkDetailNav activeHref={`/experiences/${experience.slug}`} />

      <div className="workDetailScene">
        <section className="caseStudyHero" aria-labelledby="case-study-title">
          <div className="caseHeroCopy">
            <p className="caseEyebrow">{content.eyebrow}</p>
            <h1 id="case-study-title">{content.title}</h1>
            <p>{content.intro}</p>
            <div className="caseChipRow">
              {content.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>

          <aside className="gameDeliveryPanel" aria-label="AI 小游戏交付预览">
            {content.heroImage ? (
              <figure className="caseHeroImageFrame">
                <img src={content.heroImage} alt={content.heroImageAlt} />
              </figure>
            ) : (
              <>
                <div className="gamePanelTop">
                  <span>AI GAME OPS</span>
                  <strong>3 shipped</strong>
                </div>
                <div className="gamePhoneMock" aria-hidden="true">
                  <div className="gamePhoneStatus">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="gameQuestionCard">
                    <small>LEVEL 07</small>
                    <strong>把 8 补成 10</strong>
                  </div>
                  <div className="gameCandyGrid">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} />
                    ))}
                  </div>
                  <div className="gameChoices">
                    <span>2</span>
                    <span>4</span>
                    <span>6</span>
                  </div>
                </div>
                <div className="gameBuildStrip">
                  {content.buildNotes.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </>
            )}
          </aside>
        </section>

        {content.visualSections.length > 0 ? (
          <section className="caseVisualStack" aria-label="项目真实图片展示">
            {content.visualSections.map((section) => (
              <article className="caseVisualSection" key={section.image}>
                <div className="caseVisualCopy">
                  <p className="caseEyebrow">{section.eyebrow}</p>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
                <figure className="caseVisualImageFrame">
                  <img src={section.image} alt={section.alt} />
                </figure>
              </article>
            ))}
          </section>
        ) : null}

        {content.visualSections.length === 0 ? (
          <>
          <section className="experienceArchive">
            <article className="archiveIntroCard">
              <p className="caseEyebrow">ROLE SCOPE</p>
              <h2>{experience.company}</h2>
              <p>{experience.summary}</p>
              <div className="archiveMeta">
                <span>{experience.time}</span>
                <span>{experience.role}</span>
              </div>
            </article>

            <aside className="archiveOutcomeCard">
              {content.outcomes.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </aside>
          </section>

          <section className="workflowBlock">
            <div className="caseSectionHeader">
              <p className="caseEyebrow">DELIVERY PIPELINE</p>
              <h2>从留存目标到 3 款小游戏上线</h2>
            </div>
            <div className="workflowSteps">
              {content.workflow.map(([title, body], index) => (
                <article className="workflowStep" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="archiveSummaryGrid">
            {content.summaryCards.map(([title, body]) => (
              <article className="archiveSummaryCard" key={title}>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </section>

          <section className="caseEvidence">
            <div>
              <p className="caseEyebrow">WHY IT MATTERS</p>
              <h2>{content.evidenceTitle}</h2>
              <p>{content.evidenceText}</p>
            </div>
            <div className="caseEvidenceItems">
              {content.evidenceItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
          </>
        ) : null}
      </div>
    </main>
  );
}
