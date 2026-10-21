import type { Metadata } from 'next'

/** Canonical origin. Used for metadataBase, canonical URLs, og:url, the sitemap and robots.txt. */
export const SITE_URL = 'https://emilynguyen.co'

const SITE_NAME = 'Emily Nguyen'

/** Metadata every page needs: the base URL that relative URLs resolve against, and the icons. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/images/favicon.png', apple: '/images/webclip.png' },
}

/** Default description for every page. Pass `description` to `pageMetadata` to override it. */
export const SITE_DESCRIPTION =
  'Emily is a multidisciplinary designer based in Oakland. She is currently at Carta and was previously at HoneyBook, Webflow, and MongoDB.'

const DEFAULT_OG_IMAGE = '/images/cdn/67aa4aa921df8781c0ed2fcb_e64753288ffaf307a4b5cce8d891dedc_OG.png'

type Options = {
  title: string
  /** Defaults to SITE_DESCRIPTION. */
  description?: string
  /** Path of the page, e.g. `/work`. Becomes the canonical URL and og:url. */
  path: string
  /** Keep the page out of search results (and skip its canonical). */
  noindex?: boolean
}

export function pageMetadata({ title, description = SITE_DESCRIPTION, path, noindex = false }: Options): Metadata {
  return {
    title,
    description,
    ...(noindex ? { robots: { index: false } } : { alternates: { canonical: path } }),
    openGraph: { title, description, url: path, siteName: SITE_NAME, type: 'website', images: [DEFAULT_OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_OG_IMAGE] },
  }
}
