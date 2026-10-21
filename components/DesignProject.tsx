import type { ReactNode } from 'react'
import type { Img } from '../lib/images'
import Button from './Button'

// Webflow's component variants: each one pairs a data attribute with a generated class.
const VARIANT_CLASS = {
  'right-full': undefined,
  'left-full': 'w-variant-c484bf9e-c6b3-29c2-b4d4-8340ab4b198d',
  'left-offset': 'w-variant-29ea9b10-a472-08ac-4345-b1e3b3e65b81',
  'right-center': 'w-variant-d420ef78-9ede-27b6-bbc2-9535005d2522',
  'right-offset': 'w-variant-b2b642b1-248b-5ce2-d9c2-de065b025344',
} as const

export type DesignProjectVariant = keyof typeof VARIANT_CLASS

export type DesignProjectData = {
  variant: DesignProjectVariant
  title?: string
  /** Rich-text body: paragraphs and inline links. */
  body: ReactNode
  button?: { label: string; href: string }
  image: Img
}

export default function DesignProject({ variant, title, body, button, image }: DesignProjectData) {
  const variantClass = VARIANT_CLASS[variant]
  return (
    <div data-wf--design-project--variant={variant} className={variantClass ? `design-project ${variantClass}` : 'design-project'}>
      <div className="design-project_summary">
        {title && <h3>{title}</h3>}
        <div className="rtb w-richtext">{body}</div>
        {button && (
          <div className="design-project_btn">
            <Button href={button.href} external>
              {button.label}
            </Button>
          </div>
        )}
      </div>
      <img
        src={image.src}
        loading="lazy"
        alt={image.alt}
        sizes={image.sizes}
        srcSet={image.srcSet}
        className="design-project_thumbnail2"
      />
    </div>
  )
}
