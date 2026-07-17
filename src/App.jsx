import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Volunteer from './components/Volunteer'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Analytics />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Volunteer />
      </main>
      <Footer />
    </div>
  )
}
