const stats = [
  { value: '72+', label: 'Intersections managed' },
  { value: '6', label: 'Cities deployed' },
  { value: '25%', label: 'Corridor delay cut' },
  { value: '12h→1h', label: 'ESG reporting cycle' },
]

export default function Statement() {
  return (
    <section className="pb-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-ink-50 tracking-tight leading-[1.12] mb-4 max-w-3xl">
        I work at the seam where AI meets physical infrastructure.
      </h1>

      <p className="text-lg text-ink-300 leading-relaxed max-w-2xl">
        I put AI control systems into traffic signals: 72+ signalized intersections
        across six cities in the US and Canada, from simulation to go-live to
        measured results. I work directly with the R&amp;D team on product features,
        enhancements, and algorithm tuning.
      </p>

      <div className="flex flex-wrap gap-x-10 gap-y-4 mt-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-mono text-xl font-bold text-ink-50">{s.value}</div>
            <div className="text-[11px] text-ink-500 leading-tight mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
