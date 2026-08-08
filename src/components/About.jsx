import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-neutral-800/60 scroll-mt-6">
      <SectionHeading eyebrow="About" />

      <div className="space-y-4 max-w-2xl">
        <p className="text-neutral-300 text-base leading-relaxed">
          I'm a Signal Optimization Engineer at{' '}
          <span className="text-neutral-50 font-medium">NoTraffic</span>, a Series C AI
          mobility startup. My job is the hard part of physical AI: taking a control
          algorithm that works in a model and making it survive contact with real
          hardware, real agencies, and real streets.
        </p>
        <p className="text-neutral-400 leading-relaxed">
          That means running stakeholder workshops to turn operational complaints into
          measurable objectives, building SUMO microsimulation models to de-risk
          adoption before anything touches the field, tuning the optimization algorithm
          at the control unit, and delivering the before and after numbers that prove it
          worked. I also work directly with the R&amp;D team on product features,
          enhancements, and algorithm tuning, translating what the field actually needs
          into changes that ship.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <p className="mono-label mb-2">Off the clock</p>
        <p className="text-neutral-400 leading-relaxed">
          Brazilian by birth: born in Curitiba, grew up in Rio de Janeiro, moved to
          America at seven and was raised in Maine, without a word of English at first.
          Atlanta has been home since 2012. I'm a maker at heart: I like hardware
          projects and there's usually a microcontroller and a soldering iron on my desk.
          Outside of that I run, play soccer and chess, sketch, and usually have a film
          camera and my Fujifilm X-T50 on me anywhere worth the trip. The overlap between
          creative and analytical thinking is what pulled me into engineering, and it
          still keeps me sharp. Vai Corinthians.
        </p>
      </div>

      <div className="mt-8">
        <p className="mono-label mb-2">Education</p>
        <p className="text-neutral-100 text-sm font-medium">Georgia Institute of Technology</p>
        <p className="text-neutral-400 text-sm">B.S. Civil Engineering</p>
        <p className="text-neutral-500 text-xs font-mono mt-1">2018 – 2021</p>
      </div>
    </section>
  )
}
