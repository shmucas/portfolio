import { useScrollFade } from '../hooks/useScrollFade'

const stats = [
  { value: '5+', label: 'Years in Traffic Engineering' },
  { value: '60+', label: 'Intersections Managed' },
  { value: '30%', label: 'Delay Reduction Achieved' },
  { value: 'GT', label: 'Georgia Tech, B.S. Civil Eng.' },
]

export default function About() {
  const ref = useScrollFade()

  return (
    <section id="about" className="py-24 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <p className="mono-label mb-8">About</p>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Civil engineer turned signal optimization engineer, working at the intersection of
                transportation infrastructure and software for over five years.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently a <span className="text-slate-200 font-medium">Signal Optimization Engineer at NoTraffic</span>,
                where I lead deployment of adaptive signal control algorithms across major
                municipalities — Phoenix, Topeka, Missouri City, Naples, and Montreal. I manage 60+
                signalized intersections nationwide, serve as the primary liaison between the R&D
                team in Israel and U.S. field operations, and translate traffic engineering
                requirements into actionable product improvements.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Previously at <span className="text-slate-200 font-medium">Q-Free ASA</span>, I led product evaluation,
                User Acceptance Testing, and technical deployments for statewide traffic management
                platforms supporting Georgia DOT and North Carolina DOT. Earlier work at{' '}
                <span className="text-slate-200 font-medium">Kimley-Horn</span> and{' '}
                <span className="text-slate-200 font-medium">HNTB</span> covered traffic impact
                studies, ITS design, and signal plan development.
              </p>
              <p className="text-slate-400 leading-relaxed">
                On the software side, I build internal tooling — file parsers, validation engines,
                policy generators, and automation scripts — to support controller configuration,
                optimization workflows, and deployment pipelines. I work primarily in Python with
                PostgreSQL, Linux, and Azure infrastructure.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-2xl font-bold text-blue-400 font-mono mb-1">{s.value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-slate-900 border border-slate-800 rounded-lg p-4">
                <p className="mono-label mb-3">Education</p>
                <p className="text-slate-200 text-sm font-medium">Georgia Institute of Technology</p>
                <p className="text-slate-400 text-sm">B.S. Civil Engineering</p>
                <p className="text-slate-500 text-xs font-mono mt-1">2018 – 2021 · GPA 3.31</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
