const skillGroups = [
  {
    category: 'Transportation Systems',
    icon: '◈',
    skills: [
      'Adaptive Signal Control',
      'NTCIP Protocol',
      'Traffic Signal Controllers (Expert)',
      'EOS Cobalt Controllers',
      'Traffic Management Systems',
      'Signal Timing & Phasing',
      'ATSPM Analytics',
      'Traffic Impact Studies',
      'ITS Design'
    ],
  },
  {
    category: 'Software Development',
    icon: '◇',
    skills: [
      'Python (Advanced)',
      'Bash / Shell Scripting (Advanced)',
      'Agentic Engineering (Advanced)',
      'PostgreSQL (Proficient)',
      'MySQL (Proficient)',
      'JavaScript (Proficient)',
      'React (Proficient)',
      'Vite(Proficient)',
      'REST APIs (Advanced)',
      'FastAPI (Proficient)',
      'WebSockets (Proficient)',
      'Ollama / Local LLMs',
      'Git / GitHub',
      'AutoCAD / Civil 3D',
      'Embedded Systems (ESP32)',
      'Arduino / PlatformIO',
      'I2S Audio Programming',
      'Speech-to-Text (Whisper)',
      'Text-to-Speech (Piper)',
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
      'Microsoft Azure (Proficient)',
      'Kubernetes (Proficient)',
      'Docker (Proficient)',
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
          <p className="mono-label mb-8">Skills</p>

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
          <div className="mt-6 bg-slate-900/50 border border-slate-800 rounded-xl p-5">
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
