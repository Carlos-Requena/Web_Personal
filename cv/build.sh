#!/usr/bin/env bash
# Render the CV sources in cv/ to the PDFs the website links to (public/cv/).
# Requires Google Chrome. Usage: bash cv/build.sh
set -euo pipefail

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
CV_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$CV_DIR/../public/cv"

render() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$OUT_DIR/$2" "file://$CV_DIR/$1" 2>/dev/null
  echo "public/cv/$2"
}

render cv-es.html Carlos_Requena_CV.pdf
render cv-en.html Carlos_Requena_CV_EN.pdf
render shokumu-keirekisho.html Shokumu_Keirekisho_Carlos_Requena.pdf
