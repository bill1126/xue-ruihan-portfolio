import DesignWorksCarousel from "../components/DesignWorksCarousel";
import TopNav from "../components/TopNav";
import { designWorks } from "../designWorks";

export const metadata = {
  title: "产品设计与视觉作品 | 薛瑞涵",
  description: "薛瑞涵的产品设计展板、服务系统表达与视觉海报作品。",
};

export default function DesignPage() {
  return (
    <main className="designPage">
      <TopNav active="design" />

      <section className="designWorksSection" aria-labelledby="design-works-title">
        <div className="designWorksHeader">
          <p>Design Expression</p>
          <h1 id="design-works-title">产品设计与视觉作品</h1>
          <span>
            从产品方案到视觉呈现，保留设计过程里的关键判断。
          </span>
        </div>

        <DesignWorksCarousel items={designWorks} />
      </section>
    </main>
  );
}
