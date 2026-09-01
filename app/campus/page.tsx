import TopNav from "../components/TopNav";
import { campusItems } from "../campus";

export const metadata = {
  title: "校园经历 | 薛瑞涵",
  description: "薛瑞涵的教育背景、课程与在校荣誉。",
};

export default function CampusPage() {
  const educationItems = [...campusItems].reverse().map((item, index) => ({
    ...item,
    displayIndex: String(index + 1).padStart(2, "0"),
    displaySchool:
      item.school === "齐鲁工业大学"
        ? "齐鲁工业大学（省重点）"
        : "北京理工大学（985）",
  }));

  return (
    <main className="folderPage campusPage">
      <TopNav active="campus" />
      <section className="campusHero">
        <p className="scriptName pageScript">Campus</p>
        <h1>校园经历</h1>
      </section>

      <section className="campusEducationList" aria-label="教育经历">
        {educationItems.map((item) => (
          <article className="campusEducationItem" key={item.school}>
            <div className="campusEducationTime">
              <strong>{item.displayIndex}</strong>
              <span>{item.time}</span>
            </div>
            <div className="campusEducationContent">
              <p>{item.degree}</p>
              <h2>{item.displaySchool}</h2>
              <p>{item.summary}</p>
              <div className="campusAwardRow" aria-label={`${item.school}奖项与荣誉`}>
                {item.highlights.map((highlight) => (
                  <span key={highlight.label}>{highlight.label}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

    </main>
  );
}
