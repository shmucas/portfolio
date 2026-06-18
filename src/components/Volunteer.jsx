const roles = [
  {
    org: 'Society of St. Vincent de Paul',
    role: 'Caseworker',
    sub: "St. Jude's Parish · Atlanta, GA",
    description:
      "Evaluate and assist families and individuals in need through St. Jude's Parish. Conduct case assessments, connect clients with resources, and provide direct support to community members facing hardship.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    org: 'Beta Iota Alumni Board · Georgia Tech ATO',
    role: 'Alumni Board President',
    sub: 'Alpha Tau Omega · Georgia Tech',
    description:
      'Promoted to president of the non-profit alumni board organization. In charge of supporting chapter leadership ad hoc, managing the endowment, and facilitating chapter scholarships on behalf of the ATO Foundation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <p className="mono-label mb-8">Volunteer</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {roles.map((r) => (
              <div
                key={r.org}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 text-slate-500">{r.icon}</div>
                  <div>
                    <h3 className="text-slate-200 font-medium text-sm">{r.org}</h3>
                    <p className="text-blue-400/80 text-xs font-mono mt-0.5">{r.role}</p>
                    <p className="text-slate-600 text-xs font-mono mt-0.5">{r.sub}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
