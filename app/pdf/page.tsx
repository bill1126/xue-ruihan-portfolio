import { campusItems } from "../campus";
import { designWorks } from "../designWorks";
import { experiences } from "../experiences";
import { projects } from "../projects";
import { skills } from "../skills";
import { assetPath } from "../assetPath";

export const metadata = {
  title: "PDF 作品集 | 薛瑞涵",
  description: "薛瑞涵 AI 产品经理方向 PDF 作品集。",
};

const email = "1930788596@qq.com";
const phone = "15166489810";

export default function PdfPortfolioPage() {
  return (
    <main className="pdfPortfolio">
      <section className="pdfPage pdfCover">
        <div className="pdfCoverCopy">
          <p className="pdfKicker">AI Product Manager Portfolio</p>
          <h1>薛瑞涵</h1>
          <p className="pdfLead">
            北京理工大学产品设计硕士在读，拥有 3 段 AI 产品实习经历，聚焦 Agent 体验设计、AI Coding 工作流与真实业务场景落地。
          </p>
          <div className="pdfContactLine">
            <span>北京</span>
            <span>{email}</span>
            <span>{phone}</span>
          </div>
        </div>
        <div className="pdfPortrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath("/profile-casual.webp")} alt="薛瑞涵个人照片" />
        </div>
      </section>

      <section className="pdfPage">
        <PdfSectionTitle kicker="Profile" title="个人定位" />
        <div className="pdfTwoColumn">
          <article className="pdfStatement">
            <h3>AI产品经理 / 产品经理</h3>
            <p>
              擅长从用户问题出发，完成需求拆解、产品路径设计、原型验证与上线迭代，并将 AI 能力转化为可落地的产品体验。
            </p>
          </article>
          <div className="pdfFactGrid">
            <PdfFact label="教育背景" value="北京理工大学 产品设计硕士" />
            <PdfFact label="方向" value="Agent 体验设计 / AI Coding / 教育产品" />
            <PdfFact label="工具" value="Figma / Dify / Coze / Cursor / Codex" />
            <PdfFact label="求职方向" value="AI产品经理 / 产品经理" />
          </div>
        </div>

        <PdfSectionTitle kicker="Skills" title="核心能力" />
        <div className="pdfSkillGrid">
          {skills.map((skill) => (
            <article className="pdfSkillCard" key={skill.number}>
              <span>{skill.number}</span>
              <h3>{skill.group}</h3>
              <p>{skill.summary}</p>
              <div>
                {skill.highlights.map((item) => (
                  <em key={item}>{item}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pdfPage">
        <PdfSectionTitle kicker="Experience" title="实习经历" />
        <div className="pdfTimeline">
          {experiences.map((experience) => (
            <article className="pdfTimelineItem" key={experience.slug}>
              <div>
                <span>{experience.time}</span>
                <strong>{experience.brand ?? experience.company}</strong>
                <small>{experience.role}</small>
              </div>
              <div>
                <h3>{experience.summary}</h3>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pdfPage">
        <PdfSectionTitle kicker="Projects" title="AI 产品项目" />
        <div className="pdfProjectGrid">
          {projects.map((project) => (
            <article className="pdfProjectCard" key={project.slug}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath(project.cover)} alt="" />
              <div>
                <span>{project.period} / {project.role}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <dl>
                  <div>
                    <dt>问题</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>方案</dt>
                    <dd>{project.solution}</dd>
                  </div>
                  <div>
                    <dt>成果</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pdfPage">
        <PdfSectionTitle kicker="Design" title="设计作品精选" />
        <div className="pdfDesignGrid">
          {designWorks.slice(0, 3).map((work) => (
            <article className="pdfDesignCard" key={work.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath(work.image)} alt="" />
              <div>
                <span>{work.category} / {work.year}</span>
                <h3>{work.title}</h3>
                <p>{work.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pdfPage">
        <PdfSectionTitle kicker="Education" title="校园经历与荣誉" />
        <div className="pdfEducationGrid">
          {campusItems.map((item) => (
            <article className="pdfEducationCard" key={item.school}>
              <span>{item.time}</span>
              <h3>{item.school}</h3>
              <strong>{item.degree}</strong>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight.label}>
                    <b>{highlight.label}</b>
                    <span>{highlight.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <footer className="pdfFooter">
          <strong>期待与团队一起，把 AI 能力设计成真实可用、可验证、可持续迭代的产品体验。</strong>
          <span>{email} / {phone}</span>
        </footer>
      </section>
    </main>
  );
}

function PdfSectionTitle({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <header className="pdfSectionTitle">
      <span>{kicker}</span>
      <h2>{title}</h2>
    </header>
  );
}

function PdfFact({ label, value }: { label: string; value: string }) {
  return (
    <article>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}
