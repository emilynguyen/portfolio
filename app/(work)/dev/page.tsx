import { pageMetadata } from '../../../lib/metadata'
import Footer from '../../../components/Footer'
import WorkHeader from '../../../components/WorkHeader'
import DevProject from '../../../components/DevProject'
import { devProjects } from '../../../data/dev'

export const metadata = pageMetadata({
  title: 'Emily Nguyen — Dev',
  path: '/dev',
  // Unlisted page: keep it out of search results.
  noindex: true,
})

export default function DevPage() {
  return (
    <>
      <WorkHeader title="Dev" current="dev" />
      <section className="section section--dev-work">
        <div className="w-layout-blockcontainer page-container w-container reveal">
          <div className="divider"></div>
          <div className="divider"></div>
          {devProjects.map((project) => (
            <div key={project.title}>
              <DevProject {...project} />
              <div className="divider"></div>
            </div>
          ))}
          <div className="w-embed w-script"></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
