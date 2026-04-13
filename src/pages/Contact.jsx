import Header from '../components/Header'
import Footer from '../components/Footer'
import SocialLink from '../components/SocialLink'

const SOCIALS = [
  { icon: 'fa-envelope',       href: 'mailto:justinlong5000@gmail.com',          label: 'justinlong5000@gmail.com', external: false },
  { icon: 'brands fa-github',  href: 'https://github.com/jl-5',                  prefix: 'github.com/',    label: 'jl-5' },
  { icon: 'brands fa-instagram', href: 'https://www.instagram.com/justin._.long', prefix: 'instagram.com/', label: 'justin._.long' },
  { icon: 'brands fa-linkedin', href: 'https://www.linkedin.com/in/justinlong5000/', prefix: 'linkedin.com/', label: 'justinlong5000' },
]

export default function Contact() {
  return (
    <>
      <Header />
      <Footer>
        <div id="footer" className="container">
          <header className="major">
            <h2>Let's get in touch!</h2>
            <p>Reach out to me via email, or check out any of my other socials below.</p>
          </header>
          <div className="row">
            <section className="col-6 col-12-narrower">
              <div className="row gtr-0" style={{ display: 'flex', justifyContent: 'center' }}>
                <ul className="divided icons col-6 col-12-mobile">
                  {SOCIALS.slice(0, 2).map((s) => <SocialLink key={s.label} {...s} />)}
                </ul>
                <ul className="divided icons col-6 col-12-mobile">
                  {SOCIALS.slice(2).map((s) => <SocialLink key={s.label} {...s} />)}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Footer>
    </>
  )
}
