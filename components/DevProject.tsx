import type { Img } from '../lib/images'
import Pill from './Pill'

export type DevProjectData = {
  title: string
  href: string
  /** Tech tags shown as pills. */
  pills: string[]
  github?: string
  image: Img
  /** Extra class applied to both the thumbnail link and image. */
  thumbnailClass?: string
}

export default function DevProject({ title, href, pills, github, image, thumbnailClass }: DevProjectData) {
  const join = (...c: (string | undefined)[]) => c.filter(Boolean).join(' ')
  return (
    <div className="dev-project">
      <div className="dev-project_header">
        <a href={href} target="_blank" className="w-inline-block">
          <h1>{title}</h1>
        </a>
        <div className="dev-project_pills">
          {pills.map((pill) => (
            <Pill key={pill}>{pill}</Pill>
          ))}
          {github && <Pill href={github}>GitHub</Pill>}
        </div>
      </div>
      <a href={href} target="_blank" className={join('dev-project_thumbnail-wrapper', thumbnailClass, 'w-inline-block')}>
        <img
          src={image.src}
          loading="lazy"
          alt={image.alt}
          sizes={image.sizes}
          srcSet={image.srcSet}
          className={join('dev-project-thumbnail', thumbnailClass)}
        />
      </a>
    </div>
  )
}
