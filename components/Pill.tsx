import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** When set, the pill becomes an outlined link (opens in a new tab) with a ↗ arrow. */
  href?: string
}

export default function Pill({ children, href }: Props) {
  if (href) {
    return (
      <a href={href} target="_blank" className="pill pill--link w-inline-block">
        <h5>{children}</h5>
        <h5 className="pill_arrow">↗</h5>
      </a>
    )
  }
  return (
    <div className="pill">
      <h5 className="pill_text">{children}</h5>
    </div>
  )
}
