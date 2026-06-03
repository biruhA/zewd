"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Search, Sun, Moon } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import log from "../../../public/images/zewdinblack.png";
import logWhite from "../../../public/images/icon_white.png";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero-section");

  // Determine dark mode after mount to avoid hydration mismatch
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      "hero-section",
      "curated-collections",
      "shop-diamonds",
      "diamond-experience",
      "bespoke-journey",
      "say-yes",
      "social-grid",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  function LinkButton({
    href,
    isActive = false,
    children,
  }: {
    href: string;
    isActive?: boolean;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        className={
          isActive
            ? "text-primary-custom dark:text-primary-container-custom border-b border-primary-custom/20 pb-1 hover:opacity-80 transition-all font-semibold"
            : "text-[#0a1d2d]/70 dark:text-white/70 hover:text-primary-custom transition-colors duration-500"
        }
      >
        {children}
      </Link>
    );
  }

  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0a1d2d]/80 backdrop-blur-xl flex justify-between items-center px-12 h-24 transition-colors duration-500">
      <div className="flex-1 flex items-center gap-8">
        <Link
          href="/"
          className="text-2xl font-headline tracking-tighter text-[#0a1d2d] dark:text-white"
        >
          {mounted && (
            <Image
              src={isDark ? logWhite : log}
              alt="Logo"
              className="h-full w-44 object-contain"
            />
          )}
        </Link>
        <div className="hidden lg:flex gap-8 font-headline tracking-[0.2em] text-xs uppercase">
          <LinkButton
            href="/#hero-section"
            isActive={isHome && activeSection === "hero-section"}
          >
            Hero Section
          </LinkButton>
          <LinkButton
            href="/#curated-collections"
            isActive={isHome && activeSection === "curated-collections"}
          >
            Curated Collections
          </LinkButton>
          <LinkButton
            href="/#shop-diamonds"
            isActive={isHome && activeSection === "shop-diamonds"}
          >
            Shop Diamonds
          </LinkButton>
          <LinkButton
            href="/#diamond-experience"
            isActive={isHome && activeSection === "diamond-experience"}
          >
            Diamond Experience
          </LinkButton>
          <LinkButton
            href="/#bespoke-journey"
            isActive={isHome && activeSection === "bespoke-journey"}
          >
            Bespoke Journey
          </LinkButton>
          <LinkButton
            href="/#say-yes"
            isActive={isHome && activeSection === "say-yes"}
          >
            Say Yes
          </LinkButton>
          <LinkButton
            href="/#social-grid"
            isActive={isHome && activeSection === "social-grid"}
          >
            Social Grid
          </LinkButton>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {/* <Search className="w-5 h-5 cursor-pointer hover:opacity-80 transition-all text-[#0a1d2d] dark:text-white" /> */}

        <SocialLinks />

        {/* Vertical divider */}
        <div className="w-[1px] h-6 bg-[#0a1d2d]/20 dark:bg-white/20 mx-2"></div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-full hover:bg-[#0a1d2d]/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Toggle Dark Mode"
        >
          {mounted &&
            (isDark ? (
              <Sun className="w-5 h-5 text-[#0a1d2d] dark:text-white" />
            ) : (
              <Moon className="w-5 h-5 text-[#0a1d2d] dark:text-white" />
            ))}
        </button>
      </div>
    </nav>
  );
}
