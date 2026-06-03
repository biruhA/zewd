import Link from "next/link";

export default function Footer() {
  function LinkButton({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return (
      <li>
        <Link
          href={href}
          className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block"
        >
          {children}
        </Link>
      </li>
    );
  }

  function Navigation() {
    return (
      <div>
        <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-custom mb-8">
          Navigation
        </h4>
        <ul className="space-y-4 font-body text-sm tracking-wide">
          <LinkButton href="/#hero-section">Hero Section</LinkButton>
          <LinkButton href="/#curated-collections">
            Curated Collections
          </LinkButton>
          <LinkButton href="/#shop-diamonds">Shop Diamonds</LinkButton>
          <LinkButton href="/#diamond-experience">Diamond Experience</LinkButton>
          <LinkButton href="/#bespoke-journey">Bespoke Journey</LinkButton>
          <LinkButton href="/#say-yes">Say Yes</LinkButton>
          <LinkButton href="/#social-grid">Social Grid</LinkButton>
        </ul>
      </div>
    );
  }

  return (
    <footer className="bg-background-custom dark:bg-[#0a1d2d] w-full pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-outline-variant/10 pb-20">
        <FooterHero />
        <Navigation />
        <div>
          <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-custom mb-8">
            Contact Us
          </h4>
          <div className="space-y-6 font-body text-sm text-[#0a1d2d]/70 dark:text-white/70">
            <div>
              <span className="block text-[10px] tracking-widest text-[#0a1d2d]/40 dark:text-white/40 uppercase mb-1">
                Boutique Address
              </span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-custom transition-colors"
              >
                Bole Road, Addis Ababa, Ethiopia
              </a>
            </div>
            <div>
              <span className="block text-[10px] tracking-widest text-[#0a1d2d]/40 dark:text-white/40 uppercase mb-1">
                Inquiries & Booking
              </span>
              <div className="flex flex-col space-y-1">
                <a href="tel:+251921429029" className="hover:text-primary-custom transition-colors">
                  +251 921 429 029
                </a>
                <a href="mailto:consultation@zewddiamonds.com" className="hover:text-primary-custom transition-colors">
                  consultation@zewddiamonds.com
                </a>
              </div>
            </div>
            <div>
              <span className="block text-[10px] tracking-widest text-[#0a1d2d]/40 dark:text-white/40 uppercase mb-1">
                Social Messaging
              </span>
              <div className="flex gap-4 font-label text-[10px] tracking-widest uppercase">
                <a 
                  href="https://wa.me/251921429029" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-custom transition-colors"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://t.me/zewddiamonds" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-custom transition-colors"
                >
                  Telegram
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-custom transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </footer>
  );
}

function FooterHero() {
  return (
    <div className="col-span-1 md:col-span-1">
      <span className="font-headline text-xl text-[#0a1d2d] dark:text-white block mb-6">
        ZEWD DIAMOND & JEWELRY
      </span>
      <p className="font-body text-sm tracking-wide text-[#0a1d2d]/60 dark:text-white/60 leading-relaxed">
        A destination for those who seek the extraordinary. Curating timeless
        brilliance since 1924.
      </p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="max-w-7xl mx-auto px-12 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 font-body text-sm tracking-wide text-[#0a1d2d]/40 dark:text-white/40">
      <span>© 2026 Zewd Diamond and Jewelry. All Rights Reserved.</span>
    </div>
  );
}
