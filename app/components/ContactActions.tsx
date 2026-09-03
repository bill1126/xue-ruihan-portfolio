const email = "1930788596@qq.com";
const phone = "15166489810";

export default function ContactActions() {
  return (
    <div className="contactActions" data-contact-actions>
      <button data-copy-value={email} data-default-label="复制邮箱" data-copied-label="已复制邮箱" type="button">
        复制邮箱
      </button>
      <button data-copy-value={phone} data-default-label="复制电话" data-copied-label="已复制电话" type="button">
        复制电话
      </button>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(() => {
  const root = document.currentScript?.closest("[data-contact-actions]");
  if (!root) return;

  const copyWithFallback = async (value) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  };

  root.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy-value") || "";
      const defaultLabel = button.getAttribute("data-default-label") || button.textContent || "";
      const copiedLabel = button.getAttribute("data-copied-label") || "已复制";

      try {
        await copyWithFallback(value);
        button.textContent = copiedLabel;
        window.setTimeout(() => {
          button.textContent = defaultLabel;
        }, 1600);
      } catch {
        button.textContent = "复制失败";
        window.setTimeout(() => {
          button.textContent = defaultLabel;
        }, 1600);
      }
    });
  });
})();
          `.trim(),
        }}
      />
    </div>
  );
}
