import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'

const NAV_ITEMS = [
  {
    label: 'Projects',
    to: '/projects',
    className: 'projects-tab',
    children: [
      {
        label: 'Websites',
        to: '/projects#websites',
        children: [
          { label: 'Book Club Website',             href: 'https://run-club-alum-book-club.vercel.app/' },
          { label: 'africActive',                   href: 'https://www.africactive.org/' },
          { label: 'Regular Show Quote of the Day', href: 'https://regular-show-qotd.vercel.app/' },
          { label: 'Where To Watch NBA',             href: 'https://where-to-watch-nba.vercel.app/' },
          { label: 'DocSearchBuddy',                 href: 'https://jl-5.github.io/DocSearch-Buddy/' },
        ],
      },
      {
        label: 'Games',
        to: '/projects#games',
        children: [
          { label: 'Spin Doctor',   href: 'https://udonknight.itch.io/spin-doctor' },
          { label: 'MINTGAME 2',   href: 'https://justinlong5000.itch.io/mintgame-2' },
          { label: 'SONOdream',    href: 'https://justinlong5000.itch.io/sonodream' },
          { label: 'LiminoVator', href: 'https://justinlong5000.itch.io/liminovator' },
          { label: 'Get Blocked',  href: 'https://justinlong5000.itch.io/get-blocked' },
          { label: 'PizzaVR',      href: 'https://youtu.be/voZhh7c6FPY' },
        ],
      },
      {
        label: 'Music',
        to: '/projects#music',
        children: [
          { label: 'Latest release: dropdead (healpool remix)',   href: 'https://soundcloud.com/heal-pool/drop-dead-healpool-remix?si=9d6e16e7513b4ebd996059e985bacc26&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
          { label: 'Marble Warble Soundtrack',    href: 'https://soundcloud.com/heal-pool/sets/marble-warble-ost-a-game-by' },
          { label: 'Spin Doctor (produced OST)',    href: 'https://udonknight.itch.io/spin-doctor' },
          { label: 'SONOdream (produced OST/SFX)',    href: 'https://justinlong5000.itch.io/sonodream' },
          { label: 'SoundCloud',    href: 'https://soundcloud.com/heal-pool' },
        ],
      },
      {
        label: 'Art',
        to: '/projects#art',
        children: [
          { label: 'Stay Grounded', href: 'https://www.youtube.com/watch?v=cIRe-zFGWRo' },
          { label: 'healpool Music', href: 'https://soundcloud.com/heal-pool' },
        ],
      },
    ],
  },
  { label: 'Resume',   to: '/resume' },
  { label: 'About Me', to: '/about', className: 'break' },
  { label: 'Contact',  to: '/contact' },
]

export default function Header() {
  const location = useLocation()
  const isHome     = location.pathname === '/'
  const isProjects = location.pathname === '/projects'

  const [navOpen, setNavOpen] = useState(false)
  const [projectsAnimate, setProjectsAnimate] = useState(false)
  const hasAnimated = useRef(false)

  // Set body class based on current page
  useEffect(() => {
    document.body.className = `${isHome ? 'homepage' : 'no-sidebar'} is-preload`
    const t = setTimeout(() => document.body.classList.remove('is-preload'), 100)
    return () => clearTimeout(t)
  }, [location.pathname, isHome])

  // Toggle navPanel-visible on body
  useEffect(() => {
    document.body.classList.toggle('navPanel-visible', navOpen)
  }, [navOpen])

  // Close mobile nav on route change
  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  // Projects-tab shine animation (once, suppressed on projects page)
  useEffect(() => {
    if (!isProjects && !hasAnimated.current) {
      const t = setTimeout(() => {
        setProjectsAnimate(true)
        hasAnimated.current = true
      }, 1500)
      return () => clearTimeout(t)
    }
    if (isProjects) setProjectsAnimate(false)
  }, [isProjects])

  return (
    <>
      <div id="header-wrapper">
        <div id="header" className="container">
          <h1 id="logo"><Link to="/">jl-5</Link></h1>
          <nav id="nav">
            <ul>
              {NAV_ITEMS.map((item) => {
                const classes = [
                  item.className,
                  item.className === 'projects-tab' && projectsAnimate ? 'projects-animate' : '',
                ].filter(Boolean).join(' ')
                return (
                  <li key={item.to} className={classes || undefined}>
                    <Link to={item.to}>{item.label}</Link>
                    {item.children && (
                      <ul className="dropotron level-0 center">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            {child.to
                              ? <Link to={child.to}>{child.label}</Link>
                              : <a href={child.href} target="_blank" rel="noopener noreferrer">{child.label}</a>
                            }
                            {child.children && (
                              <ul className="dropotron">
                                {child.children.map((sub) => (
                                  <li key={sub.label}>
                                    <a href={sub.href} target="_blank" rel="noopener noreferrer">{sub.label}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {isHome && (
          <section id="hero" className="container">
            <header>
              <h2>
                Hello! This is <strong>Justin Long</strong>.
                <br />
                (also known as <a href="https://github.com/jl-5" target="_blank" rel="noopener noreferrer"><strong>jl-5</strong></a>)
              </h2>
            </header>
            <p>
              Nice to meet you! Check out my work using the tabs
              <br />
              above, and let's <Link to="/contact">get in touch</Link> if you like what you see.
            </p>
            <ul className="actions">
              <li><Link to="/about" className="button">You're Just_in Time!</Link></li>
            </ul>
          </section>
        )}
      </div>

      {/* Mobile nav — portalled to body so CSS transforms work correctly */}
      {createPortal(
        <>
          <div id="navButton">
            <a className="toggle" onClick={() => setNavOpen((o) => !o)} />
          </div>
          <div id="navPanel">
            <nav>
              <Link to="/" className="link depth-0" onClick={() => setNavOpen(false)}>Home</Link>
              <Link to="/projects" className="link depth-0" onClick={() => setNavOpen(false)}>Projects</Link>
              <a href="https://run-club-alum-book-club.vercel.app/" className="link indent-1" target="_blank" rel="noopener noreferrer">Book Club Website</a>
              <a href="https://www.africactive.org/" className="link indent-1" target="_blank" rel="noopener noreferrer">africActive</a>
              <a href="https://regular-show-qotd.vercel.app/" className="link indent-1" target="_blank" rel="noopener noreferrer">Regular Show QOTD</a>
              <a href="https://where-to-watch-nba.vercel.app/" className="link indent-1" target="_blank" rel="noopener noreferrer">Where To Watch NBA</a>
              <a href="https://jl-5.github.io/DocSearch-Buddy/" className="link indent-1" target="_blank" rel="noopener noreferrer">DocSearchBuddy</a>
              <Link to="/projects#games" className="link indent-1" onClick={() => setNavOpen(false)}>Games</Link>
              <a href="https://justinlong5000.itch.io/mintgame-2" className="link indent-2" target="_blank" rel="noopener noreferrer">MINTGAME 2</a>
              <a href="https://justinlong5000.itch.io/sonodream" className="link indent-2" target="_blank" rel="noopener noreferrer">SONOdream</a>
              <a href="https://justinlong5000.itch.io/liminovator" className="link indent-2" target="_blank" rel="noopener noreferrer">LiminoVator</a>
              <a href="https://justinlong5000.itch.io/get-blocked" className="link indent-2" target="_blank" rel="noopener noreferrer">Get Blocked</a>
              <a href="https://youtu.be/voZhh7c6FPY" className="link indent-2" target="_blank" rel="noopener noreferrer">PizzaVR</a>
              <Link to="/projects#art" className="link indent-1" onClick={() => setNavOpen(false)}>Art</Link>
              <a href="https://www.youtube.com/watch?v=cIRe-zFGWRo" className="link indent-2" target="_blank" rel="noopener noreferrer">Stay Grounded</a>
              <a href="https://soundcloud.com/heal-pool" className="link indent-2" target="_blank" rel="noopener noreferrer">healpool Music</a>
              <Link to="/resume" className="link depth-0" onClick={() => setNavOpen(false)}>Resume</Link>
              <Link to="/about" className="link depth-0" onClick={() => setNavOpen(false)}>About Me</Link>
              <Link to="/contact" className="link depth-0" onClick={() => setNavOpen(false)}>Contact</Link>
            </nav>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
