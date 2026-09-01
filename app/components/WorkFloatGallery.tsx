"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const hint = hintRef.current;

    if (!track || !hint) {
      return;
    }

    const updateProgress = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      const thumbWidth = 46;
      const trackWidth = 176;
      const thumbX = progress * (trackWidth - thumbWidth);

      hint.style.setProperty("--scroll-thumb-x", `${thumbX}px`);
    };

    updateProgress();
    track.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      track.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <div
        className="workFloatTrack"
        aria-label="实习和项目经历卡片"
        ref={trackRef}
      >
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

      <div className="workFloatHint" aria-hidden="true" ref={hintRef}>
        <span>左右滑动查看全部卡片</span>
        <span>→</span>
        <i />
      </div>
    </>
  );
}
