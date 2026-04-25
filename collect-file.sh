#!/bin/bash
# ================================================================
# collect.sh — Docusaurus File Collector
# Run from: /d/BOILERPLATE/docusaurus
# Output  : collections/COLLECT-<timestamp>.txt
# Skip    : src/components/ui/
# ================================================================

SRC="./src"
CONTENT="./content"
OUT="collections"
mkdir -p "$OUT"

BOLD='\033[1m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
RESET='\033[0m'

echo ""
echo -e "${BOLD}╔══════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}║         FILE COLLECTOR — DOCUSAURUS              ║${RESET}"
echo -e "${BOLD}╠══════════════════════════════════════════════════╣${RESET}"
echo -e "${BOLD}║  SRC LAYERS                                      ║${RESET}"
echo -e "${BOLD}║  1.${RESET}  ${CYAN}src/app/${RESET}                               ${BOLD}║${RESET}"
echo -e "${BOLD}║  2.${RESET}  ${CYAN}src/components/${RESET} ${YELLOW}(excl. ui/)${RESET}         ${BOLD}║${RESET}"
echo -e "${BOLD}║  3.${RESET}  ${CYAN}src/hooks/${RESET}                             ${BOLD}║${RESET}"
echo -e "${BOLD}║  4.${RESET}  ${CYAN}src/lib/${RESET}                               ${BOLD}║${RESET}"
echo -e "${BOLD}║  5.${RESET}  ${CYAN}src/providers/${RESET}                         ${BOLD}║${RESET}"
echo -e "${BOLD}║  6.${RESET}  ${CYAN}src/ root${RESET} ${YELLOW}(*.ts *.tsx)${RESET}              ${BOLD}║${RESET}"
echo -e "${BOLD}║  7.${RESET}  ${CYAN}root configs${RESET} ${YELLOW}(*.ts *.mjs *.json)${RESET}    ${BOLD}║${RESET}"
echo -e "${BOLD}║                                                  ║${RESET}"
echo -e "${BOLD}║  CONTENT LAYERS                                  ║${RESET}"
echo -e "${BOLD}║  8.${RESET}  ${CYAN}content/docs/analytics/${RESET}                ${BOLD}║${RESET}"
echo -e "${BOLD}║  9.${RESET}  ${CYAN}content/docs/architecture/${RESET}             ${BOLD}║${RESET}"
echo -e "${BOLD}║  10.${RESET} ${CYAN}content/docs/authentication/${RESET}           ${BOLD}║${RESET}"
echo -e "${BOLD}║  11.${RESET} ${CYAN}content/docs/commerce/${RESET}                 ${BOLD}║${RESET}"
echo -e "${BOLD}║  12.${RESET} ${CYAN}content/docs/configuration/${RESET}            ${BOLD}║${RESET}"
echo -e "${BOLD}║  13.${RESET} ${CYAN}content/docs/database/${RESET}                 ${BOLD}║${RESET}"
echo -e "${BOLD}║  14.${RESET} ${CYAN}content/docs/deployment/${RESET}               ${BOLD}║${RESET}"
echo -e "${BOLD}║  15.${RESET} ${CYAN}content/docs/email/${RESET}                    ${BOLD}║${RESET}"
echo -e "${BOLD}║  16.${RESET} ${CYAN}content/docs/payment/${RESET}                  ${BOLD}║${RESET}"
echo -e "${BOLD}║  17.${RESET} ${CYAN}content/docs/push-notification/${RESET}        ${BOLD}║${RESET}"
echo -e "${BOLD}║  18.${RESET} ${CYAN}content/docs/setup/${RESET}                    ${BOLD}║${RESET}"
echo -e "${BOLD}║  19.${RESET} ${CYAN}content/docs/working-with-the-codebase/${RESET} ${BOLD}║${RESET}"
echo -e "${BOLD}║  20.${RESET} ${CYAN}content/docs/ root${RESET} ${YELLOW}(*.mdx *.json)${RESET}   ${BOLD}║${RESET}"
echo -e "${BOLD}║                                                  ║${RESET}"
echo -e "${BOLD}║  88.${RESET} ${GREEN}ALL CONTENT LAYERS (8–20)${RESET}              ${BOLD}║${RESET}"
echo -e "${BOLD}║  99.${RESET} ${GREEN}ALL LAYERS (everything)${RESET}                ${BOLD}║${RESET}"
echo -e "${BOLD}╚══════════════════════════════════════════════════╝${RESET}"
echo ""
echo -e "${YELLOW}Pilih layer (contoh: 1 atau 1 3 5 atau 9 11 atau 99):${RESET} "
read -r INPUT

TIMESTAMP=$(date '+%Y%m%d-%H%M%S')
FILE="$OUT/COLLECT-${TIMESTAMP}.txt"
FOUND=0; MISSING=0; TOTAL=0

