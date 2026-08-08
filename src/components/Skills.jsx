import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    category: 'Transportation Systems',
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
    skills: [
      'ESP32 / Arduino / RPi5',
      'SNMP Hardware Polling',
      'I2S Audio Programming',
      'AutoCAD / Civil 3D',
    ],
  },
  {
    category: 'Automation & Validation',
    skills: [
      'User Acceptance Testing',
      'CI/CD (Jenkins)',
      'Automated Reporting',
      'Deployment Scripting',
    ],
  },
  {
    category: 'Infrastructure & Operations',
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

const languages = [
  { lang: 'English', level: 'Native' },
  { lang: 'Portuguese', level: 'Native' },
  { lang: 'Spanish', level: 'Fluent' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-ink-800 scroll-mt-6">
      <SectionHeading eyebrow="Skills" title="The toolbox." />

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-ink-100 text-sm font-medium mb-2">{group.category}</h3>
            <p className="font-mono text-xs text-ink-400 leading-loose break-words">
              {group.skills.join(' · ')}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-ink-100 text-sm font-medium mb-2">Languages</h3>
        <p className="font-mono text-xs text-ink-500 leading-loose break-words">
          {languages.map(({ lang, level }) => `${lang} (${level})`).join(' · ')}
        </p>
      </div>
    </section>
  )
}
