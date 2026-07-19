import { useState, useEffect } from 'react'
import SectionHeading from './SectionHeading'

const groups = [
  {
    category: 'Tinkering with',
    items: [
      { title: 'Raspberry Pi pool monitor' },
      { title: 'lulu-ai', href: 'https://github.com/shmucas/lulu.ai-desk-companion' },
      { title: 'CAD for 3D printing' },
    ],
  },
  {
    category: 'Listening to',
    items: [
      {
        title: 'Deadbeat by Tame Impala',
        href: 'https://en.wikipedia.org/wiki/Deadbeat_(Tame_Impala_album)',
      },
      { title: 'Dwarkesh Podcast', href: 'https://www.dwarkesh.com' },
    ],
  },
  {
    category: 'Playing',
    items: [
      {
        title: 'Mina the Hollower',
        href: 'https://www.yachtclubgames.com/games/mina-the-hollower',
      },
      {
        title: 'Blasphemous',
        href: 'https://en.wikipedia.org/wiki/Blasphemous_(video_game)',
      },
    ],
  },
  {
    category: 'Rabbit holes',
    items: [
      {
        title: 'The Evangelion ending',
        href: 'https://en.wikipedia.org/wiki/The_End_of_Evangelion',
      },
    ],
  },
]

export default function Now() {
  const [topAlbum, setTopAlbum] = useState(null)
  const [nowPlaying, setNowPlaying] = useState(null)

  useEffect(() => {
    fetch('/api/spotify')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.album) setTopAlbum(data.album)
        if (data?.nowPlaying) setNowPlaying(data.nowPlaying)
      })
      .catch(() => {})
  }, [])

  // Live top album from Spotify replaces the hardcoded one; hardcoded stays as fallback.
  const displayGroups = groups.map((g) =>
    g.category === 'Listening to' && topAlbum
      ? {
          ...g,
          items: [
            { title: `${topAlbum.title} by ${topAlbum.artist}`, href: topAlbum.url },
            ...g.items.slice(1),
          ],
        }
      : g
  )

  return (
    <section id="now" className="py-24 border-t border-neutral-800/60 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Now" title="What I'm into right now." />

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {displayGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-neutral-200 text-sm font-medium mb-2">{group.category}</h3>
              <p className="font-mono text-xs text-neutral-400 leading-loose">
                {group.items.map((item, i) => (
                  <span key={item.title}>
                    {i > 0 && ' · '}
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 transition-colors"
                      >
                        {item.title}
                        <span className="text-neutral-600">&#8599;</span>
                      </a>
                    ) : (
                      item.title
                    )}
                  </span>
                ))}
              </p>

              {group.category === 'Listening to' && nowPlaying && (
                <a
                  href={nowPlaying.url || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 mt-2 text-xs font-mono text-neutral-500 hover:text-amber-400 transition-colors w-fit"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
                  </span>
                  Currently listening to {nowPlaying.title} by {nowPlaying.artist}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
