#!/usr/bin/env bash
#
# script.sh — Rebuild struktur content/docs/ Fibidy dari nol
#
# Dijalankan dari root folder `docs/` (sejajar dengan content/, src/, package.json).
# Environment: Git Bash (MINGW64) di Windows.
#
# APA YANG DILAKUKAN:
#   1. Hapus total content/docs/ lama (semua file lama kosong, aman dihapus)
#   2. Buat ulang 6 folder + index.mdx + meta.json root
#   3. Buat 23 file .mdx KOSONG sesuai struktur final
#   4. Isi 7 file meta.json dengan navigasi yang benar (ini struktur, bukan konten)
#   5. Tampilkan tree hasil akhir untuk verifikasi
#
# CATATAN: folder legal/ SENGAJA tidak ada — ditangani project terpisah.
#
# Referensi struktur: STRUKTUR-DOKUMENTASI-FINAL.md

set -euo pipefail

DOCS_ROOT="content/docs"

# --- 0. Safety check: pastikan dijalankan dari root folder docs/ project ---
if [ ! -d "content" ] || [ ! -f "package.json" ]; then
  echo "❌ Script ini harus dijalankan dari root folder 'docs/' project"
  echo "   (folder yang sejajar dengan content/, src/, package.json)"
  echo "   Lokasi saat ini: $(pwd)"
  exit 1
fi

echo "📍 Menjalankan dari: $(pwd)"
echo ""

# --- 1. Hapus total content/docs/ lama ---
if [ -d "$DOCS_ROOT" ]; then
  echo "🗑️  Menghapus struktur lama: $DOCS_ROOT"
  rm -rf "$DOCS_ROOT"
else
  echo "ℹ️  $DOCS_ROOT belum ada, lanjut buat baru"
fi
echo ""

# --- 2. Buat ulang folder-folder utama ---
echo "📁 Membuat struktur folder baru..."
mkdir -p "$DOCS_ROOT/getting-started"
mkdir -p "$DOCS_ROOT/features"
mkdir -p "$DOCS_ROOT/studio"
mkdir -p "$DOCS_ROOT/settings"
mkdir -p "$DOCS_ROOT/subscription"
mkdir -p "$DOCS_ROOT/troubleshooting"
echo "   ✓ 6 folder dibuat"
echo ""

# --- 3. Buat file .mdx kosong ---
echo "📄 Membuat file .mdx kosong..."

# Root
touch "$DOCS_ROOT/index.mdx"

# getting-started/
touch "$DOCS_ROOT/getting-started/introduction.mdx"
touch "$DOCS_ROOT/getting-started/quick-start.mdx"
touch "$DOCS_ROOT/getting-started/what-is-fibidy.mdx"

# features/
touch "$DOCS_ROOT/features/overview.mdx"
touch "$DOCS_ROOT/features/store-setup.mdx"
touch "$DOCS_ROOT/features/products.mdx"
touch "$DOCS_ROOT/features/cashier.mdx"
touch "$DOCS_ROOT/features/board.mdx"
touch "$DOCS_ROOT/features/stock.mdx"
touch "$DOCS_ROOT/features/reports.mdx"

# studio/
touch "$DOCS_ROOT/studio/overview.mdx"
touch "$DOCS_ROOT/studio/blocks.mdx"

# settings/
touch "$DOCS_ROOT/settings/overview.mdx"
touch "$DOCS_ROOT/settings/hero.mdx"
touch "$DOCS_ROOT/settings/highlights.mdx"
touch "$DOCS_ROOT/settings/contact.mdx"
touch "$DOCS_ROOT/settings/social.mdx"
touch "$DOCS_ROOT/settings/discounts.mdx"
touch "$DOCS_ROOT/settings/promos.mdx"

# subscription/
touch "$DOCS_ROOT/subscription/overview.mdx"
touch "$DOCS_ROOT/subscription/pricing.mdx"

# troubleshooting/
touch "$DOCS_ROOT/troubleshooting/common-issues.mdx"

echo "   ✓ 23 file .mdx kosong dibuat"
echo ""

# --- 4. Isi meta.json (ini struktur navigasi, bukan konten — wajib terisi) ---
echo "🧭 Menulis meta.json (struktur navigasi)..."

cat > "$DOCS_ROOT/meta.json" << 'EOF'
{
  "title": "Fibidy",
  "root": true,
  "pages": [
    "index",
    "getting-started",
    "features",
    "studio",
    "settings",
    "subscription",
    "troubleshooting"
  ]
}
EOF

cat > "$DOCS_ROOT/getting-started/meta.json" << 'EOF'
{
  "title": "Mulai",
  "pages": [
    "introduction",
    "quick-start",
    "what-is-fibidy"
  ]
}
EOF

cat > "$DOCS_ROOT/features/meta.json" << 'EOF'
{
  "title": "Fitur",
  "pages": [
    "overview",
    "store-setup",
    "products",
    "cashier",
    "board",
    "stock",
    "reports"
  ]
}
EOF

cat > "$DOCS_ROOT/studio/meta.json" << 'EOF'
{
  "title": "Studio",
  "pages": [
    "overview",
    "blocks"
  ]
}
EOF

cat > "$DOCS_ROOT/settings/meta.json" << 'EOF'
{
  "title": "Pengaturan",
  "pages": [
    "overview",
    "hero",
    "highlights",
    "contact",
    "social",
    "discounts",
    "promos"
  ]
}
EOF

cat > "$DOCS_ROOT/subscription/meta.json" << 'EOF'
{
  "title": "Langganan",
  "pages": [
    "overview",
    "pricing"
  ]
}
EOF

cat > "$DOCS_ROOT/troubleshooting/meta.json" << 'EOF'
{
  "title": "Troubleshooting",
  "pages": [
    "common-issues"
  ]
}
EOF

echo "   ✓ 7 file meta.json ditulis"
echo ""

# --- 5. Tampilkan hasil akhir untuk verifikasi ---
echo "✅ Selesai! Struktur akhir $DOCS_ROOT:"
echo ""

if command -v find >/dev/null 2>&1; then
  find "$DOCS_ROOT" | sort | sed -e "s|$DOCS_ROOT|.|" -e 's|[^/]*/|  |g'
else
  ls -R "$DOCS_ROOT"
fi

echo ""
echo "📊 Ringkasan:"
echo "   Folder  : $(find "$DOCS_ROOT" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')"
echo "   File .mdx : $(find "$DOCS_ROOT" -name '*.mdx' | wc -l | tr -d ' ')"
echo "   meta.json : $(find "$DOCS_ROOT" -name 'meta.json' | wc -l | tr -d ' ')"
echo ""
echo "➡️  Langkah selanjutnya: isi tiap .mdx mengikuti panduan gaya di STRUKTUR-DOKUMENTASI-FINAL.md"
