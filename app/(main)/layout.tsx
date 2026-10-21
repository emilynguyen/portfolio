import type { Metadata } from 'next'
import Analytics from '../../components/Analytics'
import { SITE_URL } from '../../lib/metadata'
import '../css/styles.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/images/favicon.png', apple: '/images/webclip.png' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