{
echo "################################################################"
echo "##  DOCUSAURUS — SOURCE COLLECTION"
echo "##  Generated : $(date '+%Y-%m-%d %H:%M:%S')"
echo "##  Selection : $INPUT"
echo "##  Skipped   : src/components/ui/"
echo "################################################################"
echo ""
} > "$FILE"

cf() {
    local f="$1"
    TOTAL=$((TOTAL + 1))
    {
    echo ""
    echo "================================================"
    echo "FILE: ${f#./}"
    } >> "$FILE"
    if [ -f "$f" ]; then
        local lines; lines=$(wc -l < "$f" 2>/dev/null || echo "0")
        echo -e "  ${GREEN}✓${RESET} ${f#./} (${lines} lines)"
        FOUND=$((FOUND + 1))
        {
        echo "Lines: $lines"
        echo "================================================"
        echo ""
        cat "$f"
        printf "\n\n"
        } >> "$FILE"
    else
        echo -e "  ${RED}✗${RESET} MISSING: ${f#./}"
        MISSING=$((MISSING + 1))
        {
        echo "STATUS: *** FILE NOT FOUND ***"
        echo "================================================"
        echo ""
        } >> "$FILE"
    fi
}

sec() {
    local label="$1"
    echo -e "\n${BOLD}▶ $label${RESET}"
    {
    echo ""
    echo "################################################################"
    echo "##  $label"
    echo "################################################################"
    echo ""
    } >> "$FILE"
}

run_layer() {
    case "$1" in
        1)
            sec "src/app/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$SRC/app" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.css" \) -print0 | sort -z)
            ;;
        2)
            sec "src/components/ (excl. ui/)"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$SRC/components" -type f \( -name "*.ts" -o -name "*.tsx" \) -not -path "*/ui/*" -print0 | sort -z)
            ;;
        3)
            sec "src/hooks/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$SRC/hooks" -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 | sort -z)
            ;;
        4)
            sec "src/lib/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$SRC/lib" -type f -name "*.ts" -print0 | sort -z)
            ;;
        5)
            sec "src/providers/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$SRC/providers" -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 | sort -z)
            ;;
        6)
            sec "src/ root (*.ts *.tsx)"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$SRC" -maxdepth 1 -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 | sort -z)
            ;;
        7)
            sec "root configs (*.ts *.mjs *.json)"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "." -maxdepth 1 -type f \( -name "*.ts" -o -name "*.mjs" -o -name "*.json" \) -not -name "*.d.ts" -print0 | sort -z)
            ;;
        8)
            sec "content/docs/analytics/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/analytics" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        9)
            sec "content/docs/architecture/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/architecture" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        10)
            sec "content/docs/authentication/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/authentication" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        11)
            sec "content/docs/commerce/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/commerce" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        12)
            sec "content/docs/configuration/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/configuration" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        13)
            sec "content/docs/database/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/database" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        14)
            sec "content/docs/deployment/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/deployment" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        15)
            sec "content/docs/email/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/email" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        16)
            sec "content/docs/payment/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/payment" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        17)
            sec "content/docs/push-notification/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/push-notification" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        18)
            sec "content/docs/setup/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/setup" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        19)
            sec "content/docs/working-with-the-codebase/"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs/working-with-the-codebase" -type f \( -name "*.mdx" -o -name "meta.json" \) -print0 | sort -z)
            ;;
        20)
            sec "content/docs/ root (*.mdx *.json)"
            while IFS= read -r -d '' f; do cf "$f"
            done < <(find "$CONTENT/docs" -maxdepth 1 -type f \( -name "*.mdx" -o -name "*.json" \) -print0 | sort -z)
            ;;
        *)
            echo -e "  ${RED}⚠ Pilihan tidak valid: $1${RESET}"
            ;;
    esac
}

if echo "$INPUT" | grep -qw "99"; then
    for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20; do run_layer $i; done
elif echo "$INPUT" | grep -qw "88"; then
    for i in 8 9 10 11 12 13 14 15 16 17 18 19 20; do run_layer $i; done
else
    for i in $INPUT; do run_layer "$i"; done
fi

pct=0; [ $TOTAL -gt 0 ] && pct=$(( FOUND * 100 / TOTAL ))

echo ""
echo -e "${BOLD}════════════════════════════════════${RESET}"
echo -e "  ${GREEN}✓ Found   : $FOUND / $TOTAL${RESET}"
echo -e "  ${RED}✗ Missing : $MISSING${RESET}"
echo -e "  Coverage  : $pct%"
echo -e "${BOLD}════════════════════════════════════${RESET}"
echo -e "  Output: ${CYAN}$FILE${RESET}"
echo ""

{
echo ""
echo "################################################################"
echo "##  SUMMARY"
echo "################################################################"
echo "Found   : $FOUND / $TOTAL"
echo "Missing : $MISSING"
echo "Coverage: $pct%"
} >> "$FILE"