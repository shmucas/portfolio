const TOKEN_URL = 'https://accounts.spotify.com/api/token'
const TOP_TRACKS_URL = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50'

export default async function handler(req, res) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return res.status(500).json({ error: 'Spotify env vars not configured' })
  }

  try {
    const tokenRes = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    })
    if (!tokenRes.ok) throw new Error(`Token refresh failed: ${tokenRes.status}`)
    const { access_token } = await tokenRes.json()

    const topRes = await fetch(TOP_TRACKS_URL, {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    if (!topRes.ok) throw new Error(`Top tracks failed: ${topRes.status}`)
    const { items } = await topRes.json()

    // Most-played album = the album appearing most among top tracks. Singles skipped.
    const counts = new Map()
    for (const track of items || []) {
      const album = track.album
      if (!album || album.album_type !== 'album') continue
      const entry = counts.get(album.id) || { count: 0, album }
      entry.count += 1
      counts.set(album.id, entry)
    }
    const top = [...counts.values()].sort((a, b) => b.count - a.count)[0]
    if (!top) return res.status(200).json({ album: null })

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800')
    return res.status(200).json({
      album: {
        title: top.album.name,
        artist: top.album.artists.map((a) => a.name).join(', '),
        url: top.album.external_urls.spotify,
      },
    })
  } catch (err) {
    return res.status(502).json({ error: err.message })
  }
}
