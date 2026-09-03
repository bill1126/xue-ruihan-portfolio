"use client";

import Link from "next/link";

type WorkItem = {
  type: string;
  time: string;
  role: string;
  title: string;
  summary: string;
  href: string;
};

type WorkFloatGalleryProps = {
  items: WorkItem[];
};

export default function WorkFloatGallery({ items }: WorkFloatGalleryProps) {
  return (
    <div className="workFloatTrack" aria-label="实习和项目经历卡片">
      {items.map((item, index) => (
        <Link className="workFloatCard" href={item.href} key={item.href}>
          <div className="workFloatTop">
            <span>{String(index + 1).padStart(2, "0")}/05</span>
            <strong>{item.type}</strong>
          </div>
          <div className="workFloatBody">
            <span>{item.time}</span>
            <p>{item.role}</p>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </div>
          <em>查看详情 →</em>
        </Link>
      ))}
    </div>
  );
}
