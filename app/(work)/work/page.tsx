import { pageMetadata } from '../../../lib/metadata'
import Footer from '../../../components/Footer'
import WorkHeader from '../../../components/WorkHeader'
import DesignProject from '../../../components/DesignProject'
import { workProjects } from '../../../data/work'

export const metadata = pageMetadata({
  title: 'Emily Nguyen — Work',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      <WorkHeader title="Work" current="work" />
      <section className="section section--dev-work">
        <div className="w-layout-blockcontainer page-container w-container reveal">
          <div className="design_project_container">
            {workProjects.map((project, i) => (
              <DesignProject key={i} priority={i === 0} {...project} />
            ))}
            <h2>Contact me for more work samples. :)</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
