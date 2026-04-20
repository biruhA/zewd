export default function BespokeJourney() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl mb-6">THE BESPOKE <span className="italic">JOURNEY</span></h2>
          <p className="max-w-2xl mx-auto font-body text-on-surface-variant">
            From the first sketch to the final polish, your vision is curated by our master designers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-surface-container-lowest p-12 editorial-shadow group hover:-translate-y-2 transition-transform duration-500 rounded-sm">
            <span className="text-5xl font-headline text-primary-container-custom/30 mb-8 block">01</span>
            <h3 className="text-2xl mb-4 uppercase tracking-widest text-xs font-label text-primary-custom">Consultation</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Meet with our head designer to discuss inspirations, gemstone selection, and your personal story.
            </p>
          </div>
          
          <div className="bg-surface-container-lowest p-12 editorial-shadow group hover:-translate-y-2 transition-transform duration-500 rounded-sm">
            <span className="text-5xl font-headline text-primary-container-custom/30 mb-8 block">02</span>
            <h3 className="text-2xl mb-4 uppercase tracking-widest text-xs font-label text-primary-custom">Design & CAD</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Using precision 3D modeling, we create a life-like render of your piece for review and refinement.
            </p>
          </div>
          
          <div className="bg-surface-container-lowest p-12 editorial-shadow group hover:-translate-y-2 transition-transform duration-500 rounded-sm">
            <span className="text-5xl font-headline text-primary-container-custom/30 mb-8 block">03</span>
            <h3 className="text-2xl mb-4 uppercase tracking-widest text-xs font-label text-primary-custom">Creation</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Our master mounters hand-finish your piece in our London atelier, ready for its forever home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
