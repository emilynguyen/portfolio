import type { DevProjectData } from '../components/DevProject'
import { responsive } from '../lib/images'
import { hereSrcSet, sgfAlt } from './images'

const thumbnailSizes = '(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 800px'

export const devProjects: DevProjectData[] = [
  {
    title: 'Here*',
    href: 'https://itshere.app/',
    pills: ['React (Next.js)', 'Tailwind', 'Vercel', 'Sanity CMS'],
    github: 'https://github.com/its-here-app/here-marketing-site/',
    image: { src: '/images/here.webp', alt: '', sizes: thumbnailSizes, srcSet: hereSrcSet },
  },
  {
    title: 'Stem + Leaf',
    href: 'https://stem-leaf.webflow.io/',
    pills: ['Webflow', 'JavaScript', 'GSAP'],
    image: {
      src: '/images/stem-leaf.webp',
      alt: 'Stem + Leaf landing page',
      sizes: thumbnailSizes,
      srcSet: responsive('stem-leaf-p', 'webp', [500, 800, 1080], { file: 'stem-leaf.webp', width: 1200 }),
    },
  },
  {
    title: 'Sun God Music Festival',
    href: 'http://sgf.ucsd.edu/2019/',
    pills: ['HTML', 'CSS (SCSS)', 'Jekyll', 'JavaScript (jQuery)'],
    github: 'https://github.com/emilynguyen/sgf19',
    image: { src: '/images/sgf.gif', alt: sgfAlt },
    thumbnailClass: 'sgf',
  },
]
