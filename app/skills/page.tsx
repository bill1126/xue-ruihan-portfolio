import Image from "next/image";
import TopNav from "../components/TopNav";
import { skills } from "../skills";
import { assetPath } from "../assetPath";

export const metadata = {
  title: "专业技能 | 薛瑞涵",
  description: "薛瑞涵的 AI 产品与产品设计技能。",
};

export default function SkillsPage() {
  return (
    <main className="folderPage skillsPage">
      <TopNav active="skills" />
      <section className="skillFolderGrid" aria-label="简历技能">
        {skills.map((group) => (
          <article
            className={`skillFolderCard skillFolderCard-${group.tone}`}
            key={group.group}
          >
            <div className="skillFolderWhite">
              <div className="skillFolderMeta">
                <span className="skillFolderNumber">{group.number}</span>
                <span className="skillFolderLabel">{group.label}</span>
              </div>
              <Image
                className="skillFolderIcon"
                src={assetPath(group.iconSrc)}
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
              />
              <div className="skillFolderText">
                <p>{group.summary}</p>
              </div>
            </div>
            <div className="skillFolderChips">
              <img
                className="skillFolderBubble"
                src={assetPath(group.folderSrc)}
                alt=""
                aria-hidden="true"
              />
              <h2>{group.group}</h2>
              {group.tone === "ink" ? (
                <div className="skillFolderToolStack" aria-hidden="true">
                  <img src={assetPath("/skill-inserts/claude.webp")} alt="" />
                  <img src={assetPath("/skill-inserts/codex.webp")} alt="" />
                  <img src={assetPath("/skill-inserts/cursor.webp")} alt="" />
                </div>
              ) : null}
              {group.tone === "paper" ? (
                <img
                  className="skillFolderEvalInsert"
                  src={assetPath("/skill-inserts/eval-table.webp")}
                  alt=""
                  aria-hidden="true"
                />
              ) : null}
              {group.tone === "blue" ? (
                <div className="skillFolderProductInserts" aria-hidden="true">
                  <img
                    className="skillFolderFigmaInsert"
                    src={assetPath("/skill-inserts/figma.webp")}
                    alt=""
                  />
                  <img
                    className="skillFolderDocInsert skillFolderPrdInsert"
                    src={assetPath("/skill-inserts/prd-doc.svg")}
                    alt=""
                  />
                </div>
              ) : null}
              {group.tone === "cyan" ? (
                <img
                  className="skillFolderDocInsert skillFolderCertificateInsert"
                  src={assetPath("/skill-inserts/certificate.svg")}
                  alt=""
                  aria-hidden="true"
                />
              ) : null}
              {group.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
