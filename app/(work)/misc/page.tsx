import { pageMetadata } from '../../../lib/metadata'
import Footer from '../../../components/Footer'
import WorkHeader from '../../../components/WorkHeader'
import DesignProject from '../../../components/DesignProject'
import { miscProjects } from '../../../data/misc'

export const metadata = pageMetadata({
  title: 'Emily Nguyen — Misc',
  path: '/misc',
})

export default function MiscPage() {
  return (
    <>
      <WorkHeader title="Misc." current="misc" />
      <section className="section section--dev-work">
        <div className="w-layout-blockcontainer page-container w-container reveal">
          <div className="design_project_container">
            {miscProjects.map((project, i) => (
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
