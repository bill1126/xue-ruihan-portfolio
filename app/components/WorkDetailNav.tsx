"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { experiences } from "../experiences";
import { projects } from "../projects";

type WorkDetailNavProps = {
  activeHref: string;
};

const workDetailItems = [
  ...experiences.map((item) => ({
    href: `/experiences/${item.slug}`,
    label: item.company,
  })),
  ...projects.map((item) => ({
    href: `/projects/${item.slug}`,
    label: item.title,
  })),
];

export default function WorkDetailNav({ activeHref }: WorkDetailNavProps) {
  const router = useRouter();
  const isSwitchingRef = useRef(false);
  const currentIndex = workDetailItems.findIndex((item) => item.href === activeHref);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const previousItem = safeIndex > 0 ? workDetailItems[safeIndex - 1] : null;
  const nextItem = safeIndex < workDetailItems.length - 1 ? workDetailItems[safeIndex + 1] : null;

  useEffect(() => {
    const storedDirection = window.sessionStorage.getItem("workDetailTransitionDirection");
    const enterClass = storedDirection === "left" ? "workDetailEnterFromLeft" : "workDetailEnterFromRight";
    window.sessionStorage.removeItem("workDetailTransitionDirection");

    document.documentElement.classList.add(enterClass);
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove(enterClass);
    }, 560);

    return () => {
      isSwitchingRef.current = false;
      window.clearTimeout(timer);
      document.documentElement.classList.remove("workDetailEnterFromLeft", "workDetailEnterFromRight");
      document.documentElement.classList.remove("workDetailExitToLeft", "workDetailExitToRight");
    };
  }, [activeHref]);

  function switchWorkItem(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    direction: "left" | "right",
  ) {
    event.preventDefault();
    if (isSwitchingRef.current) {
      return;
    }

    isSwitchingRef.current = true;
    const exitClass = direction === "right" ? "workDetailExitToLeft" : "workDetailExitToRight";
    window.sessionStorage.setItem("workDetailTransitionDirection", direction);
    document.documentElement.classList.remove("workDetailExitToLeft", "workDetailExitToRight");
    document.documentElement.classList.add(exitClass);
    window.setTimeout(() => {
      router.push(href);
    }, 430);
  }

  return (
    <>
      <div className="workDetailReturn">
        <Link href="/work" aria-label="返回全部实习和项目经历">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/work-return-button.webp" alt="" aria-hidden="true" />
        </Link>
      </div>

      <nav className="workDetailArrowNav" aria-label="切换实习和项目详情">
        {previousItem ? (
          <Link
            className="workDetailArrow workDetailArrowPrevious"
            href={previousItem.href}
            aria-label={`查看上一项：${previousItem.label}`}
            onClick={(event) => switchWorkItem(event, previousItem.href, "left")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/work-switch-left.webp" alt="" aria-hidden="true" />
          </Link>
        ) : null}
        {nextItem ? (
          <Link
            className="workDetailArrow workDetailArrowNext"
            href={nextItem.href}
            aria-label={`查看下一项：${nextItem.label}`}
            onClick={(event) => switchWorkItem(event, nextItem.href, "right")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/work-switch-right.webp" alt="" aria-hidden="true" />
          </Link>
        ) : null}
      </nav>
    </>
  );
}
