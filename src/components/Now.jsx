import { useState, useEffect } from 'react'
import SectionHeading from './SectionHeading'

const groups = [
  {
    category: 'Tinkering with',
    items: [
      { title: 'Raspberry Pi pool monitor', href: 'https://github.com/shmucas/Pool-Sensor' },
      { title: 'CAD for 3D printing' },
    ],
  },
  {
    category: 'Listening to',
    items: [
      {
        title: 'The Dark Cloud by Johnny Blue Skies',
        href: 'https://open.spotify.com/search/Johnny%20Blue%20Skies%20The%20Dark%20Cloud',
      },
      { title: 'Founders Podcast', href: 'https://www.founderspodcast.com' },
    ],
  },
  {
    category: 'Playing',
    items: [
      {
        title: 'Persona 5 Royal',
        href: 'https://en.wikipedia.org/wiki/Persona_5_Royal',
      },
      {
        title: 'Blasphemous 2',
        href: 'https://en.wikipedia.org/wiki/Blasphemous_2',
      },
      { title: 'Pokémon Unbound', href: 'https://www.pokecommunity.com/threads/pokemon-unbound.382178/' },
    ],
  },
  {
    category: 'Reading',
    items: [
      {
        title: 'Dungeon Crawler Carl: The Dungeon Anarchist\'s Cookbook',
        href: 'https://en.wikipedia.org/wiki/Dungeon_Crawler_Carl',
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
    <section id="now" className="py-16 border-t border-neutral-800/60 scroll-mt-6">
      <SectionHeading eyebrow="Now" title="What I'm into right now." />

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {displayGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-neutral-100 text-sm font-medium mb-2">{group.category}</h3>
            <p className="font-mono text-xs text-neutral-400 leading-loose break-words">
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
                className="flex items-center gap-1.5 mt-2 text-xs font-mono text-neutral-400 hover:text-amber-400 transition-colors w-fit"
              >
                <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
                </span>
                Currently listening to {nowPlaying.title} by {nowPlaying.artist}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
