// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(owner, Section 13): confirm www vs non-www. Recommended www.
// Canonicals + sitemap derive from this single host. Whichever is chosen,
// 301 the other host at the DNS/hosting layer so link equity isn't split.
export default defineConfig({
  site: 'https://www.tbzrentals.com',
  output: 'static',
  // Trailing slashes kept consistent everywhere (Section 2): directory-style URLs.
  trailingSlash: 'always',
  build: {
    // Emit /foo/index.html so URLs end in a slash and match canonicals.
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Only canonical, indexable URLs end up here. We have no thin/utility
      // pages to exclude yet; add a filter here if any noindex pages appear.
      changefreq: 'weekly',
      // lastmod is set by Astro per build; Google uses it when accurate.
    }),
  ],
});
