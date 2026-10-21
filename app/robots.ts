import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/metadata'

// Unlisted pages (/dev, /styles) are kept out of results with a noindex tag, not a Disallow here:
// a blocked page can't be crawled, so crawlers would never see the noindex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
