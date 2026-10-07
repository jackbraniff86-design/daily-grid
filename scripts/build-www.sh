#!/bin/sh
# Copies the website into www/ for the app. The site itself stays at the repo root for GitHub Pages.
set -e
cd "$(dirname "$0")/.."
rm -rf www && mkdir -p www
cp index.html puzzles.js www/
echo "www/ built"
