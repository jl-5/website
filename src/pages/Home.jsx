import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div id="promo-wrapper">
        <section id="promo">
          <h2>Check out my latest project here!</h2>
          <a href="https://run-club-alum-book-club.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">
            Press Me
          </a>
        </section>
      </div>

      <Footer />
    </>
  )
}
