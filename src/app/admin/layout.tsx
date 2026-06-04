"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden antialiased bg-surface selection:bg-primary-container-custom selection:text-on-primary-container font-body pt-20">
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-8 px-6 space-y-4 w-72 border-r border-outline-variant/10 bg-surface-container-low shrink-0 z-10 transition-colors duration-500">
        <div className="mb-8 px-4 flex items-center space-x-3">
          <span className="material-symbols-outlined text-3xl text-primary-custom">
            diamond
          </span>
          <div>
            <h1 className="font-headline text-lg text-on-surface font-bold tracking-tight">
              Admin Studio
            </h1>
            <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-[0.2em] mt-1">
              Precision Management
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <Link
            href="/admin"
            className={`flex items-center space-x-3 px-4 py-3 rounded-sm group transition-all duration-300 ${pathname === "/admin" ? "bg-surface-container-highest text-primary-custom font-bold" : "text-on-surface-variant hover:text-primary-custom hover:bg-surface-container-high"}`}
          >
            <span className="material-symbols-outlined text-xl">diamond</span>
            <span className="text-sm tracking-wide">Catalog Manager</span>
          </Link>

          <Link
            href="/admin/diamonds"
            className={`flex items-center space-x-3 px-4 py-3 rounded-sm group transition-all duration-300 ${pathname === "/admin/diamonds" ? "text-primary-custom bg-surface-container-high" : "text-on-surface-variant hover:text-primary-custom hover:bg-surface-container-high"}`}
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              view_in_ar
            </span>
            <span className="text-sm tracking-wide">List of Diamonds</span>
          </Link>

          <Link
            href="/admin/proposals"
            className={`flex items-center space-x-3 px-4 py-3 rounded-sm group transition-all duration-300 ${pathname === "/admin/proposals" ? "text-primary-custom bg-surface-container-high" : "text-on-surface-variant hover:text-primary-custom hover:bg-surface-container-high"}`}
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              favorite
            </span>
            <span className="text-sm tracking-wide">Proposals Gallery</span>
          </Link>
        </div>
        {/* No publish button needed here */}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-scroll">
        {children}
      </main>
    </div>
  );
}
