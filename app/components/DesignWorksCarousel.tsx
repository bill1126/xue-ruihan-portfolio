"use client";

import { useEffect, useMemo, useState } from "react";

type DesignWork = {
  title: string;
  category: string;
  year: string;
  image: string;
  summary: string;
};

type DesignWorksCarouselProps = {
  items: readonly DesignWork[];
};

function getWrappedOffset(index: number, active: number, length: number) {
  const raw = index - active;
  const half = Math.floor(length / 2);

  if (raw > half) {
    return raw - length;
  }

  if (raw < -half) {
    return raw + length;
  }

  return raw;
}

export default function DesignWorksCarousel({ items }: DesignWorksCarouselProps) {
  const featuredIndex = Math.max(
    0,
    items.findIndex((item) => item.title.includes("天网寻踪")),
  );
  const [activeIndex, setActiveIndex] = useState(() => featuredIndex);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [introDone, setIntroDone] = useState(false);
  const activeItem = items[activeIndex];
  const previewItem = previewIndex === null ? null : items[previewIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroDone(true), 760);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (previewIndex === null) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewIndex(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [previewIndex]);

  const visibleItems = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        offset: getWrappedOffset(index, activeIndex, items.length),
      })),
    [activeIndex, items],
  );

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <div className="designCarouselShell">
      <div className="designCarouselStage" aria-live="polite">
        <button
          className="designCarouselButton designCarouselButtonPrevious"
          type="button"
          aria-label="查看上一件设计作品"
          onClick={goToPrevious}
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="designCarouselCards" aria-label="设计作品轮播">
          {visibleItems.map((item, index) => {
            const isActive = index === activeIndex;
            const isVisible = Math.abs(item.offset) <= 2;

            return (
              <button
                className="designWorkCard"
                type="button"
                key={item.title}
                data-offset={item.offset}
                data-active={isActive ? "true" : "false"}
                data-intro-done={introDone ? "true" : "false"}
                aria-label={`查看 ${item.title}`}
                aria-hidden={isVisible ? undefined : true}
                tabIndex={isVisible ? 0 : -1}
                onClick={() => {
                  setActiveIndex(index);
                  if (isActive) {
                    setPreviewIndex(index);
                  }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} />
                <span className="designWorkOverlay">
                  <strong>{item.title}</strong>
                  <em>{item.category}</em>
                </span>
              </button>
            );
          })}
        </div>

        <button
          className="designCarouselButton designCarouselButtonNext"
          type="button"
          aria-label="查看下一件设计作品"
          onClick={goToNext}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="designCarouselMeta" key={activeItem.title}>
        <span>{activeItem.category}</span>
        <h2>{activeItem.title}</h2>
        <p>{activeItem.summary}</p>
      </div>

      {previewItem ? (
        <div
          className="designPreviewLightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewItem.title} 大图预览`}
          onClick={() => setPreviewIndex(null)}
        >
          <button
            className="designPreviewClose"
            type="button"
            aria-label="关闭大图预览"
            onClick={() => setPreviewIndex(null)}
          >
            <span aria-hidden="true">×</span>
          </button>
          <figure
            className="designPreviewFigure"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewItem.image} alt={previewItem.title} />
            <figcaption>
              <strong>{previewItem.title}</strong>
              <span>{previewItem.category}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
