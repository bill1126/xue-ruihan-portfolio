"use client";

import { useEffect } from "react";

export default function WorkHashScroller() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);

      if (!id) {
        return;
      }

      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(`[data-work-anchor="${id}"]`)?.scrollIntoView({ block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("load", scrollToHash);
    window.addEventListener("hashchange", scrollToHash);
    const timer = window.setTimeout(scrollToHash, 450);
    const slowImageTimer = window.setTimeout(scrollToHash, 900);

    return () => {
      window.removeEventListener("load", scrollToHash);
      window.removeEventListener("hashchange", scrollToHash);
      window.clearTimeout(timer);
      window.clearTimeout(slowImageTimer);
    };
  }, []);

  return null;
}
