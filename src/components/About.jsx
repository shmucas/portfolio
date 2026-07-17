import SectionHeading from './SectionHeading'

const stats = [
  { value: '5+', label: 'Years in traffic engineering' },
  { value: '72+', label: 'Signalized intersections managed' },
  { value: '25%', label: 'Corridor delay reduction (West Allis)' },
  { value: '12h→1h', label: 'ESG reporting cycle, automated with AI agents' },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="About" title="Deployment engineer for AI in the physical world." />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-4">
            <p className="text-neutral-300 text-lg leading-relaxed">
              I'm a Signal Optimization Engineer at{' '}
              <span className="text-neutral-100 font-medium">NoTraffic</span>, a Series C AI
              mobility startup. I take our adaptive signal control from simulation to live
              traffic and own every step in between.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Day to day that means running stakeholder workshops to turn operational pain
              points into measurable objectives, building SUMO microsimulation models to
              de-risk agency adoption before field deployment, configuring the optimization
              algorithm at the control unit, and delivering validated before/after
              performance reports. I manage 72+ signalized intersections across Phoenix,
              Topeka, Missouri City, West Allis, Naples, and Montreal, and I'm the primary
              bridge between R&D in Israel and US field operations.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Before NoTraffic I was at <span className="text-neutral-200 font-medium">Q-Free ASA</span>,
              where I led product evaluation, user acceptance testing, and technical
              deployments for statewide traffic management platforms at Georgia DOT and
              North Carolina DOT. Earlier work at{' '}
              <span className="text-neutral-200 font-medium">Kimley-Horn</span> and{' '}
              <span className="text-neutral-200 font-medium">HNTB</span> covered traffic
              impact studies, ITS design, and signal design.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I also build the internal tooling my team runs on: file parsers, validation
              engines, policy generators, and AI agent workflows that automate reporting.
              Mostly Python, with PostgreSQL, Linux, and Azure.
            </p>

            <div className="pt-4">
              <p className="mono-label mb-3">Off the clock</p>
              <p className="text-neutral-400 leading-relaxed">
                Brazilian by birth, raised in Maine, home in Atlanta since 2012. I'm a maker
                at heart: I like hardware projects and there's usually a microcontroller and
                a soldering iron on my desk. Outside of that I run, play soccer and chess,
                sketch, and take my camera anywhere worth the trip. The overlap between
                creative and analytical thinking is what pulled me into engineering, and it
                still keeps me sharp.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-amber-400 font-mono mb-1">{s.value}</div>
                  <div className="text-xs text-neutral-500 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mono-label mb-3">Education</p>
              <p className="text-neutral-200 text-sm font-medium">Georgia Institute of Technology</p>
              <p className="text-neutral-400 text-sm">B.S. Civil Engineering</p>
              <p className="text-neutral-500 text-xs font-mono mt-1">2018 – 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
