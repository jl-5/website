import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './AboutMe.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HobbyCard from '../components/HobbyCard'
import SocialLink from '../components/SocialLink'

const SOCIALS = [
  { icon: 'fa-envelope',       href: 'mailto:justinlong5000@gmail.com',          label: 'justinlong5000@gmail.com', external: false },
  { icon: 'brands fa-github',  href: 'https://github.com/jl-5',                  prefix: 'github.com/',    label: 'jl-5' },
  { icon: 'brands fa-instagram', href: 'https://www.instagram.com/justin._.long', prefix: 'instagram.com/', label: 'justin._.long' },
  { icon: 'brands fa-linkedin', href: 'https://www.linkedin.com/in/justinlong5000/', prefix: 'linkedin.com/', label: 'justinlong5000' },
  { icon: 'brands fa-soundcloud', href: 'https://soundcloud.com/heal-pool',      prefix: 'soundcloud.com/', label: 'heal-pool' },
]

const HOBBIES = [
  {
    image: '/images/runner.JPG',
    alt: 'me running a marathon',
    imagePosition: '50% 30%',
    title: 'Marathon Runner',
    description: "I spend lots of my free time running away from my problems. Here's me during my first ever marathon, the 2024 Orange County Marathon.",
    linkHref: 'https://www.strava.com/athletes/69122020',
    linkText: 'Check out my Strava',
    first: true,
  },
  {
    image: '/images/DJ.jpeg',
    alt: 'me DJing a party',
    imagePosition: '50% 80%',
    title: 'DJ and Music Producer',
    description: "I'll spin up a virtual machine while I spin some records. Here's me DJing a party with some buddies.",
    linkHref: 'https://soundcloud.com/heal-pool',
    linkText: 'Listen to my tunes',
  },
  {
    image: '/images/volunteer.png',
    alt: 'me volunteering',
    imagePosition: '50% 10%',
    title: 'Volunteer',
    description: "Here's me hauling some onions at africActive, a local non-profit food distribution organization. I've also helped create their website.",
    linkHref: 'https://www.africactive.org/',
    linkText: 'Check out africActive',
  },
]

export default function AboutMe() {
  const { hash } = useLocation()

  // Scroll to section when navigating via hash (e.g. /about#contact)
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container" id="main">
          <article id="content">
            <header>
              <h2>About Me</h2>
              <p>Full-stack developer, musician, game developer, linguist, explorer.</p>
            </header>
            <div className="about-hero">
              <img src="/images/mountains.JPG" alt="Justin Long in the mountains" />
              <div>
                <p>
                  I'm a passionate creator with professional experience in research and development
                  throughout the tech stack. My personal and professional goals align in creating
                  meaningful, accessible technology that makes the world a better place.
                </p>
                <p>
                  My skills include full-stack development (building interactive frontends, hooking up
                  backend tools, and everything in between), game development (Unity, Unreal Engine, and
                  Roblox Studio), and creative design (audio-visual asset production, user experience
                  mapping, and product ideation). Read more about my specific skills and experience on
                  my <Link to="/resume">resume</Link>.
                </p>
                <p>
                  Beyond coding, I enjoy long-distance running, producing electronic music, and
                  volunteering at local non-profits. Learn more about my hobbies and interests below!
                </p>
              </div>
            </div>
          </article>

          <div className="row features">
            {HOBBIES.map((hobby) => (
              <HobbyCard key={hobby.title} {...hobby} />
            ))}
          </div>
        </div>
      </div>

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
                  {SOCIALS.slice(0, 3).map((s) => <SocialLink key={s.label} {...s} />)}
                </ul>
                <ul className="divided icons col-6 col-12-mobile">
                  {SOCIALS.slice(3).map((s) => <SocialLink key={s.label} {...s} />)}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Footer>
    </>
  )
}
