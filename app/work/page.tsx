import TopNav from "../components/TopNav";
import WorkFloatGallery from "../components/WorkFloatGallery";
import { experiences } from "../experiences";
import { projects } from "../projects";
import { workImageGroups } from "../workImageGroups";

export const metadata = {
  title: "实习和项目经历 | 薛瑞涵",
  description: "薛瑞涵的 AI 产品实习经历与项目作品。",
};

export default function WorkPage() {
  const detailHrefFor = (href: string) => {
    const group = workImageGroups.find((item) => item.href === href);

    return group ? `${href}/#${group.id}` : href;
  };

  const workItems = [
    ...experiences.map((item) => {
      const href = `/experiences/${item.slug}`;

      return {
        type: "实习",
        index: item.index,
        time: item.time,
        role: item.role,
        title: item.brand ?? item.company,
        summary: item.summary,
        href: detailHrefFor(href),
      };
    }),
    ...projects.map((project) => {
      const href = `/projects/${project.slug}`;

      return {
        type: "项目",
        index: project.index,
        time: project.period,
        role: project.role,
        title: project.title,
        summary: project.summary,
        href: detailHrefFor(href),
      };
    }),
  ];

  return (
    <main className="folderPage workPageSimple">
      <TopNav active="work" />

      <section className="workFloatPage">
        <div className="workFloatHeader">
          <p>Experience Archive</p>
          <h1>实习和项目经历</h1>
        </div>

        <WorkFloatGallery items={workItems} />
      </section>
    </main>
  );
}
