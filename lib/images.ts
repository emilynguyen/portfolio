export type Img = {
  src: string
  alt: string
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
