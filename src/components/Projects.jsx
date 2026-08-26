import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    id: 'atms-lite',
    label: 'Traffic Signal Management System',
    title: 'ATMS-lite: Live Traffic Signal Dashboard',
    lead: true,
    description:
      'A live dashboard wired to a real traffic signal controller on my desk. It streams live signal status, lets an operator send safe commands back to the hardware, and generates ATSPM-style performance reports. Built because I wanted to see why a deployment failed instead of guessing.',
    details: [
      'Streams live signal, walk, and call status over SNMP at ~5 Hz, with automatic recovery if the controller drops offline',
      'Sends commands back to the hardware with guardrails against unsafe signal states',
      'Captures signal events into Postgres and computes ATSPM-style reports natively, no separate app needed',
      'Renders a corridor time-space diagram and a satellite overlay color-coded to the live signal',
      'Simulates extra intersections in software to test corridor scale without more hardware',
    ],
    tags: ['Full-Stack Engineering', 'Real-Time Systems', 'Hardware Integration', 'React', 'Python', 'Postgres', 'ATSPM', 'Live Dashboards', 'Docker'],
    github: 'https://github.com/shmucas/ATMS-lite',
    demo: {
      src: '/atms-demo.mp4',
      poster: '/atms-demo-poster.jpg',
      caption:
        'Four virtual controllers polled over SNMP · live ring-and-barrier status · 42nd St corridor time-space diagram · ATSPM split monitor',
    },
  },
  {
    id: 'virtual-traffic-simulation',
    label: 'Traffic Simulation',
    title: 'Locally Hosted Traffic Simulation Web App',
    description:
      'A full-stack React and Python application that ingests turning movement counts, intersection geometry, and NTCIP controller databases to run a multi-intersection corridor simulation using HCM 7th Edition Chapter 19 methodology. Written from scratch, parser included, to check field recommendations against the actual math.',
    details: [
      'NTCIP parser handles Econolite ASC/3, Intelight, and generic NTCIP CSV formats, extracting phase parameters, timing plans, cycle lengths, offsets, splits, and detector channels',
      'HCM 7th Edition signalized intersection engine computing adjusted saturation flow, uniform delay (d1), incremental delay (d2), 95th percentile queue, v/c ratio, and LOS A–F per lane group',
      'Robertson platoon dispersion model propagates arrival profiles between intersections and renders a time-space diagram',
    ],
    tags: ['NTCIP', 'HCM 7th Edition', 'React', 'Python', 'FastAPI', 'SQLite'],
    github: 'https://github.com/shmucas/trafficsim',
  },
  {
    id: 'lulu-desk-companion',
    label: 'AI Hardware / Voice Assistant',
    title: 'Lulu: AI Desk Companion',
    description:
      'A physical desk companion on an ESP32-S3 that talks to a Mac backend over WiFi. It hears a voice command, runs speech-to-text and a local LLM, and answers out loud while a pixel-art face shows what it is doing. Everything runs locally, no cloud APIs.',
    details: [
      'Built the full voice pipeline: microphone capture on the ESP32, speech-to-text, a two-model local LLM setup (one plans actions like setting timers or checking weather, the other holds the conversation and picks an emotion), and text-to-speech spoken back through a small speaker',
      'Designed a pixel-art face on a tiny OLED screen that animates between six expressions (idle, listening, thinking, speaking, etc.) so the device feels alive and shows what it is doing',
      'Added practical features on top: persistent memory so it remembers facts about the user, timers and reminders that speak up on their own, and a push-to-talk button for reliable activation',
    ],
    tags: ['ESP32-S3', 'Python', 'FastAPI', 'WebSockets', 'Ollama', 'Local LLMs', 'faster-whisper', 'Piper TTS', 'Arduino/PlatformIO'],
    github: 'https://github.com/shmucas/lulu.ai-desk-companion',
  },
  {
    id: 'ffb26',
    label: 'Autonomous Agents / Simulation',
    title: 'Hermes: Fantasy Football Agent',
    description:
      'An agent that runs my fantasy football teams on Sleeper. It drafts live, hunts for trades, fixes my lineup, and reports back on its own. Built because I grew up in Brazil on the other kind of football, so I would rather let a model make the roster calls than guess.',
    details: [
      'Builds its own player projections from live draft data and past seasons, then simulates a full season of head to head games to see how many wins a roster gets, not just how many points it scores. Trades, lineups, and draft picks all run on one value model: what a player is worth over the next guy available at his position',
      'Drafts live and unattended, tracking the snake order and picking on that same value model with rules that keep the roster legal',
      "Sleeper's public API only reads, so I worked out the private endpoint its own web app uses to make picks and set lineups. Every write is behind an explicit flag, since this plays in a league with real people in it",
      'Lives in my Discord server, so I can talk to Hermes there and get its daily read on trades and start/sit calls without opening anything',
    ],
    tags: ['Agentic Workflows', 'Autonomous Agents', 'Monte Carlo Simulation', 'Python', 'FastAPI', 'React', 'Postgres'],
    github: 'https://github.com/shmucas/fantasy-football-2026',
  },
]

