export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="mono-label mb-2">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
        {title}
      </h2>
    </div>
  )
}
