# 📚 Daftar Halaman Dokumentasi Fibidy — Final

**23 halaman**, terorganisir dalam 6 folder, style megah ala Lemon Squeezy, 100% dicocokkan ke codebase Fibidy.

> Angka di dokumen ini dikonsolidasikan dari dua draft sebelumnya yang sempat beda hitungan (23 vs 22 halaman, 7 vs 6 folder). Angka yang dipakai di sini mengikuti hasil aktual `script.sh` yang sudah dijalankan dan diverifikasi di terminal — lihat [Catatan Konsolidasi](#-catatan-konsolidasi) di bagian akhir.

---

## Daftar Isi

- [Daftar Lengkap Halaman](#-daftar-lengkap-halaman)
- [Rekap Total](#-rekap-total)
- [Struktur Folder Lengkap](#️-struktur-folder-lengkap)
- [E2E Verification — Codebase vs Dokumentasi](#-e2e-verification--codebase-vs-dokumentasi)
- [Halaman yang Sengaja Tidak Ada](#-halaman-yang-sengaja-tidak-ada-keputusan-produk)
- [Status Final](#-status-final)
- [Catatan Konsolidasi](#-catatan-konsolidasi)

---
---

## 📚 Daftar Lengkap Halaman

### 🏠 Root (1 halaman)

| No | File | Judul Halaman | Fungsi |
|---|---|---|---|
| 1 | `index.mdx` | Selamat Datang di Fibidy | Halaman pembuka, pintu masuk semua pengguna |

### 🟢 Getting Started (3 halaman)

| No | File | Judul Halaman | Fungsi |
|---|---|---|---|
| 2 | `introduction.mdx` | Apa Itu Fibidy? | Pengantar produk, filosofi, value proposition |
| 3 | `quick-start.mdx` | Memulai Cepat | Panduan daftar & buat toko dalam 5 langkah |
| 4 | `what-is-fibidy.mdx` | Fibidy Bukan Marketplace | Penjelasan cara kerja (WhatsApp/QRIS), 41 kategori |

### 🟡 Features (7 halaman)

| No | File | Judul Halaman | Fungsi |
|---|---|---|---|
| 5 | `overview.mdx` | Semua Fitur Fibidy | Daftar lengkap 8 modul dalam 1 halaman |
| 6 | `store-setup.mdx` | Setup Toko (5 Langkah) | Panduan lengkap setup toko + autofill kategori |
| 7 | `products.mdx` | Manajemen Produk | Barang vs Jasa, form 3 langkah, kategori free-text |
| 8 | `cashier.mdx` | Kasir (Point of Sale) | Keranjang, diskon, pembayaran, struk digital |
| 9 | `board.mdx` | Papan Kerja (Jasa) | Kanban 4 kolom, geser kartu, serahkan |
| 10 | `stock.mdx` | Manajemen Stok | Restock & opname, filter, konfirmasi selisih |
| 11 | `reports.mdx` | Laporan & Analitik | Omzet, produk terlaris, stok, analisa diskon |

### 🟡 Studio (2 halaman)

| No | File | Judul Halaman | Fungsi |
|---|---|---|---|
| 12 | `overview.mdx` | Studio / Landing Builder | Block system, live preview, publish |
| 13 | `blocks.mdx` | 25 Variasi Block Hero | Detail block 1–25 + akses per paket |

### 🟡 Settings (7 halaman)

| No | File | Judul Halaman | Fungsi |
|---|---|---|---|
| 14 | `overview.mdx` | Pengaturan Toko | 7 section pengaturan dalam 1 halaman |
| 15 | `hero.mdx` | Hero & Branding | Nama, logo, headline, tagline, CTA, warna |
| 16 | `highlights.mdx` | Highlights (Unggulan) | 3–7 highlight, gambar, drag-and-drop |
| 17 | `contact.mdx` | Kontak | WhatsApp, telepon, alamat, Google Maps |
| 18 | `social.mdx` | Sosial Media | 13 platform sosial media |
| 19 | `discounts.mdx` | Diskon Preset | Cara buat, aturan, dipakai di kasir |
| 20 | `promos.mdx` | Program Promo | BOGO & Buy2Get1, otomatis di kasir |

### 🟢 Subscription (2 halaman)

| No | File | Judul Halaman | Fungsi |
|---|---|---|---|
| 21 | `overview.mdx` | Paket Langganan | 3 paket (Free/Starter/Business) + perbandingan |
| 22 | `pricing.mdx` | Harga & Fitur | Detail harga & fitur tiap paket |

### 🔴 Troubleshooting (1 halaman)

| No | File | Judul Halaman | Fungsi |
|---|---|---|---|
| 23 | `common-issues.mdx` | Masalah Umum & Solusi | 6–8 masalah + solusi cepat |

---
---

## 📊 Rekap Total

| Kategori | Jumlah Halaman |
|---|---|
| Root | 1 |
| Getting Started | 3 |
| Features | 7 |
| Studio | 2 |
| Settings | 7 |
| Subscription | 2 |
| Troubleshooting | 1 |
| **TOTAL** | **23** |

---
---

## 🏗️ Struktur Folder Lengkap

```
content/docs/
├── meta.json                         ← Daftar isi utama
├── index.mdx                         ← Halaman 1
│
├── getting-started/
│   ├── meta.json
│   ├── introduction.mdx              ← Halaman 2
│   ├── quick-start.mdx               ← Halaman 3
│   └── what-is-fibidy.mdx            ← Halaman 4
│
├── features/
│   ├── meta.json
│   ├── overview.mdx                  ← Halaman 5
│   ├── store-setup.mdx               ← Halaman 6
│   ├── products.mdx                  ← Halaman 7
│   ├── cashier.mdx                   ← Halaman 8
│   ├── board.mdx                     ← Halaman 9
│   ├── stock.mdx                     ← Halaman 10
│   └── reports.mdx                   ← Halaman 11
│
├── studio/
│   ├── meta.json
│   ├── overview.mdx                  ← Halaman 12
│   └── blocks.mdx                    ← Halaman 13
│
├── settings/
│   ├── meta.json
│   ├── overview.mdx                  ← Halaman 14
│   ├── hero.mdx                      ← Halaman 15
│   ├── highlights.mdx                ← Halaman 16
│   ├── contact.mdx                   ← Halaman 17
│   ├── social.mdx                    ← Halaman 18
│   ├── discounts.mdx                 ← Halaman 19
│   └── promos.mdx                    ← Halaman 20
│
├── subscription/
│   ├── meta.json
│   ├── overview.mdx                  ← Halaman 21
│   └── pricing.mdx                   ← Halaman 22
│
└── troubleshooting/
    ├── meta.json
    └── common-issues.mdx             ← Halaman 23
```

**6 folder** — `legal/` sengaja tidak ada, ditangani project terpisah (lihat `STRUKTUR-DOKUMENTASI-FINAL.md`).

---
---

## 🔍 E2E Verification — Codebase vs Dokumentasi

Cross-check 23 halaman terhadap source code Fibidy (`collection-semua.txt`).

| Halaman | Source Code Terkait | Status |
|---|---|---|
| `index.mdx` | `src/app/[locale]/(marketing)/page.tsx` | ✅ Ada |
| `introduction.mdx` | `src/app/[locale]/(marketing)/page.tsx` + `layout.tsx` | ✅ Ada |
| `quick-start.mdx` | `src/app/[locale]/(auth)/register/page.tsx` + `seller-setup-wizard.tsx` | ✅ Ada |
| `what-is-fibidy.mdx` | `src/components/marketing/hero-section.tsx` + `why-section.tsx` | ✅ Ada |
| `features/overview.mdx` | *(rangkuman — lihat 6 baris `features/*` di bawah)* | 🟡 Rangkuman |
| `store-setup.mdx` | `src/app/[locale]/(dashboard)/dashboard/setup-store/seller/seller-setup-wizard.tsx` | ✅ Ada |
| `products.mdx` | `src/app/[locale]/(dashboard)/dashboard/products/client.tsx` + `product.tsx` (form) | ✅ Ada |
| `cashier.mdx` | `src/app/[locale]/(dashboard)/dashboard/kasir/client.tsx` + `kasir-cart-store.ts` | ✅ Ada |
| `board.mdx` | `src/app/[locale]/(dashboard)/dashboard/kasir/papan/client.tsx` + `kasir.ts` (types) | ✅ Ada |
| `stock.mdx` | `src/app/[locale]/(dashboard)/dashboard/kasir/stok/client.tsx` + `stok-kelola-sheet.tsx` | ✅ Ada |
| `reports.mdx` | `src/app/[locale]/(dashboard)/dashboard/kasir/laporan/client.tsx` + `use-kasir.ts` | ✅ Ada |
| `studio/overview.mdx` | `src/app/[locale]/(dashboard)/dashboard/studio/page.tsx` | ✅ Ada |
| `studio/blocks.mdx` | `src/components/dashboard/studio/block-options.ts` | ✅ Ada |
| `settings/overview.mdx` | *(rangkuman — lihat 6 baris `settings/*` di bawah)* | 🟡 Rangkuman |
| `settings/hero.mdx` | `src/components/dashboard/settings/hero.tsx` | ✅ Ada |
| `settings/highlights.mdx` | `src/components/dashboard/settings/about.tsx` | ✅ Ada |
| `settings/contact.mdx` | `src/components/dashboard/settings/contact.tsx` | ✅ Ada |
| `settings/social.mdx` | `src/components/dashboard/settings/social.tsx` | ✅ Ada |
| `settings/discounts.mdx` | `src/components/dashboard/settings/kasir-diskon-preset.tsx` | ✅ Ada |
| `settings/promos.mdx` | `src/components/dashboard/settings/kasir-promo.tsx` | ✅ Ada |
| `subscription/overview.mdx` | `src/components/dashboard/subscription/subscription-page-content.tsx` | ✅ Ada |
| `subscription/pricing.mdx` | `subscription-page-content.tsx` + `src/lib/api/subscription.ts` | ✅ Ada |
| `common-issues.mdx` | `src/app/[locale]/(dashboard)/dashboard/settings/client.tsx` + `use-online-status.ts` | ✅ Ada |

**23 baris — semua halaman tercakup.** 21 halaman punya source file spesifik (✅), 2 halaman (`features/overview.mdx`, `settings/overview.mdx`) berstatus 🟡 karena isinya adalah rangkuman dari halaman-halaman lain di kategori yang sama — bukan berarti tidak match, tapi sumbernya adalah gabungan file yang sudah tercatat di baris lain.

### Ringkasan per Kategori

| Kategori | Total Halaman | Match Langsung (✅) | Rangkuman (🟡) |
|---|---|---|---|
| Root | 1 | 1 | 0 |
| Getting Started | 3 | 3 | 0 |
| Features | 7 | 6 | 1 (`overview.mdx`) |
| Studio | 2 | 2 | 0 |
| Settings | 7 | 6 | 1 (`overview.mdx`) |
| Subscription | 2 | 2 | 0 |
| Troubleshooting | 1 | 1 | 0 |
| **TOTAL** | **23** | **21** | **2** |

**Kesimpulan: 23 dari 23 halaman tercakup dalam verifikasi.** 21 punya source file spesifik yang match langsung; 2 halaman overview (Features dan Settings) tidak punya source tersendiri karena memang berfungsi merangkum halaman lain yang sudah terverifikasi — bukan halaman yang gagal dicek, tapi halaman yang secara desain tidak butuh source terpisah. Tidak ada halaman "mengada-ada" yang gak punya dasar produk.

---
---

## ❌ Halaman yang Sengaja Tidak Ada (Keputusan Produk)

Dibandingkan dengan cakupan dokumentasi Lemon Squeezy (referensi gaya), halaman-halaman berikut **sengaja tidak dibuat** karena tidak relevan dengan model bisnis Fibidy:

| Topik yang Tidak Dibuat | Kenapa Tidak Relevan |
|---|---|
| Migrasi dari platform lain | Fibidy bukan platform migrasi |
| Pajak & formulir pajak | Fibidy bukan Merchant of Record, tidak urus pajak pembeli |
| Marketplace publik | Fibidy bukan marketplace |
| Program afiliasi | Tidak ada fitur afiliasi di produk |
| Email marketing | Notifikasi & komunikasi lewat WhatsApp, bukan email |
| Domain kustom | Subdomain default saja (`{slug}.fibidy.com`) |
| Lisensi software (license keys) | Fibidy untuk jual barang/jasa fisik, bukan software |
| Integrasi pihak ketiga | Belum ada integrasi eksternal di produk |

Ini bukan halaman yang "belum sempat ditulis" — ini keputusan sadar untuk **tidak membuat dokumentasi fitur yang memang tidak ada**, supaya dokumentasi tetap akurat dan tidak menjanjikan sesuatu yang tidak bisa dipakai seller.

---
---

## 🎯 Status Final

| Status | Detail |
|---|---|
| ✅ Struktur folder & meta.json | 6 folder, 7 file `meta.json` |
| ✅ Daftar halaman (23 file `.mdx`) | 23 file kosong, sudah dibuat via `script.sh` |
| ✅ E2E verified dengan codebase | 23 dari 23 tercakup (21 match langsung, 2 rangkuman) |
| ⬜ Konten ditulis | 0 dari 23 |

### Urutan Prioritas Penulisan Konten (Disarankan)

1. **`index.mdx`** — halaman pembuka, paling cepat selesai, jadi pintu masuk semua orang
2. **`getting-started/introduction.mdx`** — pengantar produk, dasar untuk halaman lain
3. **`getting-started/quick-start.mdx`** — kemungkinan besar halaman paling sering dibaca
4. **`features/cashier.mdx`** — fitur paling kompleks, sekaligus paling banyak dipakai harian

Setelah 4 ini selesai, lanjut ke sisa `features/`, baru `studio/`, `settings/`, `subscription/`, dan `troubleshooting/` di akhir (karena troubleshooting butuh referensi ke halaman fitur yang sudah ditulis).

---
---

## 📝 Catatan Konsolidasi

Dokumen ini menggabungkan dua draft sebelumnya yang sempat punya angka berbeda:

| Titik Beda | Draft "Daftar Halaman" | Draft "E2E Verification" | Angka Final di Sini | Alasan |
|---|---|---|---|---|
| Jumlah halaman | 23 (termasuk `index.mdx`) | 22 (tidak termasuk `index.mdx`) | **23** | Cocok dengan hasil aktual `script.sh` yang sudah dijalankan dan diverifikasi (`touch` dijalankan 23 kali, termasuk `index.mdx`). |
| Jumlah folder | Tidak disebutkan | 7 folder | **6 folder** | `legal/` sudah dihapus dari struktur sesuai keputusan sebelumnya — lihat `STRUKTUR-DOKUMENTASI-FINAL.md`. Draft E2E menyebut 7 kemungkinan belum ter-update. |
| `blocks.mdx`, `discounts.mdx`, `promos.mdx` | — | Muncul dobel: di tabel "Fully Match" **dan** tabel "Partial Match" | Muncul **1x saja** di tabel E2E Verification | Duplikat dibersihkan — ketiganya memang match penuh dengan codebase, tidak ada alasan dipisah ke tabel "partial". |
| `index.mdx` di E2E check | Tidak dicek | Tidak disebut di tabel manapun | Ditambahkan sebagai baris pertama tabel E2E | Ditambahkan supaya cakupan E2E benar-benar mewakili semua 23 halaman, bukan 22. |

---

**Versi:** 1.0 (konsolidasi final) &nbsp;|&nbsp; **Disusun:** September 2026
