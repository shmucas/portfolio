import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    category: 'Transportation Systems',
    icon: '◈',
    skills: [
      'Adaptive Signal Control',
      'NTCIP Protocol',
      'Traffic Signal Controllers',
      'EOS Cobalt Controllers',
      'Traffic Management Systems',
      'Signal Timing & Phasing',
      'ATSPM Analytics',
      'SUMO Microsimulation',
      'Traffic Impact Studies',
      'ITS Design',
    ],
  },
  {
    category: 'AI & Agentic Engineering',
    icon: '◇',
    skills: [
      'Claude Code',
      'MCP Server Development',
      'Agent Skill Design',
      'Multi-Agent Workflows',
      'Local LLMs (Ollama)',
    ],
  },
  {
    category: 'Software Engineering',
    icon: '◆',
    skills: [
      'Python',
      'JavaScript',
      'React',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'PostgreSQL',
      'MySQL',
      'Bash / Shell Scripting',
    ],
  },
  {
    category: 'Hardware & Embedded',
    icon: '◐',
    skills: [
      'ESP32 / Arduino / RPi5',
      'SNMP Hardware Polling',
      'I2S Audio Programming',
      'AutoCAD / Civil 3D',
    ],
  },
  {
    category: 'Automation & Validation',
    icon: '◉',
    skills: [
      'User Acceptance Testing',
      'CI/CD (Jenkins)',
      'Automated Reporting',
      'Deployment Scripting',
    ],
  },
  {
    category: 'Infrastructure & Operations',
    icon: '◎',
    skills: [
      'Microsoft Azure',
      'Kubernetes',
      'Docker',
      'Linux (Ubuntu)',
      'Agency Training',
      'Technical Documentation',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <SectionHeading eyebrow="Skills" title="The toolbox." />

          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-slate-900 border border-slate-800 rounded-lg p-5 hover:border-slate-700 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-400/60 text-sm font-mono">{group.icon}</span>
                  <h3 className="text-slate-300 text-sm font-medium">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 text-slate-400 rounded hover:text-slate-300 hover:border-slate-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400/60 text-sm font-mono">◌</span>
              <h3 className="text-slate-300 text-sm font-medium">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { lang: 'English', level: 'Native' },
                { lang: 'Portuguese', level: 'Native' },
                { lang: 'Spanish', level: 'Fluent' },
              ].map(({ lang, level }) => (
                <div key={lang} className="flex items-center gap-2">
                  <span className="text-slate-200 text-sm font-medium">{lang}</span>
                  <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
