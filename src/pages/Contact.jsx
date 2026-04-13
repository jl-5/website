import Header from '../components/Header'
import Footer from '../components/Footer'

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
                <li className="icon fa-envelope">
                  <a href="mailto:justinlong5000@gmail.com">justinlong5000@gmail.com</a>
                </li>
                <li className="icon brands fa-github">
                  <a href="https://github.com/jl-5" target="_blank" rel="noopener noreferrer">
                    <span className="extra">github.com/</span>jl-5
                  </a>
                </li>
              </ul>
              <ul className="divided icons col-6 col-12-mobile">
                <li className="icon brands fa-instagram">
                  <a href="https://www.instagram.com/justin._.long" target="_blank" rel="noopener noreferrer">
                    <span className="extra">instagram.com/</span>justin._.long
                  </a>
                </li>
                <li className="icon brands fa-linkedin">
                  <a href="https://www.linkedin.com/in/justinlong5000/" target="_blank" rel="noopener noreferrer">
                    <span className="extra">linkedin.com/</span>justinlong5000
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Footer>
    </>
  )
}
