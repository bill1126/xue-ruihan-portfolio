"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { workImageGroups } from "../workImageGroups";

type WorkSequenceNavProps = {
  activeId?: string;
};

export default function WorkSequenceNav({ activeId: initialActiveId = workImageGroups[0]?.id }: WorkSequenceNavProps) {
  const [activeId, setActiveId] = useState(initialActiveId);

  useEffect(() => {
    const targets = workImageGroups
      .map((group) => document.querySelector<HTMLElement>(`[data-work-anchor="${group.id}"]`))
      .filter((target): target is HTMLElement => Boolean(target));

    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleEntry) {
          setActiveId(visibleEntry.target.dataset.workAnchor);
        }
      },
      { rootMargin: "-32% 0px -56% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector<HTMLElement>(`[data-work-anchor="${id}"]`);

    if (!target) {
      return;
    }

    event.preventDefault();
    setActiveId(id);
    window.history.pushState(null, "", `#${id}`);
    target.scrollIntoView({ block: "start" });
  };

  return (
    <nav className="workSequenceNav" aria-label="快速切换实习和项目">
      {workImageGroups.map((group, index) => (
        <a
          className={activeId === group.id ? "isActive" : undefined}
          href={`${group.href}/#${group.id}`}
          key={group.id}
          onClick={handleClick(group.id)}
          aria-current={activeId === group.id ? "location" : undefined}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{group.shortLabel}</strong>
        </a>
      ))}
    </nav>
  );
}
