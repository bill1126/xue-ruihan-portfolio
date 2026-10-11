import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const outputRoot = resolve("dist/client");

if (!basePath || !basePath.startsWith("/")) {
  throw new Error("NEXT_PUBLIC_BASE_PATH must be an absolute path such as /xue-ruihan-portfolio");
}

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const rootAssetPattern = new RegExp(`(?<!${escapeRegExp(basePath)})/assets/`, "g");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else {
      files.push(path);
    }
  }

  return files;
}

for (const file of await walk(outputRoot)) {
  if (!/\.(html|css|js|rsc)$/.test(file)) {
    continue;
  }

  const source = await readFile(file, "utf8");
  const rewritten = source.replace(rootAssetPattern, `${basePath}/assets/`);
  if (rewritten !== source) {
    await writeFile(file, rewritten);
  }
}

await writeFile(resolve(outputRoot, ".nojekyll"), "\n");
