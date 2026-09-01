import type { CSSProperties } from "react";
import Link from "next/link";
import TopNav from "../components/TopNav";
import { projects } from "../projects";

export const metadata = {
  title: "项目作品 | 薛瑞涵",
  description: "薛瑞涵的 AI 产品项目作品。",
};

export default function ProjectsPage() {
  return (
    <main className="folderPage projectsPage">
      <TopNav active="work" />
      <section className="folderPageHeader projectsPageHeader">
        <p className="scriptName pageScript">Projects</p>
        <h1>项目作品</h1>
        <p>
          这里收纳可展开的项目档案。每张卡片都可以进入详情页，后续继续补充原型图、
          流程图、Agent 架构和结果复盘。
        </p>
      </section>

      <section className="projectGrid projectFileGrid">
        {projects.map((project) => (
          <Link
            className="projectCard projectFileCard"
            href={`/projects/${project.slug}`}
            key={project.slug}
          >
            <div
              className={project.cover ? "fileHeroLine hasCover" : "fileHeroLine"}
              style={
                project.cover
                  ? ({
                      "--project-cover": `url(${project.cover})`,
                    } as CSSProperties)
                  : undefined
              }
            >
              <div className="fileMetaLine">
                <span>{project.index}</span>
                <span>{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.role}</p>
            </div>
            <div className="filePreviewGrid">
              <div>
                <span>问题</span>
                <p>{project.problem}</p>
              </div>
              <div>
                <span>方案</span>
                <p>{project.solution}</p>
              </div>
              <div>
                <span>结果</span>
                <p>{project.outcome}</p>
              </div>
            </div>
            <div className="tagRow">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
