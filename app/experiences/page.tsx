import Link from "next/link";
import TopNav from "../components/TopNav";
import { experiences } from "../experiences";

export const metadata = {
  title: "实习经历 | 薛瑞涵",
  description: "薛瑞涵的 AI 产品实习经历。",
};

export default function ExperiencesPage() {
  return (
    <main className="folderPage">
      <TopNav active="work" />
      <section className="folderPageHeader">
        <p className="scriptName pageScript">Internships</p>
        <h1>实习经历</h1>
        <p>
          三段实习覆盖教育科技、AI 学习产品和医疗政务平台，既有 to C 增长与学习体验，
          也有 to B 多角色流程和业务系统落地。
        </p>
      </section>

      <section className="experienceCards">
        {experiences.map((item) => (
          <Link
            className="experienceCard"
            href={`/experiences/${item.slug}`}
            key={item.company}
          >
            <span className="projectIndex">{item.index}</span>
            <div className="experienceCardTop">
              <span>{item.time}</span>
              <strong>{item.role}</strong>
            </div>
            <h3>{item.company}</h3>
            <p>{item.summary}</p>
            <ul>
              {item.points.slice(0, 2).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Link>
        ))}
      </section>
    </main>
  );
}
