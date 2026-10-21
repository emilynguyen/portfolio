import type { DesignProjectData } from '../components/DesignProject'
import { responsive } from '../lib/images'
import { hereSrcSet, sgfAlt } from './images'

export const miscProjects: DesignProjectData[] = [
  {
    variant: 'right-full',
    title: 'swamp',
    body: (
      <p>
        Currently building a community-driven design studio with{' '}
        <a href="https://ekintumer.com/" target="_blank">
          Ekin Tumer
        </a>
        . Website coming soon.
      </p>
    ),
    button: { label: 'Design system WIP', href: 'https://swampstudio-storybook.vercel.app/' },
    image: {
      src: '/images/swamp-design-studio-website-preview.webp',
      width: 2880,
      height: 1800,
      alt: 'Homepage of swamp, a community-driven design studio, with pixel-art member cards for Ekin Tumer and Emily Nguyen',
      sizes: '100vw',
      srcSet: responsive('7079307edf53a8e44a2069074bea899e_swamp-design-studio-website-preview-p', 'webp', [500, 800, 1080, 1600, 2000, 2600], {
        file: 'swamp-design-studio-website-preview.webp',
        width: 2880,
      }),
    },
  },
  {
    variant: 'right-offset',
    title: 'digital closet',
    body: <p>Documenting my wardrobe one illustration at a time.</p>,
    button: { label: 'Visit site', href: 'https://closet.emilynguyen.co' },
    image: {
      src: '/images/closet.webp',
      width: 4800,
      height: 3020,
      alt: 'RPG-inspired digital closet',
      sizes: '100vw',
      srcSet: responsive('8ff957c3527b7f5e33df52345bb47946_closet-p', 'webp', [500, 800, 1080, 1600, 2000, 2600, 3200], {
        file: 'closet.webp',
        width: 4800,
      }),
    },
  },
  {
    variant: 'left-full',
    title: 'Here*',
    body: (
      <p>
        Currently co-founding <a href="https://itshere.app/">Here*</a>, where I lead technical vision with engineering, own the
        development and content management of the marketing site, and partner with product and design to shape product
        direction.
      </p>
    ),
    button: { label: 'Visit site', href: 'https://itshere.app/' },
    image: {
      src: '/images/here.webp',
      width: 3600,
      height: 2400,
      alt: 'Homepage of the Here* marketing site, "For the spots you love & the places you\'ll go", with city playlist cards for Los Angeles, Austin, and Chicago',
      sizes: '100vw',
      srcSet: hereSrcSet,
    },
  },
  {
    variant: 'right-offset',
    title: 'Sun God Music Festival',
    body: (
      <p>Built the event website for Sun God 2019, headlined by Vince Staples. Design by Eunsoo Lee.</p>
    ),
    image: { src: '/images/sgf.gif', width: 1500, height: 1146, alt: sgfAlt },
  },
]
