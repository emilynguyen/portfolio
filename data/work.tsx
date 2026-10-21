import type { DesignProjectData } from '../components/DesignProject'
import { responsive } from '../lib/images'

// Webflow's rich text used a zero-width joiner paragraph as a spacer between paragraphs.
const Spacer = () => <p>{'‍'}</p>

export const workProjects: DesignProjectData[] = [
  {
    variant: 'right-full',
    title: 'Web design @ Carta',
    body: (
      <>
        <p>
          I recently joined Carta as their first full-time web designer to lead end-to-end design for carta.com and own the web
          execution of their brand refresh.
        </p>
        <Spacer />
        <p>
          Some of my favorite launches so far:{' '}
          <a href="https://carta.com/ai/connector/" target="_blank">
            Claude plugins for Carta,
          </a>{' '}
          <a href="https://carta.com/plans/equity-management/" target="_blank">
            pricing,
          </a>{' '}
          and our navigation and footer revamp.
        </p>
      </>
    ),
    image: {
      src: '/images/carta.webp',
      alt: 'Carta.com designs including the navigation menu, footer, pricing page, and the Claude plugins for private capital page',
      sizes: '100vw',
      srcSet: responsive('a736d6b07bd46ac4500c0c9bd0cfc130_carta-p', 'webp', [500, 800, 1080, 1600, 2000], {
        file: 'carta.webp',
        width: 2396,
      }),
    },
  },
  {
    variant: 'left-full',
    title: 'Website redesign @ HoneyBook',
    body: (
      <>
        <p>
          Led design for the refresh of HoneyBook’s marketing site following a major rebrand, an initiative focused on improving
          structure, brand messaging, and product comprehension.
        </p>
        <Spacer />
        <p>
          This involved collaborating with the design agency Study Hall on concept development, designing and producing visual
          assets for 40+ pages, and working with cross-functional and external partners on strategy, content, and Webflow
          development.
          <br />
          <br />2 months post-launch, the site saw an 18% lift in page engagement and positive trends in trial conversions.
        </p>
      </>
    ),
    image: { src: '/images/hb-design.gif', alt: "Page designs from HoneyBook's new website" },
  },
  {
    variant: 'left-offset',
    body: (
      <>
        <p>
          In addition to designing pages, I built a Figma web component library to support the redesign and ensure consistency and
          scalability. The library includes 1600+ assets, ranging from foundational atomic elements to complex block-level
          layouts.
          <br />
        </p>
        <Spacer />
        <p>
          I worked closely with our development partners to align this with our Webflow component library, enabling us to build
          pages quickly and reliably.
        </p>
      </>
    ),
    image: {
      src: '/images/hb-library.gif',
      alt: 'Preview of the styles and components included in the HoneyBook web component library ',
    },
  },
  {
    variant: 'right-full',
    title: 'Brand systems @ Webflow',
    body: (
      <p>
        Following our brand refresh in 2023, I worked on various projects that extended our brand and drove consistency. This
        included creating an ad template library, a style guide for feature launch assets, social templates, and data
        visualization styles.
      </p>
    ),
    image: { src: '/images/webflow.gif', alt: 'Data visualizations, ad templates, and social templates for Webflow' },
  },
  {
    variant: 'right-center',
    title: 'Web @ Webflow',
    body: (
      <p>
        Redesigned the careers, DEI, and customer stories pages to deliver an updated brand experience, improve usability, and
        align with evolving business objectives.
      </p>
    ),
    image: { src: '/images/webflow-web.gif', alt: "Web designs for Webflow's careers, DEI, and customer stories pages" },
  },
  {
    variant: 'right-offset',
    title: 'Brand systems @ MongoDB',
    body: (
      <p>
        After working with Huge on a brand refresh that rolled out late 2021, I developed and owned several design systems and
        libraries that streamlined my team's workflow and scaled production. This included an ad template library and an atomic
        icon design system.
      </p>
    ),
    image: {
      src: '/images/ad-library.gif',
      alt: 'Figma library of MongoDB ad templates organized by campaign, including banner and skyscraper sizes',
    },
  },
  {
    variant: 'left-offset',
    title: 'Illustration @ MongoDB',
    body: (
      <p>
        Collaborated with our illustration team to add to our library and create illustrations for web, social, print,
        presentations, and more.
      </p>
    ),
    image: {
      src: '/images/mongodb_illustration.png',
      alt: 'MongoDB illustrations',
      sizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px',
      srcSet: responsive('43ce43d8ddc8486b8f4872caa67b58a6_mongodb_illustration-p', 'png', [500, 800, 1080, 1600, 2000, 2600, 3200], {
        file: 'mongodb_illustration.png',
        width: 5682,
      }),
    },
  },
]
