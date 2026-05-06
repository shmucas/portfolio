const projects = [
  {
    id: 'asc3-validation',
    label: 'Validation Tooling',
    title: 'ASC/3 Database Validation App',
    description:
      'A validation tool that parses ASC/3 .cfg controller configuration files and verifies NoTraffic optimization configurations against expected operational parameters. Ensures controller settings meet agency-specific operational requirements before deployment.',
    details: [
      'Parses binary and text-based ASC/3 .cfg file formats',
      'Rule engine validates timing plans, phase sequences, and detector configurations',
      'Flags non-compliant optimization parameters against expected ranges',
      'Generates structured reports for field engineers and agency reviewers',
    ],
    tags: ['Python', 'File Parsing', 'Rule Validation', 'CLI', 'ASC/3'],
    accent: 'blue',
  },
  {
    id: 'corridor-policy',
    label: 'Policy Generation',
    title: 'Corridor Policy Generator',
    description:
      'A Python-based application for generating and managing traffic corridor policies and optimization configurations. Automates the creation of multi-intersection corridor strategies from structured inputs.',
    details: [
      'Generates optimization policy files from corridor-level configuration inputs',
      'Supports time-of-day and day-of-week policy scheduling',
      'Validates generated policies against operational constraints',
      'Exports configurations in formats compatible with the NoTraffic platform',
    ],
    tags: ['Python', 'Policy Engine', 'YAML', 'Corridor Optimization'],
    accent: 'violet',
  },
  {
    id: 'controller-integration',
    label: 'Controller Systems',
    title: 'Traffic Controller Integration & Automation',
    description:
      'Engineering work integrating EOS Cobalt traffic controllers with the NoTraffic optimization algorithm — covering NTCIP command sets, controller communications, diagnostics, and operations workflows.',
    details: [
      'NTCIP protocol implementation for controller command and status retrieval',
      'EOS Cobalt controller diagnostics, configuration reads, and remote management',
      'Automated health checks and alert pipelines for intersection monitoring',
      'Integration layer bridging raw controller data with the NoTraffic optimization engine',
    ],
    tags: ['NTCIP', 'EOS Cobalt', 'TCP/IP', 'Python', 'Controller Comms'],
    accent: 'emerald',
  },
  {
    id: 'optimization-logic',
    label: 'Optimization Logic',
    title: 'Traffic Optimization Logic & Tooling',
    description:
      'Documentation and tooling around adaptive signal control logic: sequence changes by pattern, time-of-day scheduling, and traffic operations automation supporting the NoTraffic deployment workflow.',
    details: [
      'Sequence-by-pattern logic for dynamic phase reordering based on demand',
      'Time-of-day plan scheduling and transition management',
      'Operational automation scripts for batch configuration updates',
      'Internal documentation of optimization parameter interactions and edge cases',
    ],
    tags: ['Adaptive Control', 'Signal Timing', 'Scheduling', 'Automation', 'Python'],
    accent: 'amber',
  },
]

const accentMap = {
  blue: {
    border: 'group-hover:border-blue-500/40',
    top: 'bg-blue-500',
    label: 'text-blue-400',
    labelBg: 'bg-blue-500/10 border-blue-500/20',
    dot: 'bg-blue-400',
  },
  violet: {
    border: 'group-hover:border-violet-500/40',
    top: 'bg-violet-500',
    label: 'text-violet-400',
    labelBg: 'bg-violet-500/10 border-violet-500/20',
    dot: 'bg-violet-400',
  },
  emerald: {
    border: 'group-hover:border-emerald-500/40',
    top: 'bg-emerald-500',
    label: 'text-emerald-400',
    labelBg: 'bg-emerald-500/10 border-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  amber: {
    border: 'group-hover:border-amber-500/40',
    top: 'bg-amber-500',
    label: 'text-amber-400',
    labelBg: 'bg-amber-500/10 border-amber-500/20',
    dot: 'bg-amber-400',
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <div className="flex items-end justify-between mb-8">
            <p className="mono-label">Featured Projects</p>
            <p className="text-xs text-slate-600 font-mono hidden sm:block">
              internal tooling · field engineering
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((project) => {
              const a = accentMap[project.accent]
              return (
                <div
                  key={project.id}
                  className={`group relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden ${a.border} transition-colors duration-200`}
                >
                  {/* Top accent bar */}
                  <div className={`h-0.5 w-full ${a.top} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded border ${a.labelBg} ${a.label}`}
                      >
                        {project.label}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    <h3 className="text-slate-100 font-semibold text-base mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {project.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-500 text-xs leading-relaxed">
                          <span className={`w-1 h-1 rounded-full ${a.dot} mt-1.5 flex-shrink-0`} />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wide px-2 py-0.5 bg-slate-800/60 border border-slate-700/50 text-slate-500 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
