#!/bin/bash
# ================================================================
# collect-all.sh — Kumpulkan SEMUA (dokumentasi + source code)
# Output: collections/COLLECT-ALL-<timestamp>.txt
# ================================================================

OUT="collections"
mkdir -p "$OUT"

TIMESTAMP=$(date '+%Y%m%d-%H%M%S')
FILE="$OUT/COLLECT-ALL-${TIMESTAMP}.txt"

echo "▶ Mengumpulkan SEMUA file (docs + src) ..."

{
echo "################################################################"
echo "##  FIBIDY — SEMUA FILE (Dokumentasi + Source Code)"
echo "##  Generated : $(date '+%Y-%m-%d %H:%M:%S')"
echo "################################################################"
echo ""
} > "$FILE"

# ─── Dokumentasi ──────────────────────────────────────────────────────
echo "" >> "$FILE"
echo "################################################################" >> "$FILE"
echo "##  📚 DOKUMENTASI (content/docs/)" >> "$FILE"
echo "################################################################" >> "$FILE"
echo "" >> "$FILE"

find "./content/docs" -type f \( -name "*.mdx" -o -name "meta.json" \) | sort | while read -r f; do
  display="${f#./}"
  {
    echo ""
    echo "================================================"
    echo "FILE: ${display}"
    echo "Lines: $(wc -l < "$f" 2>/dev/null || echo "0")"
    echo "================================================"
    echo ""
    cat "$f"
    printf "\n\n"
  } >> "$FILE"
  echo "  📄 ${display}"
done

# ─── Source Code ──────────────────────────────────────────────────────
echo "" >> "$FILE"
echo "################################################################" >> "$FILE"
echo "##  💻 SOURCE CODE (src/ — tanpa ui/)" >> "$FILE"
echo "################################################################" >> "$FILE"
echo "" >> "$FILE"

find "./src" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.css" \) \
  -not -path "*/ui/*" | sort | while read -r f; do
  display="${f#./}"
  {
    echo ""
    echo "================================================"
    echo "FILE: ${display}"
    echo "Lines: $(wc -l < "$f" 2>/dev/null || echo "0")"
    echo "================================================"
    echo ""
    cat "$f"
    printf "\n\n"
  } >> "$FILE"
  echo "  💻 ${display}"
done

TOTAL=$(grep -c "^FILE:" "$FILE" 2>/dev/null || echo "0")

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  ✓ Total file terkumpul : $TOTAL"
echo "  Output : $FILE"
echo "═══════════════════════════════════════════════════════════════"