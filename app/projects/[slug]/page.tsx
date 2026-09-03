/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import TopNav from "../../components/TopNav";
import WorkDetailNav from "../../components/WorkDetailNav";
import WorkHashScroller from "../../components/WorkHashScroller";
import WorkSequenceNav from "../../components/WorkSequenceNav";
import { projects } from "../../projects";
import { workImageGroups } from "../../workImageGroups";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const projectImagePages: Partial<
  Record<
    (typeof projects)[number]["slug"],
    Array<{
      src: string;
      alt: string;
    }>
  >
> = {
  "food-nutrition-agent": [
    {
      src: "/food-nutrition-agent-overview.webp",
      alt: "食序 AI 食养助手项目工作拆解展示",
    },
    {
      src: "/food-nutrition-agent-prototype.webp",
      alt: "食序 AI 食养助手 App 原型展示",
    },
  ],
  "drone-rescue-agent": [
    {
      src: "/drone-rescue-agent-overview.webp",
      alt: "天网寻踪无人机搜救任务调度项目工作拆解展示",
    },
    {
      src: "/drone-rescue-agent-flow.webp",
      alt: "天网寻踪无人机搜救任务调度 App 流程展示",
    },
  ],
};

function WorkSequenceImageGallery() {
  return (
    <div className="workDetailScene">
      <section className="caseImageGallery workSequenceGallery" aria-label="实习和项目详情顺序展示">
        {workImageGroups.map((group, groupIndex) => (
          <article className="workSequenceGroup" data-work-anchor={group.id} key={group.href}>
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
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | 薛瑞涵`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const imagePages = projectImagePages[project.slug];

  if (imagePages) {
    return (
      <main className="projectDetail detailPage caseStudyPage imageOnlyCasePage workScrollCasePage">
        <TopNav active="work" />
        <WorkDetailNav activeHref={`/projects/${project.slug}`} />
        <WorkHashScroller />
        <WorkSequenceNav />
        <WorkSequenceImageGallery />
      </main>
    );
  }

  return (
    <main className="projectDetail detailPage">
      <TopNav active="work" />
      <WorkDetailNav activeHref={`/projects/${project.slug}`} />
      <div className="workDetailScene">
        <section className="detailHero">
          <p className="sectionKicker">{project.period}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="tagRow">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section className="detailPlaceholder">
          <div>
            <p className="sectionKicker">Project Detail</p>
            <h2>详情内容待补充</h2>
          </div>
          <p>
            这里已经为项目详情页预留好结构。下一步可以加入项目背景、用户痛点、方案流程、
            原型截图、Agent 架构、关键指标、复盘思考等内容。
          </p>
        </section>

        <section className="detailHighlights">
          <h2>当前可展示亮点</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
