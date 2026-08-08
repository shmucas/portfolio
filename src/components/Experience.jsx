import SectionHeading from './SectionHeading'

const jobs = [
  {
    company: 'NoTraffic',
    role: 'Signal Optimization Engineer',
    period: 'Nov 2024 – Present',
    location: 'Atlanta, GA',
    current: true,
    bullets: [
      'Own the full deployment lifecycle for AI-driven adaptive signal control across six municipalities (Phoenix, Topeka, Missouri City, West Allis, Naples, Montreal): from stakeholder requirements gathering through simulation-based validation to go-live and post-launch tuning.',
      'Configure and tune AI traffic signal control models across national corridors, using live performance data to iteratively adjust algorithm parameters, reducing intersection delay by up to 30% and travel time by 10%.',
      'Work directly with the R&D team on product features, enhancements, and algorithm tuning, translating field constraints and agency requirements into changes that ship.',
      'Manage and maintain 72+ signalized intersections nationwide on the NoTraffic AI optimization platform, monitoring model performance, troubleshooting algorithm behavior, and training agency staff.',
      'Architected custom Model Context Protocol (MCP) server endpoints to securely bridge LLMs with private BI databases, fully automating ESG report generation and cutting a 12-hour manual process to under 1 hour.',
    ],
    tags: ['SUMO Microsimulation', 'AI Implementation', 'Bash Scripts', 'Python', 'Project Delivery', 'AI Agents', 'MCP'],
  },
  {
    company: 'Q-Free ASA',
    role: 'Support Engineer',
    period: 'Nov 2021 – Nov 2024',
    location: 'Atlanta, GA',
    bullets: [
      'Led product evaluation and system design for the Q-Free Urban traffic management platform supporting statewide deployments for Georgia DOT and North Carolina DOT.',
      'Ran technical pre-sales demos and product evaluations for public agency stakeholders, directly supporting statewide platform adoption across Georgia DOT and North Carolina DOT.',
      'Directed User Acceptance Testing (UAT) for major deployments: City of Laval, City of Dallas TX, and North Carolina DOT.',
      'Served as engineering lead for adaptive traffic control deployments in Boulder, CO and Conway, AR.',
    ],
    tags: ['Sales Engineering', 'UAT', 'Customer Support', 'Azure Cloud Deployment', 'PostgreSQL'],
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
    <section id="experience" className="py-16 border-t border-neutral-800/60 scroll-mt-6">
      <SectionHeading eyebrow="Experience" title="Where I've shipped." />

      <div className="space-y-9">
        {jobs.map((job, i) => (
          <div key={i}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
              <h3 className="text-neutral-50 font-semibold text-base">{job.company}</h3>
              <span className="font-mono text-[11px] text-neutral-400">{job.role}</span>
              {job.current && (
                <span className="font-mono text-[10px] tracking-wider uppercase px-1.5 py-0.5 border border-amber-400/30 text-amber-400 rounded">
                  Current
                </span>
              )}
              <span className="font-mono text-[11px] text-neutral-500 sm:ml-auto">
                {job.period} · {job.location}
              </span>
            </div>

            <ul className="space-y-2 mb-3">
              {job.bullets.map((b, j) => (
                <li key={j} className="text-neutral-400 text-sm leading-relaxed flex gap-2">
                  <span className="text-neutral-600 mt-1.5 flex-shrink-0">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="font-mono text-[11px] tracking-wider text-neutral-500 break-words">
              {job.tags.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
