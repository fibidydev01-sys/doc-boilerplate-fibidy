/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // ============================================================
  // BASIC CONFIGURATION
  // ============================================================
  // siteUrl reads from env. Fallback to localhost so the build doesn't
  // crash if the env var is missing in dev. WAJIB set NEXT_PUBLIC_APP_URL
  // (or replace the default) to your production domain before
  // `next build` di production.
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

  // ============================================================
  // OUTPUT
  // ============================================================
  generateRobotsTxt: true,
  // Docs site is small (< 100 routes) — single sitemap.xml is fine,
  // no need for sitemap-index.xml.
  generateIndexSitemap: false,
  outDir: 'public',
  sitemapSize: 45000,

  // ============================================================
  // DEFAULTS (override per-route in transform() below)
  // ============================================================
  changefreq: 'weekly',
  priority: 0.6,

  // ============================================================
  // EXCLUDE
  //
  // Only exclude what actually exists on this site and shouldn't be
  // indexed. Removed the dashboard/login/checkout/etc entries from
  // the original Fibidy config — those routes don't exist here.
  // ============================================================
  exclude: [
    // API endpoints
    '/api',
    '/api/*',

    // Next.js OG image generators (not content pages)
    '/opengraph-image',
    '/twitter-image',

    // PWA + service worker assets (not content pages)
    '/manifest.json',
    '/sw.js',

    // Internal Next.js error pages
    '/_not-found',
    '/404',
    '/500',
  ],

  // ============================================================
  // ROBOTS.TXT
  // ============================================================
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },

      // Block aggressive SEO scraper bots — saves bandwidth and
      // blocks competitor intelligence crawlers.
      { userAgent: 'AhrefsBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },
      { userAgent: 'BLEXBot', disallow: '/' },
      { userAgent: 'PetalBot', disallow: '/' },
      { userAgent: 'DataForSeoBot', disallow: '/' },
    ],
    // No additionalSitemaps — there's no /server-sitemap-index.xml
    // generator on this site (that was a Fibidy thing for tenants
    // and dynamic products).
  },

  // ============================================================
  // PER-ROUTE PRIORITY TUNING
  //
  // Site structure:
  //   /                       — landing (highest)
  //   /docs                   — docs index (high)
  //   /docs/setup/*           — setup guides (high)
  //   /docs/architecture/*    — architecture docs (medium-high)
  //   /docs/<other>/*         — everything else (medium)
  // ============================================================
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Tier 1 — Home (landing + canonical entry point)
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    }
    // Tier 2 — Docs root (top-level entry into documentation)
    else if (path === '/docs') {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Tier 3 — Setup & architecture (high-traffic guides)
    else if (
      path.startsWith('/docs/setup/') ||
      path.startsWith('/docs/architecture/')
    ) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Tier 4 — All other docs pages
    else if (path.startsWith('/docs/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};