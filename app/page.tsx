import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <main className="homeDesktop">
      <section className="hero introHero">
        <TopNav active="home" />

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="scriptName">AI Product Manager</p>
            <h1>Hi，我是薛瑞涵</h1>
            <p className="lead">
              北京理工大学产品设计硕士在读，拥有 3 段 AI 产品实习经历，聚焦 Agent 体验设计、AI Coding 互动产品与真实业务场景落地。
            </p>
            <div className="introFacts" aria-label="个人信息">
              <span>
                <svg className="homeInfoIcon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
                北京
              </span>
              <span>
                <svg className="homeInfoIcon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m3 8.2 9-4.2 9 4.2-9 4.2-9-4.2Z" />
                  <path d="M7 10.2v4.8c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.8" />
                </svg>
                产品设计硕士
              </span>
              <span>
                <svg className="homeInfoIcon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3.8 14.2 9l5.4 1.1-4.1 3.7.6 5.5L12 16.6l-4.1 2.7.6-5.5-4.1-3.7L9.8 9 12 3.8Z" />
                </svg>
                AI 产品经理 / 产品实习
              </span>
            </div>
            <p className="introNote">
              我擅长从用户问题出发，完成需求拆解、产品路径设计、原型验证与上线迭代，并将 AI 能力转化为可落地的产品体验。
            </p>
          </div>

          <aside className="profilePanel" aria-label="Profile summary">
            <span className="photoBadge">about me</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile-casual.webp" alt="薛瑞涵个人照片" />
            <div>
              <p className="profileName">AI 产品经理 / 产品实习</p>
              <p>北京 | 2002.11 | 中共党员</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
