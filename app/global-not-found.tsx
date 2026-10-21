import Link from 'next/link'
import Analytics from '../components/Analytics'
import Footer from '../components/Footer'
import { baseMetadata } from '../lib/metadata'
import './css/styles.css'

export const metadata = {
  ...baseMetadata,
  title: 'Page not found',
  robots: { index: false },
}

// Rendered for any URL that doesn't match a page. Supplies its own <html>/<body> because the site has no
// single root layout (see `experimental.globalNotFound` in next.config.mjs).
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <section className="section section--dev-work">
          <div className="w-layout-blockcontainer page-container w-container">
            <div className="breadcrumbs">
              <Link href="/" className="link--fade w-inline-block">
                <h4>← index</h4>
              </Link>
            </div>
            <h1 className="h1--serif work-header">Page not found</h1>
          </div>
        </section>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
