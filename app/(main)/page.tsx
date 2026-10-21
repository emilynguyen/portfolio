import Link from 'next/link'
import { pageMetadata } from '../../lib/metadata'
import Footer from '../../components/Footer'
import DesktopAppIcon from '../../components/DesktopAppIcon'
import DesktopFolderIcon from '../../components/DesktopFolderIcon'

export const metadata = pageMetadata({
  title: 'Emily Nguyen',
  path: '/',
})

export default function IndexPage() {
  return (
    <>
      <div className="index_wrapper">
        <div className="index_left">
          <div>
            <h1 className="home_header">
              <span className="h1--serif">Emily</span> is a multidisciplinary{' '}
              <Link href="/work" className="h1-underline">
                <span>designer</span>
              </Link>{' '}
              based in Oakland. She is currently @ Carta.
            </h1>
            <h3 className="home_subheader">
              She loves the web, design systems,{' '}
              <a href="https://www.instagram.com/emlypokes/" target="_blank" className="h-link">
                tattooing <span className="h-link_arrow">↗</span>
              </a>
              , cooking, music festivals, and her 2 cats.
            </h3>
          </div>
        </div>
        <div className="index_right">
          <div className="desktop-icon_webflow">
            <DesktopFolderIcon href="/work" label="work" />
          </div>
          <div className="desktop-icon_mongodb">
            <DesktopFolderIcon href="/misc" label="misc" />
          </div>
          <div className="desktop-icon_dribbble">
            <DesktopAppIcon href="https://dribbble.com/emilynguyen" label="dribbble" image="/images/dribbble.svg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
