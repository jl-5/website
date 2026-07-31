import { useEffect } from 'react'
import '../pages/Projects.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import tracks from '../data/music.json'

export default function Music() {
  // Card fade-in on scroll
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container" id="main">
          <article id="content">
            <header>
              <h2>Music</h2>
              <p>
                Original electronic music and video game soundtracks, produced under the healpool alias.
              </p>
            </header>

            <div className="project-grid">
              {tracks.map((track) => (
                <ProjectCard key={track.title} project={track} />
              ))}
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}
