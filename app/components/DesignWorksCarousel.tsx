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
  const activeItem = items[featuredIndex];

  return (
    <div className="designCarouselShell" data-design-carousel>
      <div className="designCarouselStage" aria-live="polite">
        <button
          className="designCarouselButton designCarouselButtonPrevious"
          type="button"
          aria-label="查看上一件设计作品"
          data-carousel-previous
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="designCarouselCards" aria-label="设计作品轮播">
          {items.map((item, index) => {
            const offset = getWrappedOffset(index, featuredIndex, items.length);
            const isActive = index === featuredIndex;
            const isVisible = Math.abs(offset) <= 2;

            return (
              <button
                className="designWorkCard"
                type="button"
                key={item.title}
                data-index={index}
                data-title={item.title}
                data-category={item.category}
                data-summary={item.summary}
                data-image={item.image}
                data-offset={offset}
                data-active={isActive ? "true" : "false"}
                data-intro-done="false"
                aria-label={`查看 ${item.title}`}
                aria-hidden={isVisible ? undefined : true}
                tabIndex={isVisible ? 0 : -1}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading={isActive ? "eager" : "lazy"}
                  fetchPriority={isActive ? "high" : "auto"}
                />
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
          data-carousel-next
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="designCarouselMeta" data-carousel-meta>
        <span data-carousel-meta-category>{activeItem.category}</span>
        <h2 data-carousel-meta-title>{activeItem.title}</h2>
        <p data-carousel-meta-summary>{activeItem.summary}</p>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
(() => {
  const root = document.currentScript?.closest("[data-design-carousel]");
  if (!root) return;

  const cards = Array.from(root.querySelectorAll("[data-index]"));
  const previous = root.querySelector("[data-carousel-previous]");
  const next = root.querySelector("[data-carousel-next]");
  const meta = {
    category: root.querySelector("[data-carousel-meta-category]"),
    title: root.querySelector("[data-carousel-meta-title]"),
    summary: root.querySelector("[data-carousel-meta-summary]"),
  };
  let activeIndex = ${featuredIndex};

  const wrappedOffset = (index) => {
    const raw = index - activeIndex;
    const half = Math.floor(cards.length / 2);
    if (raw > half) return raw - cards.length;
    if (raw < -half) return raw + cards.length;
    return raw;
  };

  const sync = () => {
    cards.forEach((card, index) => {
      const offset = wrappedOffset(index);
      const active = index === activeIndex;
      const visible = Math.abs(offset) <= 2;
      card.dataset.offset = String(offset);
      card.dataset.active = active ? "true" : "false";
      card.setAttribute("aria-hidden", visible ? "false" : "true");
      card.tabIndex = visible ? 0 : -1;
    });

    const activeCard = cards[activeIndex];
    if (activeCard) {
      if (meta.category) meta.category.textContent = activeCard.dataset.category || "";
      if (meta.title) meta.title.textContent = activeCard.dataset.title || "";
      if (meta.summary) meta.summary.textContent = activeCard.dataset.summary || "";
    }
  };

  const openPreview = (card) => {
    const overlay = document.createElement("div");
    overlay.className = "designPreviewLightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", (card.dataset.title || "设计作品") + " 大图预览");
    overlay.innerHTML = '<button class="designPreviewClose" type="button" aria-label="关闭大图预览"><span aria-hidden="true">×</span></button><figure class="designPreviewFigure"><img alt=""><figcaption><strong></strong><span></span></figcaption></figure>';
    const image = overlay.querySelector("img");
    const title = overlay.querySelector("strong");
    const category = overlay.querySelector("figcaption span");
    if (image) {
      image.src = card.dataset.image || "";
      image.alt = card.dataset.title || "";
    }
    if (title) title.textContent = card.dataset.title || "";
    if (category) category.textContent = card.dataset.category || "";

    const close = () => {
      document.body.style.overflow = "";
      overlay.remove();
      document.removeEventListener("keydown", closeOnEscape);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") close();
    };

    overlay.addEventListener("click", close);
    overlay.querySelector(".designPreviewClose")?.addEventListener("click", close);
    overlay.querySelector(".designPreviewFigure")?.addEventListener("click", (event) => event.stopPropagation());
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
  };

  previous?.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    sync();
  });
  next?.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % cards.length;
    sync();
  });
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index === activeIndex) {
        openPreview(card);
        return;
      }
      activeIndex = index;
      sync();
    });
  });

  window.setTimeout(() => {
    cards.forEach((card) => {
      card.dataset.introDone = "true";
    });
  }, 760);
  sync();
})();
          `.trim(),
        }}
      />
    </div>
  );
}
