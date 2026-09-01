"use client";

import { useState } from "react";

const email = "1930788596@qq.com";
const phone = "15166489810";

export default function ContactActions() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const copyText = async (value: string, type: "email" | "phone") => {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <div className="contactActions">
      <a href={`mailto:${email}`}>写邮件给我 ↗</a>
      <button type="button" onClick={() => copyText(email, "email")}>
        {copied === "email" ? "已复制邮箱" : "复制邮箱"}
      </button>
      <button type="button" onClick={() => copyText(phone, "phone")}>
        {copied === "phone" ? "已复制电话" : "复制电话"}
      </button>
    </div>
  );
}
