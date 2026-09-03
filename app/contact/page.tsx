import TopNav from "../components/TopNav";
import ContactActions from "../components/ContactActions";

export const metadata = {
  title: "联系方式 | 薛瑞涵",
  description: "联系薛瑞涵，AI 产品经理及相关岗位。",
};

export default function ContactPage() {
  return (
    <main className="contactPage">
      <TopNav active="contact" />

      <section className="contactHero">
        <div className="contactCollage" aria-label="兴趣爱好拼贴">
          <span>兴趣爱好</span>
          {[
            {
              name: "乒乓球",
              className: "tableTennis",
              src: "/hobbies-cute/table-tennis.webp",
            },
            {
              name: "毛笔字",
              className: "calligraphy",
              src: "/hobbies-cute/calligraphy.webp",
            },
            {
              name: "游泳",
              className: "swimming",
              src: "/hobbies-cute/swimming.webp",
            },
            {
              name: "羽毛球",
              className: "badminton",
              src: "/hobbies-cute/badminton.webp",
            },
            { name: "二胡", className: "erhu", src: "/hobbies-cute/erhu.webp" },
            { name: "钢琴", className: "piano", src: "/hobbies-cute/piano.webp" },
          ].map((hobby) => (
            <button
              aria-label={hobby.name}
              className={`hobbySticker ${hobby.className}`}
              key={hobby.name}
              type="button"
            >
              <img src={hobby.src} alt="" />
            </button>
          ))}
        </div>

        <div className="contactIntro">
          <p>Contact</p>
          <h1>联系我</h1>
          <p>
            期待 AI 产品经理、AI 产品实习及相关方向的机会。也欢迎一起聊聊
            Agent 产品、学习体验、AI Coding 工作流和真实场景里的产品落地。
          </p>

          <ContactActions />

          <div className="contactInfoGrid">
            <a href="mailto:1930788596@qq.com">
              <span>Email</span>
              <strong>1930788596@qq.com</strong>
            </a>
            <a href="tel:15166489810">
              <span>Phone</span>
              <strong>15166489810</strong>
            </a>
            <article>
              <span>Location</span>
              <strong>北京</strong>
            </article>
          </div>

          <p className="contactClosing">
            下一段经历，也许可以一起创建。
            <strong>Let&apos;s create together.</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
