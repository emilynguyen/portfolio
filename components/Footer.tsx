import { contact, experience } from '../data/site'

export default function Footer() {
  return (
    <section className="section">
      <div className="footer_wrapper">
        <div className="footer_left">
          <div className="home_info-wrapper">
            <div className="home_info-col">
              <h4>Prev. experience ↓</h4>
              {experience.map(({ role, dates }) => (
                <div key={role}>
                  <h6>{role}</h6>
                  <p>{dates}</p>
                </div>
              ))}
            </div>
            <div className="home_info-col">
              <h4>Contact ↓</h4>
              {contact.map(({ label, text, href, external }) => (
                <div key={label}>
                  <h6>{label}</h6>
                  <a href={href} {...(external && { target: '_blank' })} className="p-underline">
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer_right">
          <h5>Made with ♡ by Emily</h5>
        </div>
        <div className="w-embed"></div>
      </div>
    </section>
  )
}
