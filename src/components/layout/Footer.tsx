import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-custom dark:bg-[#0a1d2d] w-full pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-outline-variant/10 pb-20">
        <div className="col-span-1 md:col-span-1">
          <span className="font-headline text-xl text-[#0a1d2d] dark:text-white block mb-6">THE ATELIER</span>
          <p className="font-body text-sm tracking-wide text-[#0a1d2d]/60 dark:text-white/60 leading-relaxed">
            A destination for those who seek the extraordinary. Curating timeless brilliance since 1924.
          </p>
        </div>
        <div>
          <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-custom mb-8">Navigation</h4>
          <ul className="space-y-4 font-body text-sm tracking-wide">
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">Engagement Rings</Link></li>
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">Wedding Rings</Link></li>
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">Diamonds</Link></li>
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">Bespoke</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-custom mb-8">Information</h4>
          <ul className="space-y-4 font-body text-sm tracking-wide">
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">Shipping & Returns</Link></li>
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
            <li><Link href="#" className="text-[#0a1d2d]/60 dark:text-white/60 hover:text-primary-custom hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-custom mb-8">Newsletter</h4>
          <p className="font-body text-xs text-on-surface-variant mb-6">Join our exclusive mailing list for updates on new collections and atelier events.</p>
          <div className="relative border-b border-outline-variant/40 pb-2">
            <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 w-full text-xs placeholder:text-outline p-0 uppercase tracking-widest outline-none" />
            <button className="absolute right-0 top-0 material-symbols-outlined text-primary-custom text-lg">arrow_forward</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 font-body text-sm tracking-wide text-[#0a1d2d]/40 dark:text-white/40">
        <span>© 2024 The Editorial Atelier. All Rights Reserved.</span>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary-custom transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-primary-custom transition-colors">Pinterest</Link>
          <Link href="#" className="hover:text-primary-custom transition-colors">Vimeo</Link>
        </div>
      </div>
    </footer>
  );
}
