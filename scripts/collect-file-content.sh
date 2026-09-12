#!/bin/bash
# ================================================================
# collect-docs.sh — Kumpulkan SEMUA file dokumentasi Fibidy
# Output: collections/COLLECT-DOCS-<timestamp>.txt
#
# Struktur folder (d:\DRIVE-D\PROJECT\PRODUK-LPPM-FINAL\
#                    UMKM-MULTI-TENANT\railway\docs\content):
#   docs/
#   ├── {getting-started,features,settings,studio,subscription,troubleshooting}/
#   ├── features/       → 7 .mdx + meta.json
#   ├── getting-started/→ 5 .mdx + meta.json
#   ├── settings/       → 9 .mdx + meta.json
#   ├── studio/         → 3 .mdx + meta.json
#   ├── subscription/   → 3 .mdx + meta.json
#   ├── troubleshooting/→ 2 .mdx + meta.json
#   ├── index.mdx
#   └── meta.json
#
# Total file: 33 (.mdx + meta.json)
# ================================================================

ROOT="./content/docs"
OUT="collections"
mkdir -p "$OUT"

TIMESTAMP=$(date '+%Y%m%d-%H%M%S')
FILE="$OUT/COLLECT-DOCS-${TIMESTAMP}.txt"

echo "▶ Mengumpulkan semua file dokumentasi ..."
echo ""

# ── Validasi root folder ─────────────────────────────────────────
if [ ! -d "$ROOT" ]; then
  echo "❌ Folder '$ROOT' tidak ditemukan."
  echo "   Pastikan script dijalankan dari root project yang berisi"
  echo "   folder 'content/docs/'."
  exit 1
fi

# ── Header ───────────────────────────────────────────────────────
{
  echo "################################################################"
  echo "##  FIBIDY — DOKUMENTASI LENGKAP"
  echo "##  Generated : $(date '+%Y-%m-%d %H:%M:%S')"
  echo "##  Root      : ${ROOT}"
  echo "################################################################"
  echo ""
} > "$FILE"

# ── Kumpulkan file .mdx & meta.json ──────────────────────────────
find "$ROOT" -type f \( -name "*.mdx" -o -name "meta.json" \) \
  | sort \
  | while read -r f; do
      display="${f#./}"
      lines=$(wc -l < "$f" 2>/dev/null || echo "0")
      {
        echo ""
        echo "================================================"
        echo "FILE: ${display}"
        echo "Lines: ${lines}"
        echo "================================================"
        echo ""
        cat "$f"
        printf "\n\n"
      } >> "$FILE"
      echo "  ✓ ${display}"
    done

# ── Ringkasan ────────────────────────────────────────────────────
TOTAL=$(find "$ROOT" -type f \( -name "*.mdx" -o -name "meta.json" \) | wc -l)
MDX_COUNT=$(find "$ROOT" -type f -name "*.mdx" | wc -l)
META_COUNT=$(find "$ROOT" -type f -name "meta.json" | wc -l)

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  ✓ Total file terkumpul : $TOTAL"
echo "      - .mdx      : $MDX_COUNT"
echo "      - meta.json : $META_COUNT"
echo "  Output : $FILE"
echo "═══════════════════════════════════════════════════════════════"