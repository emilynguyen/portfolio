import Link from 'next/link'

const RESPONSIVE_VARIANT = 'w-variant-26c49298-d272-14ca-64fa-f3091c85ac10'

type Props = {
  href: string
  label: string
  /** "base" is the large home-page icon; "responsive" is the small one in page headers. */
  variant?: 'base' | 'responsive'
  /** The folder for the page you're on: marked current and shown open (no hover swap). */
  current?: boolean
}

export default function DesktopFolderIcon({ href, label, variant = 'base', current = false }: Props) {
  const responsive = variant === 'responsive'
  const classes = ['desktop-icon cc-folder', responsive && RESPONSIVE_VARIANT, 'w-inline-block', current && 'w--current']
  return (
    <Link
      href={href}
      data-wf--desktop-folder--variant={variant}
      {...(current && { 'aria-current': 'page' as const })}
      className={classes.filter(Boolean).join(' ')}
    >
      <div className={['desktop-icon_img-wrapper', responsive && RESPONSIVE_VARIANT].filter(Boolean).join(' ')}>
        <img src="/images/folder_open.svg" loading="lazy" alt="" className="desktop-icon_img" />
        {!current && <img src="/images/folder_closed.svg" loading="lazy" alt="" className="desktop-icon_img--top" />}
      </div>
      <h5 className="desktop-icon_title">{label}</h5>
    </Link>
  )
}
