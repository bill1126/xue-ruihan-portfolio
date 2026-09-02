#!/usr/bin/env bash
set -euo pipefail

BASE_PATH="${PAGES_BASE_PATH:-/xue-ruihan-portfolio}"
OUT_DIR="${GITHUB_PAGES_OUT_DIR:-github-pages-static}"
ROUTES=(
  "/"
  "/work"
  "/projects"
  "/projects/food-nutrition-agent"
  "/projects/drone-rescue-agent"
  "/experiences"
  "/experiences/ape-education-ai-games"
  "/experiences/tal-learning-agent"
  "/experiences/yuanhe-medical-agent"
  "/skills"
  "/campus"
  "/contact"
  "/design"
)

npm run build

npm run start > /tmp/xue-ruihan-pages-server.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT

for _ in {1..30}; do
  if curl -fsS "http://127.0.0.1:3000/" >/dev/null; then
    break
  fi
  sleep 1
done

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"
rsync -a dist/client/ "$OUT_DIR/"

for route in "${ROUTES[@]}"; do
  target="$OUT_DIR${route}"
  if [ "$route" = "/" ]; then
    target="$OUT_DIR"
  fi
  mkdir -p "$target"
  curl -fsSL "http://127.0.0.1:3000${route}" -o "$target/index.html"
done

touch "$OUT_DIR/.nojekyll"
find "$OUT_DIR" -name ".assetsignore" -delete

find "$OUT_DIR" -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) -print0 |
  xargs -0 perl -0pi -e '
    my $base = $ENV{"PAGES_BASE_PATH"} || "/xue-ruihan-portfolio";
    s#(href|src|action)="/#$1="$base/#g;
    s#(srcSet)="/#$1="$base/#g;
    s#url\(/#url($base/#g;
    s#([:\[,])"/#$1"$base/#g;
    s#([:\[,])'\''/#$1'\''$base/#g;
  '
