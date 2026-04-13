import { Link } from 'react-router-dom'
import './AboutMe.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HobbyCard from '../components/HobbyCard'

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
      <Footer />
    </>
  )
}