function ProjectCard({ project, onDemo }) {
  return (
    <div className="border border-neutral-800 bg-neutral-900/50 rounded-lg p-5 hover:border-neutral-700 transition-colors duration-200">
      {project.lead && project.demo && (
        <button
          onClick={() => onDemo(project)}
          className="group block w-full mb-4 rounded-md overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors"
          aria-label={`Play ${project.title} demo`}
        >
          <img
            src={project.demo.poster}
            alt=""
            className="w-full aspect-[16/7] object-cover"
            loading="lazy"
          />
        </button>
      )}

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-3">
        <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-500">
          {project.label}
        </span>

        <div className="flex items-center gap-4">
          {project.demo && (
            <button
              onClick={() => onDemo(project)}
              className="font-mono text-[10px] tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              ▶ Live demo
            </button>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-neutral-400 tracking-wider hover:text-neutral-100 transition-colors"
            >
              GitHub ↗
            </a>
          ) : (
            <span className="font-mono text-[10px] text-neutral-600 tracking-wider">Private</span>
          )}
        </div>
      </div>

      <h3 className="text-neutral-50 font-semibold text-base mb-2 leading-snug">
        {project.title}
      </h3>

      <p className="text-neutral-300 text-sm leading-relaxed mb-4">{project.description}</p>

      <ul className="space-y-1.5 mb-4">
        {project.details.map((d, i) => (
          <li key={i} className="flex items-start gap-2 text-neutral-400 text-xs leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-neutral-600 mt-1.5 flex-shrink-0" />
            {d}
          </li>
        ))}
      </ul>

      <p className="font-mono text-[11px] tracking-wider text-neutral-500 break-words">
        {project.tags.join(' · ')}
      </p>
    </div>
  )
}

export default function Projects() {
  const [demo, setDemo] = useState(null)

  useEffect(() => {
    if (!demo) return
    const onKey = (e) => {
      if (e.key === 'Escape') setDemo(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [demo])

  const [lead, ...rest] = projects

  return (
    <section id="projects" className="py-16 border-t border-neutral-800/60 scroll-mt-6">
      <SectionHeading eyebrow="Projects" title="Things I've built to prove it." />

      <ProjectCard project={lead} onDemo={setDemo} />

      <div className="grid sm:grid-cols-2 gap-5 mt-5">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} onDemo={setDemo} />
        ))}
      </div>

      {demo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${demo.title} demo`}
          onClick={() => setDemo(null)}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-xs tracking-wider text-neutral-300">{demo.title}</p>
              <button
                onClick={() => setDemo(null)}
                aria-label="Close demo"
                className="font-mono text-neutral-400 hover:text-neutral-50 transition-colors text-xl leading-none px-2"
              >
                ×
              </button>
            </div>
            <video
              ref={(el) => {
                if (el) {
                  el.muted = true
                  el.play().catch(() => {})
                }
              }}
              src={demo.demo.src}
              poster={demo.demo.poster}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full rounded-lg border border-neutral-800"
            />
            <p className="mt-3 font-mono text-[11px] tracking-wider text-neutral-500">
              {demo.demo.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
