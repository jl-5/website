import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Resume() {
  return (
    <>
      <Header />
      <style>{`
        .resume-frame {
          width: 100%;
          height: 800px;
          border: none;
        }
        @media (max-width: 736px) {
          .resume-frame { height: 85vh; }
          #main { padding-left: 0; padding-right: 0; }
        }
      `}</style>

      <div className="wrapper">
        <div className="container" id="main">
          <iframe
            src="/images/Justin_Long_Resume.pdf"
            className="resume-frame"
            title="Justin Long Resume"
          />
        </div>
      </div>

      <Footer />
    </>
  )
}
