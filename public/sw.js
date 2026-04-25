// ============================================================
// SERVICE WORKER — Boilerplate Docs
//
// Strategy:
//   - Network-first for HTML / navigation (always try fresh docs)
//   - Cache-first for branding assets (immutable-ish)
//   - Pass-through for everything else (Next handles caching well)
//
// Push notifications & background sync intentionally omitted —
// not needed for a docs site, and removing them keeps the SW
// lifecycle simple.
//
// CACHE_VERSION should be bumped on every release that ships
// SW-cacheable changes. With Vercel/Next, file content hashes
// already cover JS/CSS — so version bumps here are mainly for
// when you change THIS file or precache list.
// ============================================================

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `docs-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `docs-runtime-${CACHE_VERSION}`;

// Minimal precache — just the shell + favicon variants the
// browser may request before any navigation completes.
const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/branding/favicon.ico',
  '/branding/favicon-32x32.png',
  '/branding/favicon-96x96.png',
  '/branding/favicon-128.png',
  '/branding/favicon-196x196.png',
];

// ============================================================
// INSTALL — precache shell
// ============================================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch((err) => {
        // Don't fail install if a single asset 404s — log and move on
        console.warn('[SW] Precache partial failure:', err);
      })
  );
  self.skipWaiting();
});

// ============================================================
// ACTIVATE — drop old caches
// ============================================================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ============================================================
// FETCH — strategy router
// ============================================================
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET — POST/PUT/etc bypass SW
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip cross-origin (Google Fonts, etc) — let browser handle
  if (url.origin !== self.location.origin) return;

  // Skip Next internals & search API — they have their own
  // cache-control semantics that we shouldn't fight.
  if (
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/api/')
  ) {
    return;
  }

  // Branding assets — cache-first (rarely change)
  if (url.pathname.startsWith('/branding/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // HTML / navigation — network-first (docs change, freshness matters)
  if (
    request.mode === 'navigate' ||
    request.headers.get('accept')?.includes('text/html')
  ) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Other GET (images, etc) — network-first with cache fallback
  event.respondWith(networkFirst(request));
});

// ============================================================
// STRATEGIES
// ============================================================
async function networkFirst(request) {
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    // Last-resort offline fallback for navigations: serve cached "/"
    if (request.mode === 'navigate') {
      const home = await caches.match('/');
      if (home) return home;
    }

    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch {
    return new Response('', { status: 504, statusText: 'Gateway Timeout' });
  }
}

// ============================================================
// MESSAGE — let pages trigger skipWaiting on update
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});