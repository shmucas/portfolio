import SectionHeading from './SectionHeading'

const roles = [
  {
    org: 'Society of St. Vincent de Paul',
    role: 'Caseworker',
    sub: "St. Jude's Parish · Atlanta, GA",
    description:
      "Evaluate and assist families and individuals in need through St. Jude's Parish. Conduct case assessments, connect clients with resources, and provide direct support to community members facing hardship.",
  },
  {
    org: 'Beta Iota Alumni Board · Georgia Tech ATO',
    role: 'Alumni Board President',
    sub: 'Alpha Tau Omega · Georgia Tech',
    description:
      'Promoted from treasurer to president of the non-profit alumni board. I manage the endowment, advise active chapter leadership, and administer scholarships on behalf of the ATO Foundation.',
  },
]

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <SectionHeading eyebrow="Community" title="Outside the day job." />

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {roles.map((r) => (
              <div key={r.org}>
                <h3 className="text-slate-200 font-medium text-sm">{r.org}</h3>
                <p className="text-blue-400/80 text-xs font-mono mt-0.5">{r.role}</p>
                <p className="text-slate-600 text-xs font-mono mt-0.5 mb-3">{r.sub}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
