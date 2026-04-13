import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './Projects.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

// Group projects by category preserving order
const groups = {}
for (const p of projects) {
  if (!groups[p.category]) groups[p.category] = []
  groups[p.category].push(p)
}
const categories = Object.keys(groups)

export default function Projects() {
  const contentRef = useRef(null)
  const { hash } = useLocation()

  // Scroll to section when navigating via hash (e.g. /projects#games)
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

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

  // Sidebar active-section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('.section-heading[id]')
    const links    = document.querySelectorAll('#projects-sidebar a[data-section]')
    if (!sections.length || !links.length) return

    links[0]?.classList.add('active')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'))
            document.querySelector(`#projects-sidebar a[data-section="${entry.target.id}"]`)
              ?.classList.add('active')
          }
        })
      },
      { rootMargin: '-15% 0px -75% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container" id="main">
          <div id="projects-layout">
            <nav id="projects-sidebar">
              <ul>
                {categories.map((cat) => (
                  <li key={cat}>
                    <a href={`#${cat}`} data-section={cat}>
                      <span className={`dot ${cat}`} />
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <article id="projects-content" ref={contentRef}>
              <header>
                <h2>Projects</h2>
                <p>Click a project to check it out. Tell me which is your favorite!</p>
              </header>

              {categories.map((cat) => (
                <div key={cat}>
                  <h3 className="section-heading" id={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </h3>
                  <div className="project-grid">
                    {groups[cat].map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </div>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
