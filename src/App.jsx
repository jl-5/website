import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Music from './pages/Music'

export default function App() {
  return (
    <BrowserRouter>
      <div id="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/music" element={<Music />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Navigate to="/about#footer" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
