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
              985 产品设计硕士在读，面向 AI 产品经理方向，关注 Agent 驱动的学习体验、AI Coding 工作流与真实场景中的产品落地。
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
              我习惯从用户场景和问题定义出发，把设计表达、交互原型、技术理解和产品判断串联起来，推动想法从概念走向可验证的方案。
            </p>
          </div>

          <aside className="profilePanel" aria-label="Profile summary">
            <span className="photoBadge">about me</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile-casual.jpg" alt="薛瑞涵个人照片" />
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
