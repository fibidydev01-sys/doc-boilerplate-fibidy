#!/bin/bash
# ================================================================
# collect-ui.sh — Kumpulkan SEMUA file di src/components/ui/
# Jalankan dari: /d/DRIVE-D/PROJECT/.../railway/docs
# Output: collections/COLLECT-UI-<timestamp>.txt
# ================================================================

ROOT="./src/components/ui"
OUT="collections"
mkdir -p "$OUT"

BOLD='\033[1m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RESET='\033[0m'

TIMESTAMP=$(date '+%Y%m%d-%H%M%S')
FILE="$OUT/COLLECT-UI-${TIMESTAMP}.txt"

echo ""
echo -e "${BOLD}▶ Mengumpulkan semua file UI components ...${RESET}"

{
echo "################################################################"
echo "##  FIBIDY — UI COMPONENTS (src/components/ui/)"
echo "##  Generated : $(date '+%Y-%m-%d %H:%M:%S')"
echo "##  Total     : $(find "$ROOT" -type f -name "*.tsx" | wc -l) file"
echo "################################################################"
echo ""
} > "$FILE"

COUNT=0
find "$ROOT" -type f -name "*.tsx" | sort | while read -r f; do
  COUNT=$((COUNT + 1))
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
  echo -e "  ${GREEN}✓${RESET} ${display}"
done

TOTAL=$(find "$ROOT" -type f -name "*.tsx" | wc -l)

echo ""
echo -e "${BOLD}═══════════════════════════════════════════════════════════════${RESET}"
echo -e "  ${GREEN}✓ Total file terkumpul : $TOTAL${RESET}"
echo -e "${BOLD}═══════════════════════════════════════════════════════════════${RESET}"
echo -e "  Output : ${CYAN}$FILE${RESET}"
echo ""

{
echo ""
echo "################################################################"
echo "##  SUMMARY"
echo "################################################################"
echo "Total files : $TOTAL"
echo "Location    : src/components/ui/"
} >> "$FILE"