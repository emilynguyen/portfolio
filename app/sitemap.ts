import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/metadata'

// Listed pages only. /resume and /binge are redirects; /dev and /styles are noindex.
const PATHS = ['/', '/work', '/misc']

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE_URL}${path}` }))
}
