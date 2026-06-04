// Reusable card component
// Reusable card component

// New reusable card component
function BespokeCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="bg-surface-container-lowest dark:bg-surface-container-highest p-12 editorial-shadow group hover:-translate-y-2 transition-transform duration-500 rounded-sm">
      <span className="text-5xl font-headline text-primary-container-custom/30 mb-8 block">{step}</span>
      <h3 className="text-2xl mb-4 uppercase tracking-widest text-xs font-label text-primary-custom">{title}</h3>
      <p className="font-body text-sm text-on-surface-variant dark:text-on-primary-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function BespokeJourney() {
  const cards = [
    {
      step: "01",
      title: "Consultation",
      description: "Contact us in person or online to discuss your inspiration, gemstone selection, and the story behind your piece.",
    },
    {
      step: "02",
      title: "Design",
      description: "We design with your story and inspiration at the heart, using precision to bring your vision to life before creation.",
    },
    {
      step: "03",
      title: "Creation",
      description: "Our master mounters hand-finish your piece, ready for its forever home.",
    },
  ];
  return (
    <section id="bespoke-journey" className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl mb-6">
            THE CUSTOM <span className="italic">RING JOURNEY</span>
          </h2>
          <p className="max-w-2xl mx-auto font-body text-on-surface-variant">
            From the first sketch to the final polish, your vision is curated by our master designers,
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((c) => (
            <BespokeCard key={c.step} step={c.step} title={c.title} description={c.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
