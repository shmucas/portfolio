export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="mono-label mb-2">{eyebrow}</p>
      {title && (
        <h2 className="text-xl sm:text-2xl font-semibold text-ink-50 tracking-tight">
          {title}
        </h2>
      )}
    </div>
  )
}
