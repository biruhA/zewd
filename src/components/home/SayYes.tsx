"use client";

/* eslint-disable @next/next/no-img-element */


interface CoupleCard {
  handle: string;
  image: string;
}

const couples: CoupleCard[] = [
  {
    handle: '@emilydeurloo',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
  },
  {
    handle: '@elliekoureas',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop',
  },
  {
    handle: '@eakinhannah',
    image: 'https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=600&auto=format&fit=crop',
  },
  {
    handle: '@darcyspages',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop',
  },
  {
    handle: '@arianasakiclarke',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
  },
  {
    handle: '@sophieatzorn',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop',
  },
  {
    handle: '@chloe_smith',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
  },
  {
    handle: '@olivia_harper',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop',
  },
];

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
];

export default function SayYes() {
  return (
    <section className="py-24 bg-[#121921] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-headline text-white tracking-wide mb-16">
          Say &quot;Yes&quot; with Zewd
        </h2>
      </div>

      {/* Horizontal scrolling strip for couples */}
      <div className="flex flex-row overflow-x-auto gap-5 px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-none">
        <div className="flex-none w-2 md:w-6" />
        
        {couples.map((couple, index) => (
          <div
            key={index}
            className="flex-none w-[260px] md:w-[300px] aspect-[3/4] relative group overflow-hidden rounded-sm snap-center border border-white/5 shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out"
          >
            <img
              src={couple.image}
              alt={`Happy couple proposed with Zewd ring`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              loading="lazy"
            />
            {/* Elegant hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* White pill badge overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-white/20 transition-all duration-300 group-hover:bg-white">
              <span className="text-[10px] md:text-xs font-label font-medium text-slate-800 tracking-wider">
                {couple.handle}
              </span>
            </div>
          </div>
        ))}
        
        <div className="flex-none w-2 md:w-6" />
      </div>

      {/* Trust & Engagement Footer */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center mt-6">
        <div className="flex items-center gap-3">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#121921] overflow-hidden"
              >
                <img
                  src={avatar}
                  alt="Zewd happy customer avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-white/70 text-xs md:text-sm font-body tracking-wide font-light">
            Join 25,000+ Zewd Couples
          </span>
        </div>

        {/* Call to Action Button */}
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("open-consultation-modal"));
            }
          }}
          className="mt-10 bg-white text-[#121921] font-label tracking-[0.25em] text-xs uppercase px-12 py-4 rounded-none hover:bg-slate-100 active:bg-slate-200 transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 font-semibold cursor-pointer"
        >
          BOOK APPOINTMENT
        </button>
      </div>
    </section>
  );
}
