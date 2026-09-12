# 🗂️ Struktur Dokumentasi Final — Fibidy

**Target:** `content/docs/` di project Fibidy (Fumadocs/Docusaurus-style)
**Audiens:** Owner/Seller UMKM (bukan developer)
**Gaya penulisan konten:** Lemon Squeezy seller-facing docs — jelas, to-the-point, tanpa jargon teknis

> Dokumen ini adalah peta acuan untuk `script.sh`. Semua file `.mdx` dibuat **kosong** (struktur dulu, konten belakangan). Semua `meta.json` **terisi** karena itu bagian dari struktur navigasi, bukan konten.

---

## Daftar Isi

- [Struktur Folder Final](#struktur-folder-final)
- [Rename Map — Lama → Baru](#rename-map--lama--baru)
- [Isi meta.json per Folder](#isi-metajson-per-folder)
- [Panduan Gaya Penulisan (ala Lemon Squeezy)](#-panduan-gaya-penulisan-ala-lemon-squeezy)
- [Cara Pakai script.sh](#cara-pakai-scriptsh)

---
---

## Struktur Folder Final

```
content/
└── docs/
    ├── meta.json                         ← Daftar isi utama
    ├── index.mdx                         ← Halaman pembuka
    │
    ├── getting-started/
    │   ├── meta.json
    │   ├── introduction.mdx              ← Pengantar Fibidy
    │   ├── quick-start.mdx               ← Daftar & buat toko
    │   └── what-is-fibidy.mdx            ← Apa itu Fibidy
    │
    ├── features/
    │   ├── meta.json
    │   ├── overview.mdx                  ← Semua fitur
    │   ├── store-setup.mdx               ← Setup toko 5 langkah
    │   ├── products.mdx                  ← Manajemen produk
    │   ├── cashier.mdx                   ← Kasir (Point of Sale)
    │   ├── board.mdx                     ← Papan kerja (Jasa)
    │   ├── stock.mdx                     ← Manajemen stok
    │   └── reports.mdx                   ← Laporan & analitik
    │
    ├── studio/
    │   ├── meta.json
    │   ├── overview.mdx                  ← Studio / Landing Builder
    │   └── blocks.mdx                    ← 25 variasi block hero
    │
    ├── settings/
    │   ├── meta.json
    │   ├── overview.mdx                  ← Pengaturan toko
    │   ├── hero.mdx                      ← Hero & branding
    │   ├── highlights.mdx                ← Highlights (Unggulan)
    │   ├── contact.mdx                   ← Kontak
    │   ├── social.mdx                    ← Sosial media
    │   ├── discounts.mdx                 ← Diskon preset
    │   └── promos.mdx                    ← Program promo
    │
    ├── subscription/
    │   ├── meta.json
    │   ├── overview.mdx                  ← Paket langganan
    │   └── pricing.mdx                   ← Harga & perbandingan
    │
    └── troubleshooting/
        ├── meta.json
        └── common-issues.mdx             ← Masalah umum & solusi
```

> **`legal/` sengaja tidak ada di struktur ini.** Terms, Privacy, dan Cookies policy ditangani di project terpisah, jadi tidak perlu duplikat di docs Fibidy.

**Total:** 6 folder · 23 file `.mdx` · 7 file `meta.json`

---
---

## Rename Map — Lama → Baru

> Referensi konseptual saja — di `script.sh`, folder lama **dihapus total** lalu struktur baru **dibuat dari nol**, karena semua file lama isinya kosong (tidak ada konten untuk dipindah).

### Folder

| Folder Lama | Folder Baru |
|---|---|
| `setup/` | `getting-started/` |
| `authentication/` | `features/` |
| `commerce/` | `studio/` |
| `configuration/` | `settings/` |
| `deployment/` | `subscription/` |
| *(baru)* | `troubleshooting/` |

### File yang punya padanan konsep di struktur lama

| File Lama | File Baru |
|---|---|
| `setup/introduction.mdx` | `getting-started/introduction.mdx` |
| `setup/tooling.mdx` | `getting-started/quick-start.mdx` |
| `setup/supabase.mdx` | `getting-started/what-is-fibidy.mdx` |
| `authentication/overview.mdx` | `features/overview.mdx` |
| `authentication/email-password.mdx` | `features/store-setup.mdx` |
| `authentication/google-oauth.mdx` | `features/products.mdx` |
| `authentication/magic-link.mdx` | `features/cashier.mdx` |
| `commerce/overview.mdx` | `studio/overview.mdx` |
| `commerce/setup.mdx` | `studio/blocks.mdx` |
| `configuration/overview.mdx` | `settings/overview.mdx` |
| `configuration/app-config.mdx` | `settings/hero.mdx` |
| `configuration/branding.mdx` | `settings/highlights.mdx` |
| `configuration/permissions.mdx` | `settings/contact.mdx` |
| `deployment/vercel.mdx` | `subscription/overview.mdx` |
| `deployment/checklist.mdx` | `subscription/pricing.mdx` |
| `troubleshooting.mdx` (root) | `troubleshooting/common-issues.mdx` |

### File baru tanpa padanan lama (fitur Fibidy yang tidak ada di boilerplate)

`features/board.mdx` · `features/stock.mdx` · `features/reports.mdx` · `settings/social.mdx` · `settings/discounts.mdx` · `settings/promos.mdx`

### Folder & file lama yang dihapus total (boilerplate developer-facing, tidak relevan untuk seller UMKM)

`analytics/` · `architecture/` · `commerce/checkout.mdx` (dkk, bagian dev commerce lama) · `database/` · `email/` · `push-notification/` · `working-with-the-codebase/` · `activity-logging.mdx` · `environment-variables.mdx` · `internationalization.mdx` · `monitoring.mdx` · `tech-stack.mdx` · `setup/project.mdx` · `setup/resend.mdx` · `deployment/self-hosted.mdx`

### Folder yang dihapus karena ditangani project terpisah

`legal/` (`terms.mdx`, `privacy.mdx`, `cookies.mdx`) — Terms of Service, Privacy Policy, dan Cookie Policy dikelola di project lain, bukan di docs Fibidy ini.

---
---

## Isi meta.json per Folder

### `content/docs/meta.json`

```json
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
```

### `getting-started/meta.json`

```json
{
  "title": "Mulai",
  "pages": [
    "introduction",
    "quick-start",
    "what-is-fibidy"
  ]
}
```

### `features/meta.json`

```json
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
```

### `studio/meta.json`

```json
{
  "title": "Studio",
  "pages": [
    "overview",
    "blocks"
  ]
}
```

### `settings/meta.json`

```json
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
```

### `subscription/meta.json`

```json
{
  "title": "Langganan",
  "pages": [
    "overview",
    "pricing"
  ]
}
```

### `troubleshooting/meta.json`

```json
{
  "title": "Troubleshooting",
  "pages": [
    "common-issues"
  ]
}
```

---
---

## 🍋 Panduan Gaya Penulisan (ala Lemon Squeezy)

Dipetik dari `Panduan Fitur Lemon Squeezy untuk Seller` sebagai rujukan gaya. Ini yang dipakai nanti waktu ngisi tiap `.mdx`:

| Prinsip | Penerapan |
|---|---|
| **Audiens: seller, bukan developer** | Tidak ada istilah kode/API di badan teks. Bahasa dashboard, bukan bahasa teknis. |
| **To-the-point** | Langsung jawab "gimana caranya", baru penjelasan konteks kalau perlu. Hindari basa-basi pembuka panjang. |
| **Struktur H2/H3 pendek** | Tiap sub-topik = heading sendiri, isi 2–5 kalimat atau list singkat. Tidak ada paragraf panjang tanpa jeda. |
| **Angka & batasan eksplisit** | Selalu sebutkan angka konkret (limit, harga, waktu) — bukan "beberapa" atau "cukup lama". |
| **Peringatan dipisah jelas** | Pakai blockquote `>` atau callout untuk gotcha/catatan penting, dipisah dari alur penjelasan biasa. |
| **Langkah bernomor untuk prosedur** | Setiap "cara melakukan X" ditulis sebagai list bernomor, bukan paragraf naratif. |
| **Tabel untuk perbandingan** | Perbandingan paket, harga, atau kondisi selalu tabel — bukan dijelaskan dalam kalimat. |
| **Disclaimer di tempat yang tepat** | Info yang bisa berubah (harga, kebijakan) dikasih catatan "bisa berubah, cek versi terbaru" — bukan dianggap permanen. |
| **Satu dokumen = satu tujuan** | Tidak mencampur "cara pakai fitur X" dengan "kenapa fitur X penting" dalam satu file — kalau perlu keduanya, pisah section jelas. |

**Contoh translasi gaya** (dari referensi Lemon Squeezy ke konteks Fibidy):

> Lemon Squeezy: *"Minimum payout: $50. Kalau belum mencapai itu, payout berstatus 'Pending' dan digabung ke siklus berikutnya."*
> → Gaya yang sama untuk Fibidy: *"Batas produk paket Free: 20 produk. Kalau sudah mencapai batas, tombol 'Tambah Produk' akan nonaktif sampai kamu upgrade atau hapus produk lama."*

Pola ini konsisten dipakai nanti saat ngisi tiap file `.mdx` yang sekarang masih kosong.

---
---

## Cara Pakai script.sh

Script dijalankan dari root folder `docs/` project (sejajar dengan `content/`, `src/`, `package.json`):

```bash
Fibidy@DESKTOP-44A8LMC MINGW64 /d/PRODUK-LPPM-FINAL/UMKM-MULTI-TENANT/railway/docs (main)
$ bash script.sh
```

**Yang dilakukan script:**

1. Hapus total `content/docs/` lama (kalau ada folder `legal/` dari versi sebelumnya, ikut terhapus juga)
2. Buat ulang 6 folder + `index.mdx` + `meta.json` root
3. Buat 23 file `.mdx` kosong sesuai peta struktur di atas
4. Isi 7 file `meta.json` dengan JSON navigasi yang benar (bukan kosong — ini struktur, bukan konten)
5. Tampilkan tree hasil akhir untuk verifikasi cepat

Script ini **idempotent** — aman dijalankan ulang kapan pun. Setiap run selalu menghasilkan struktur yang sama persis (6 folder, tanpa `legal/`), tidak peduli kondisi folder sebelumnya.

Setelah script selesai, isi tiap `.mdx` dilakukan manual/terpisah mengikuti panduan gaya di atas.

---

**Versi:** 1.0 &nbsp;|&nbsp; **Disusun:** September 2026
