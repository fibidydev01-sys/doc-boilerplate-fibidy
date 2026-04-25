'use client'

import { useEffect, useState } from 'react'

/**
 * useMediaQuery — reactive CSS media query hook
 * Used by SidebarProvider to detect mobile breakpoint
 *
 * @param query - CSS media query string e.g. "(max-width: 767px)"
 * @returns boolean — true if the query matches
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 767px)")
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    // SSR guard — window is not available on server
    if (typeof window === 'undefined') return

    const mediaQueryList = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQueryList.matches)

    // Update on change
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern API
    mediaQueryList.addEventListener('change', listener)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}
