'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function TopNavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0a1d2d]/80 backdrop-blur-xl flex justify-between items-center px-12 h-24 transition-colors duration-500">
      <div className="flex-1 flex items-center gap-8">
        <Link href="/" className="text-2xl font-headline tracking-tighter text-[#0a1d2d] dark:text-white">
          THE ATELIER
        </Link>
        <div className="hidden lg:flex gap-8 font-headline tracking-[0.2em] text-xs uppercase">
          <Link href="/rings" className="text-primary-custom dark:text-primary-container-custom border-b border-primary-custom/20 pb-1 hover:opacity-80 transition-all">
            Engagement Rings
          </Link>
          <Link href="#" className="text-[#0a1d2d]/70 dark:text-white/70 hover:text-primary-custom transition-colors duration-500">
            Wedding Rings
          </Link>
          <Link href="#" className="text-[#0a1d2d]/70 dark:text-white/70 hover:text-primary-custom transition-colors duration-500">
            Diamonds
          </Link>
          <Link href="#" className="text-[#0a1d2d]/70 dark:text-white/70 hover:text-primary-custom transition-colors duration-500">
            Bespoke
          </Link>
          <Link href="#" className="text-[#0a1d2d]/70 dark:text-white/70 hover:text-primary-custom transition-colors duration-500">
            About Us
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="material-symbols-outlined text-xl cursor-pointer hover:opacity-80 transition-all text-[#0a1d2d] dark:text-white">search</span>
        <span className="material-symbols-outlined text-xl cursor-pointer hover:opacity-80 transition-all text-[#0a1d2d] dark:text-white">person</span>
        <span className="material-symbols-outlined text-xl cursor-pointer hover:opacity-80 transition-all text-[#0a1d2d] dark:text-white">favorite</span>
        <span className="material-symbols-outlined text-xl cursor-pointer hover:opacity-80 transition-all text-[#0a1d2d] dark:text-white">shopping_bag</span>
        
        {/* Vertical divider */}
        <div className="w-[1px] h-6 bg-[#0a1d2d]/20 dark:bg-white/20 mx-2"></div>
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-full hover:bg-[#0a1d2d]/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {mounted && (
            <span className="material-symbols-outlined text-xl text-[#0a1d2d] dark:text-white">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
