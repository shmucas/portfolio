const jobs = [
  {
    company: 'NoTraffic',
    role: 'Signal Optimization Engineer',
    period: 'Nov 2024 – Present',
    location: 'Atlanta, GA',
    current: true,
    bullets: [
      'Lead deployment and optimization of NoTraffic adaptive signal control algorithms across major municipalities including Phoenix, Topeka, Missouri City, Naples, and Montreal.',
      'Configured AI traffic signal control deployments across national corridors reducing intersection delay by up to 30% and reducing travel time by 10%.',
      'Served as the primary liaison between the R&D team in Israel and U.S. field operations as the lead product engineer to translate traffic engineering requirements into algorithm tuning and improvements.',
      'Manage and maintain 72+ signalized intersections nationwide using the NoTraffic AI optimization platform, providing system monitoring, troubleshooting, agency training, and technical sales support.',
    ],
    tags: ['SUMO Microsimulation', 'Signal Optimization', 'TPM Workshops', 'Python', 'Data Analysis'],
  },
  {
    company: 'Q-Free ASA',
    role: 'Support Engineer',
    period: 'Nov 2021 – Nov 2024',
    location: 'Atlanta, GA',
    bullets: [
      'Led product evaluation and system design for the Q-Free Urban traffic management platform supporting statewide deployments for Georgia DOT and North Carolina DOT.',
      'Delivered technical sales presentations and product demonstrations to public agencies — contributing to statewide controller management software deployment.',
      'Directed User Acceptance Testing (UAT) for major deployments: City of Laval, City of Dallas TX, and North Carolina DOT.',
      'Served as engineering lead for adaptive traffic control deployments in Boulder, CO and Conway, AR.',
    ],
    tags: ['Sales Engineering', 'UAT', 'Customer Support', 'Azure Cloud Deployment', 'PostGresQl'],
  },
  {
    company: 'Kimley-Horn',
    role: 'Civil Engineering Analyst',
    period: 'Jun 2021 – Nov 2021',
    location: 'Atlanta, GA',
    bullets: [
      'Performed traffic impact studies for Georgia municipalities, evaluating operations and recommending mitigation strategies for safety and mobility.',
      'Analyzed traffic flow and congestion patterns using Excel, Python, and MySQL, supporting improved traffic flow and reduced emissions.',
    ],
    tags: ['Traffic Impact Studies', 'Python', 'MySQL', 'Traffic Operations'],
  },
  {
    company: 'HNTB',
    role: 'Traffic Engineering Intern',
    period: 'May 2019 – May 2020',
    location: 'Atlanta, GA',
    bullets: [
      'Developed ITS and traffic signal design plans using AutoCAD, MicroStation, and Civil 3D for transportation infrastructure projects in Gwinnett County.',
    ],
    tags: ['ITS Design', 'Signal Design', 'AutoCAD', 'Civil 3D'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <p className="mono-label mb-8">Experience</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-700 hidden md:block" />

            <div className="space-y-10">
              {jobs.map((job, i) => (
                <div key={i} className="md:pl-8 relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-[4px] hidden md:block ${
                      job.current ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]' : 'bg-slate-600'
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-slate-100 font-semibold text-base">{job.company}</h3>
                        {job.current && (
                          <span className="font-mono text-[10px] tracking-wider uppercase px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/25 text-blue-400 rounded">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm">{job.role}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-mono text-xs text-slate-500">{job.period}</p>
                      <p className="font-mono text-xs text-slate-600">{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-3">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-slate-600 mt-1.5 flex-shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-500 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
