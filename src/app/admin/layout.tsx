import React from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden antialiased bg-surface selection:bg-primary-container-custom selection:text-on-primary-container font-body">
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
            className="flex items-center space-x-3 px-4 py-3 bg-surface-container-highest text-primary-custom font-bold rounded-sm group transition-all duration-300"
          >
            <span className="material-symbols-outlined text-xl">diamond</span>
            <span className="text-sm tracking-wide">Catalog Manager</span>
          </Link>

          <Link
            href="/admin/diamonds"
            className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:text-primary-custom hover:bg-surface-container-high transition-all duration-300 rounded-sm group"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              view_in_ar
            </span>
            <span className="text-sm tracking-wide">List of Diamonds</span>
          </Link>
        </div>

        <div className="mt-auto pt-8 border-t border-outline-variant/10">
          <button className="w-full py-4 hero-gradient text-on-primary rounded flex items-center justify-center space-x-2 text-sm font-label uppercase tracking-widest transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5">
            <span>Publish Changes</span>
            <span className="material-symbols-outlined text-sm">publish</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Mobile App Bar */}
        <header className="md:hidden flex justify-between items-center px-12 h-20 w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 z-50">
          <div className="text-xl font-headline italic tracking-widest text-on-surface font-bold">
            THE ATELIER
          </div>
          <button className="text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
