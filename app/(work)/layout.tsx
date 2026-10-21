import Analytics from '../../components/Analytics'
import { baseMetadata } from '../../lib/metadata'
import '../css/styles.css'

export const metadata = baseMetadata

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="body--work">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
