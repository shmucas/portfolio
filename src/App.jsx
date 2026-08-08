import Rail from './components/Rail'
import Statement from './components/Statement'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Volunteer from './components/Volunteer'
import Now from './components/Now'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:items-start">
      <Analytics />
      <Rail />

      <div className="min-w-0 px-6 py-12 md:px-12 md:py-16 max-w-4xl">
        <main>
          <Statement />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Volunteer />
          <Now />
        </main>
        <Footer />
      </div>
    </div>
  )
}
