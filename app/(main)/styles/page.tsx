import { pageMetadata } from '../../../lib/metadata'
import Button from '../../../components/Button'
import Pill from '../../../components/Pill'

export const metadata = pageMetadata({
  title: 'Styles',
  description: 'Style guide for emilynguyen.co.',
  path: '/styles',
  // Internal style guide: keep it out of search results.
  noindex: true,
})

export default function StylesPage() {
  return (
    <>
<div className="w-layout-blockcontainer page-container w-container">
    <Button href="#">Button Text</Button>
  </div>
  <div className="w-layout-blockcontainer page-container w-container">
    <h1>Heading 1</h1>
    <h1 className="h1--serif">Heading 1 (Serif)</h1>
    <h1>Heading 1 <a href="#" className="h1-underline">link</a>
    </h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <Pill>Lorem ipsum</Pill>
    <Pill href="https://github.com/emilynguyen/">GitHub</Pill>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, <a href="#" className="p-underline">eros dolor interdum nulla</a>, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, <a href="#" className="p-underline">eros dolor interdum nulla</a>, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    <p className="u-word-break-all">word break allwafdwlfjwlsdfwlfwslfls</p>
    <p className="eyebrow">Eyebrow</p>
    <div className="rtb w-richtext">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <blockquote>Block quote</blockquote>
      <p>Ordered list</p>
      <ol role="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
      <p>Unordered list</p>
      <ul role="list">
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
      </ul>
      <p>
        <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">Text link</a>
      </p>
      <p><strong>Bold text</strong></p>
      <p><em>Emphasis</em></p>
      <p><sup>Superscript</sup></p>
      <p><sub>Subscript</sub></p>
    </div>
  </div>
  <div className="w-embed">
  </div>
    </>
  )
}
