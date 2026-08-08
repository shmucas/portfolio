import { useState, useEffect } from 'react'

const sections = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Volunteering', href: '#volunteer', id: 'volunteer' },
  { label: 'Now', href: '#now', id: 'now' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const links = [
  { label: 'GitHub', href: 'https://github.com/shmucas', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucas-ferreira-pe-b6631a142/', external: true },
  { label: 'Substack', href: 'https://substack.com/@thisislucasferreira', external: true },
  { label: 'Resume', href: '/Lucas-Ferreira-Resume.pdf', external: true },
  { label: 'lvcaspf@gmail.com', href: 'mailto:lvcaspf@gmail.com' },
]

// Tracks which section is currently in view so the rail nav can mark it.
function useActiveSection() {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return active
}

export default function Rail() {
  const active = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <aside
      id="top"
      className="md:sticky md:top-0 md:h-screen md:overflow-y-auto border-b md:border-b-0 md:border-r border-ink-800 px-6 py-6 md:py-10 md:px-8"
    >
      <div className="flex md:block items-center gap-4">
        <img
          src="/avatar.jpg"
          alt="Lucas Ferreira"
          width="320"
          height="320"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
        />

        <div className="min-w-0 md:mt-4">
          <p className="text-lg md:text-xl font-semibold text-ink-50 tracking-tight leading-tight">
            Lucas Ferreira, PE
          </p>
          <p className="font-mono text-[11px] text-ink-400 leading-relaxed mt-0.5">
            Signal Optimization Engineer
            <span className="md:block"> · NoTraffic</span>
          </p>
        </div>

        <button
          className="md:hidden ml-auto p-2 text-ink-400 hover:text-ink-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            )}
          </svg>
        </button>
      </div>

      <p className="hidden md:block font-mono text-[11px] text-ink-500 leading-relaxed mt-3">
        Atlanta, GA
        <br />
        Licensed PE · Georgia · #PE054784
      </p>

      <nav
        className={`${menuOpen ? 'block' : 'hidden'} md:block mt-6 border-l border-ink-800`}
        aria-label="Sections"
      >
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <a
              key={s.id}
              href={s.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive ? 'true' : undefined}
              className={`block font-mono text-[10px] tracking-widest uppercase py-1.5 pl-3 -ml-px border-l transition-colors duration-150 ${
                isActive
                  ? 'text-ink-50 border-amber-400'
                  : 'text-ink-500 border-transparent hover:text-ink-200'
              }`}
            >
              {s.label}
            </a>
          )
        })}
      </nav>

      <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col gap-2 mt-6 pb-2`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener noreferrer' : undefined}
            className="font-mono text-[11px] tracking-wide text-ink-400 hover:text-ink-50 transition-colors duration-150 w-fit break-all"
          >
            {l.label}
            {l.external && <span className="text-ink-600"> &#8599;</span>}
          </a>
        ))}
      </div>
    </aside>
  )
}
