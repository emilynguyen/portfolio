import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  /** Open in a new tab. */
  external?: boolean
}

export default function Button({ href, children, external = false }: Props) {
  return (
    <a href={href} {...(external && { target: '_blank' })} className="btn w-button rounded-sm hover:rounded-full">
      {children}
    </a>
  )
}
