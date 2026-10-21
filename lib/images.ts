export type Img = {
  src: string
  alt: string
  /** Intrinsic pixel size of the source image. Lets the browser reserve space before it loads (no layout jump). */
  width?: number
  height?: number
  sizes?: string
  srcSet?: string
}

/**
 * Build a srcSet for Webflow's responsive image export, which names the
 * resized copies `<prefix>-<width>.<ext>` next to the original file.
 */
export function responsive(prefix: string, ext: string, widths: number[], full: { file: string; width: number }) {
  return [
    ...widths.map((w) => `/images/${prefix}-${w}.${ext} ${w}w`),
    `/images/${full.file} ${full.width}w`,
  ].join(', ')
}
