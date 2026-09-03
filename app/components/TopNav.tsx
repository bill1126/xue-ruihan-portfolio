import Link from "next/link";

type TopNavProps = {
  active?: "home" | "campus" | "work" | "design" | "skills" | "contact";
};

const navItems = [
  { href: "/", label: "首页", key: "home" },
  { href: "/campus", label: "校园经历", key: "campus" },
  { href: "/work", label: "实习项目", key: "work" },
  { href: "/skills", label: "专业技能", key: "skills" },
  { href: "/design", label: "设计作品", key: "design" },
  { href: "/contact", label: "联系我", key: "contact" },
] as const;

export default function TopNav({ active = "home" }: TopNavProps) {
  return (
    <header className="topNavShell">
      <Link className="topNavBrand" href="/" aria-label="返回首页">
        <span aria-hidden="true">R</span>
        <strong>PORTFOLIO</strong>
      </Link>

      <nav className="topNavLinks" aria-label="Portfolio navigation">
        {navItems.map((item) => (
          <Link
            className={active === item.key ? "isActive" : undefined}
            href={item.href}
            key={item.key}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
