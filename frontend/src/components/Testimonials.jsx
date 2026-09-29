const TESTIMONIALS = [
  {
    quote: "Jovia brings networking and digital activities together across different categories.",
    name: "Networking",
    place: "Connect and explore",
  },
  {
    quote: "Explore entertainment and engaging activities, with current details available on the platform.",
    name: "Entertainment",
    place: "Discover activities",
  },
  {
    quote: "Review each activity's timing, instructions, availability, and terms before taking part.",
    name: "Participation",
    place: "Choose what suits you",
    span: true,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-28">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">Jovia Network</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
          One vision, many ways to connect.
        </h2>
      </div>

      <div className="mt-10 md:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className={`bg-white rounded-2xl p-7 border border-ink/5 ${t.span ? 'sm:col-span-2 md:col-span-1' : ''}`}
          >
            <p className="text-ink/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-5 text-sm">
              <div className="font-display font-semibold">{t.name}</div>
              <div className="text-ink/40">{t.place}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
