import { ImageResponse } from 'next/og'

// ============================================================
// DEFAULT TWITTER IMAGE — Fibidy Docs
// Identik dengan OG untuk konsistensi
// Colors: Expo surface-dark (#171717), on-dark (#ffffff), on-dark-soft (#b0b4ba)
// ============================================================

export const runtime = 'edge'
export const alt = 'Fibidy Docs — Platform UMKM Indonesia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#171717',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: 40,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: -2,
          }}
        >
          Fibidy Docs
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#ffffff',
            marginTop: 16,
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          Platform UMKM Indonesia · Tanpa Komisi
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#b0b4ba',
            marginTop: 28,
          }}
        >
          Toko online · Kasir · Stok · Laporan
        </div>
      </div>
    ),
    { ...size }
  )
}