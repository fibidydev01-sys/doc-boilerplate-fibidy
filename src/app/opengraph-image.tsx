import { ImageResponse } from 'next/og'

// ============================================================
// DEFAULT OPEN GRAPH IMAGE
// Used for social sharing previews
// ============================================================

export const runtime = 'edge'
export const alt = 'Next.js + Supabase Boilerplate Documentation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
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
            color: '#1fd9a0',
            letterSpacing: -2,
          }}
        >
          Boilerplate
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#f0f0f5',
            marginTop: 16,
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          Next.js + Supabase · Production-Ready
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#9ca3af',
            marginTop: 28,
          }}
        >
          Config-driven · Module-based · Open source
        </div>
      </div>
    ),
    { ...size }
  )
}