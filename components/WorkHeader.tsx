import Link from 'next/link'
import DesktopFolderIcon from './DesktopFolderIcon'

type Props = {
  title: string
  /** Which folder to mark as the current page. "dev" has no folder of its own. */
  current: 'work' | 'misc' | 'dev'
}

export default function WorkHeader({ title, current }: Props) {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer page-container w-container">
        <div className="work_header">
          <div className="breadcrumbs">
            <Link href="/" className="link--fade w-inline-block">
              <h4>← index</h4>
            </Link>
          </div>
          <div className="work_header_folders">
            <DesktopFolderIcon href="/work" label="work" variant="responsive" current={current === 'work'} />
            <DesktopFolderIcon href="/misc" label="misc" variant="responsive" current={current === 'misc'} />
          </div>
        </div>
        <div className="work_title">
          <h1 className="h1--serif work-header">{title}</h1>
        </div>
      </div>
    </section>
  )
}
