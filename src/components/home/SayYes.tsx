/* eslint-disable @next/next/no-img-element */
import { readFileSync } from 'fs';
import { join } from 'path';
import BookAppointmentButton from '@/components/home/BookAppointmentButton';

interface Proposal {
  id: string;
  handle: string;
  image: string;
  caption?: string;
  featured: boolean;
  order: number;
}

function getProposals(): Proposal[] {
  try {
    const raw = readFileSync(join(process.cwd(), 'data', 'proposals.json'), 'utf-8');
    const data: Proposal[] = JSON.parse(raw);
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

export default function SayYes() {
  const couples = getProposals();
  const avatars = couples.filter((c) => c.featured).slice(0, 4);

  return (
    <section id="say-yes" className="py-24 bg-[#121921] overflow-hidden">
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
            key={couple.id ?? index}
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
                  src={avatar.image}
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
        <BookAppointmentButton />
      </div>
    </section>
  );
}
