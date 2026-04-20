/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function CuratedCollections() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl mb-6">
              CURATED <span className="italic">PIECES</span>
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Each design at The Atelier is a dialogue between timeless heritage
              and contemporary precision, crafted to catch every flicker of
              light.
            </p>
          </div>
          <Link
            href="/rings"
            className="group flex items-center gap-4 font-label uppercase tracking-widest text-xs text-primary-custom"
          >
            View All Collections
            <span className="w-12 h-[1px] bg-primary-custom group-hover:w-16 transition-all duration-500"></span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Feature Card */}
          <div className="md:col-span-7 group cursor-pointer overflow-hidden relative">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkgxq-SOkttYbOGatMYyWmTg6WkUYwt2CakrmJ9dpE-2ozoGFQivS6wSWgoKmta3eV3dp7yzujz_vPduQZGKvHX5AlvH0hCqQcqJvJIHPlFz9yqHhaKbK5CG6BaUh6m6C9YnDEL8MwFH0Wt9tFqlQ7bBN7T-mjgvAx2wbs1zWFZsznBQJf6MOD1rWvbA0sIp95OQ1zCwjKsqoZIFb4RGDe2wgJeDeia6OdqnsfwkqB389JAQcgUbWe-dVdWo0qyf9zhK5HvM1eM4s"
                alt="Luxurious lifestyle photo of a diamond engagement ring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl mb-2">Engagement Rings</h3>
              <p className="font-label text-sm text-on-surface-variant tracking-wider uppercase">
                Find your brilliance
              </p>
            </div>
          </div>

          {/* Secondary Cards Stacked */}
          <div className="md:col-span-5 flex flex-col gap-16 md:mt-24">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6SlIinylVWYIsOH41lfFxXWZk8F1Oh8MwbvHKUrGUqfxQ_u57QRx-N8UqMPOn19ODAV_LENb6qaAjf2Z34f2NsYl-zjn7Q0Bjkod6gWLRJXX1zvbUjb9sRh6l7hwhKStkrExOZGJpNaL-eikZSC7oY7NrqX7962jdMsfpnNqUCKiQYQ5m0yUmglocrNrQHJtMe3JheCb0FDULNAh-h6vL_mxAOsZ45UlypCZUjB9TjKvUJCtEh8EYWdbwo-PysTX5UETY5cwjlL0"
                  alt="Platinum wedding bands intertwined"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl mb-2">Wedding Bands</h3>
                <p className="font-label text-sm text-on-surface-variant tracking-wider uppercase">
                  United in design
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYlqcboDVpseK2DSeVbgEILFh3xidsu57Ww3qmm5OgHZ1J3kI-kktkr9ux1gowxW9OIfv8SWx-qhMp2U35HCUa8x7QRnlSOE5ffmHE87dXGyeOucNfgf1CAUNxX7CGGsAmtX-W3zS_cxvx3YLoXvjurzgu1H229zB8MOQVdxTJizgRnm8oMiMbJVHDLcUbS0eSY8nef6nLhhP0k70TattKP9yZGMfQuIUO8e70Jk515I3Dtag9Fh2dJttfQpBAbn7LKHxwS0lm0o8"
                  alt="Diamond sketches and professional jeweler tools"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl mb-2">Bespoke Services</h3>
                <p className="font-label text-sm text-on-surface-variant tracking-wider uppercase">
                  Crafted just for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
