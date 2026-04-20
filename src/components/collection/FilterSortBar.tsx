'use client';

export default function FilterSortBar() {
  return (
    <section className="sticky top-24 z-40 bg-surface-container-low/90 backdrop-blur-md px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
        {/* Filter Groups */}
        <div className="flex flex-wrap items-center gap-12">
          <div className="group cursor-pointer">
            <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 block mb-1">
              Metal Type
            </span>
            <div className="flex items-center gap-2 font-body text-sm text-on-surface group-hover:text-primary-custom transition-colors duration-500">
              Platinum &amp; Gold
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>

          <div className="group cursor-pointer">
            <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 block mb-1">
              Diamond Shape
            </span>
            <div className="flex items-center gap-2 font-body text-sm text-on-surface group-hover:text-primary-custom transition-colors duration-500">
              Round, Oval, Pear
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>

          <div className="group cursor-pointer">
            <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 block mb-1">
              Price Range
            </span>
            <div className="flex items-center gap-2 font-body text-sm text-on-surface group-hover:text-primary-custom transition-colors duration-500">
              Filter by Price
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>
        </div>

        {/* Sort & Reset */}
        <div className="flex items-center gap-6">
          <button className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 hover:text-primary-custom transition-colors duration-500">
            Reset All
          </button>
          <div className="h-4 w-px bg-outline-variant/30"></div>
          <div className="group cursor-pointer flex items-center gap-2">
            <span className="font-label text-sm text-on-surface">Sort: Featured</span>
            <span className="material-symbols-outlined text-sm">sort</span>
          </div>
        </div>
      </div>
    </section>
  );
}
