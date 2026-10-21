type Props = {
  href: string
  label: string
  /** Path to the app's icon image, e.g. `/images/dribbble.svg`. */
  image: string
}

/** A desktop icon for an external app or site. Opens in a new tab. */
export default function DesktopAppIcon({ href, label, image }: Props) {
  return (
    <a href={href} target="_blank" className="desktop-icon w-inline-block">
      <div className="desktop-icon_img-wrapper">
        <img loading="lazy" src={image} alt="" className="desktop-icon_img" />
      </div>
      <h5 className="desktop-icon_title">{label}</h5>
    </a>
  )
}
