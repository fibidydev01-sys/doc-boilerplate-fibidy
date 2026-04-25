/**
 * Cloudinary utility — used by OptimizedImage component
 * Detects whether a src string is a Cloudinary public_id or an external URL
 */

type ImageSourceType = 'cloudinary' | 'external' | 'none'

interface ImageSource {
  type: ImageSourceType
  src: string | null
}

const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? ''

/**
 * Detect image source type:
 * - 'cloudinary' → raw public_id (no http, no slash-start)
 * - 'external'   → full URL (http/https)
 * - 'none'       → empty / null / undefined
 */
export function getImageSource(src: string | undefined | null): ImageSource {
  if (!src || src.trim() === '') {
    return { type: 'none', src: null }
  }

  // Full URL → external
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return { type: 'external', src }
  }

  // data URI → external
  if (src.startsWith('data:')) {
    return { type: 'external', src }
  }

  // Everything else → treat as Cloudinary public_id
  return { type: 'cloudinary', src }
}

/**
 * Build a Cloudinary URL from a public_id (for non-CldImage use cases)
 */
export function buildCloudinaryUrl(
  publicId: string,
  options: {
    width?: number
    height?: number
    crop?: string
    quality?: number | 'auto'
    format?: string
  } = {}
): string {
  if (!CLOUDINARY_CLOUD_NAME) {
    console.warn('[cloudinary] NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set')
    return ''
  }

  const { width, height, crop = 'fill', quality = 'auto', format = 'auto' } =
    options

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    crop && `c_${crop}`,
    width && `w_${width}`,
    height && `h_${height}`,
  ]
    .filter(Boolean)
    .join(',')

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms}/${publicId}`
}

/**
 * Check if a string looks like a Cloudinary public_id
 */
export function isCloudinaryPublicId(src: string): boolean {
  return getImageSource(src).type === 'cloudinary'
}
