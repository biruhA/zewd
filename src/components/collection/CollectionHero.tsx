export default function CollectionHero() {
  return (
    <header className="relative py-32 px-12 md:px-24 overflow-hidden">
      <div className="max-w-4xl relative z-10">
        <span className="font-label text-xs tracking-[0.3em] uppercase text-primary-custom mb-6 block">
          The Bridal Collection
        </span>
        <h1 className="font-headline text-6xl md:text-8xl text-on-background leading-tight mb-8">
          ENGAGEMENT RINGS
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
          A testament to eternal devotion. Discover our curated selection of bespoke designs, where every diamond is hand-selected for its unique brilliance and character.
        </p>
      </div>
      {/* Giant editorial background letter */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none">
        <span className="font-headline text-[25rem] leading-none">A</span>
      </div>
    </header>
  );
}
