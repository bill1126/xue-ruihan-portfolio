import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    const bundledPath =
      "/Users/kanyun/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
    return import(pathToFileURL(bundledPath).href);
  }
}

const url = process.env.PDF_URL ?? "http://127.0.0.1:3000/pdf";
const outputPath = resolve("output/pdf/xue-ruihan-portfolio.pdf");

await mkdir("output/pdf", { recursive: true });

const { chromium } = await loadPlaywright();
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1240, height: 1754 },
  deviceScaleFactor: 1,
});

await page.goto(url, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await browser.close();

console.log(outputPath);
