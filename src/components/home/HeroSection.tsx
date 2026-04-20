import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoyni-5L2jl20-dSls_Qy6TXZvuhfcmwG-qICfspQf9n8jeqt3pLoZQlInw9PATFYRbFvtizcxfmyuhFgLTVIPeP8QwOXZLj5JSsTsfzeltX6t0yy0llpUV05_eFc3d8H2FwAmudY3pkkvU-TqJZfQj7IXd0HBnuPxTQ0gtDZ2tEHxmdYCo6PzLAu1NCqqggcfRfMKaTzo89bMwT02qBfyh0baSlvVZGnL60bFCzcJ9b3gp-rw-jRFtyeNaOEFx2zTtQyq646iYIg"
          alt="Close-up of a high-fidelity pear-cut diamond ring"
          className="w-full h-full object-cover scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent z-10"></div>
      <div className="container mx-auto px-12 relative z-20">
        <div className="max-w-2xl">
          <span className="font-label text-primary-custom tracking-[0.4em] uppercase text-xs mb-6 block">
            Legacy of Excellence
          </span>
          <h1 className="text-7xl lg:text-9xl mb-8 leading-[1.1] tracking-tight">
            CRAFTING <br />
            <span className="italic">FOREVER</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant mb-12 max-w-md leading-relaxed">
            Unrivaled brilliance curated for life's most profound promises.
            Discover the world of bespoke high-jewelry.
          </p>
          <div className="flex gap-6">
            <Link
              href="/rings"
              className="hero-gradient px-10 py-5 text-on-primary font-label uppercase tracking-widest text-xs shadow-xl active:scale-[0.99] transition-transform rounded-sm"
            >
              Explore Collection
            </Link>
            <button className="border border-outline-variant/40 px-10 py-5 text-primary-custom font-label uppercase tracking-widest text-xs hover:bg-surface-container-highest transition-colors rounded-sm">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      {/* Interactive Scroll Indicator */}
      <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4 z-20">
        <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-custom/60 rotate-90 mb-8">
          Scroll
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary-custom/60 to-transparent"></div>
      </div>
    </section>
  );
}
