"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import { useFilterStore } from "@/store/useFilterStore";
import { getFilteredRings } from "@/app/actions/ringActions";
import type { CatalogRing } from "@prisma/client";

function ProductCard({ ring }: { ring: CatalogRing }) {
  // Find the hero image or use the first one
  const heroImage = ring.images.find(img => img.isHero) || ring.images[0];
  
  // Format price
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(ring.basePrice);

  // Helper to format labels
  const styleLabel = ring.style.charAt(0) + ring.style.slice(1).toLowerCase().replace('_', ' ');
  const mainDiamond = ring.diamonds[0];
  const shapeLabel = mainDiamond ? mainDiamond.shape.charAt(0) + mainDiamond.shape.slice(1).toLowerCase().replace('_', ' ') : "";

  return (
<Link
      href={`/rings/${ring.id}`}
      className="group cursor-pointer flex flex-col h-full bg-surface-container-lowest dark:bg-surface-container-highest hover:bg-surface-container-low dark:hover:bg-surface-container-highest p-5 transition-colors duration-500 rounded-sm border border-outline-variant/10 dark:border-outline-variant/20 hover:border-outline-variant/30 hover:editorial-shadow"
    >
      <div className="relative aspect-[4/5] bg-surface-container-lowest dark:bg-surface-container-highest overflow-hidden transition-all duration-700 ease-in-out">
        {heroImage && (
          <img
            src={heroImage.url}
            alt={ring.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        )}
      </div>

      <div className="mt-6 flex flex-col flex-grow">
        <h3 className="font-headline text-2xl text-on-background dark:text-on-surface mb-1">
          {ring.name}
        </h3>
        <p className="font-body text-sm text-on-surface-variant/70 dark:text-on-primary-variant mb-5 flex-grow">
          {styleLabel} · {shapeLabel}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
          <span className="font-body text-lg text-primary-custom">
            From {formattedPrice}
          </span>
          <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary-custom transition-colors">
            <span className="font-label text-[10px] tracking-[0.2em] uppercase">
              View Details
            </span>
            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductGrid() {
  const { metal, style, shape } = useFilterStore();
  const [rings, setRings] = useState<CatalogRing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRings() {
      setIsLoading(true);
      try {
        const data = await getFilteredRings({ metal, style, shape });
        setRings(data);
      } catch (error) {
        console.error("Failed to fetch rings:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRings();
  }, [metal, style, shape]);

  return (
    <section className="px-12 py-24 max-w-7xl mx-auto">
      {isLoading ? (
        <div className="py-24 flex justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-2 border-primary-custom border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/40">Curating collection...</p>
          </div>
        </div>
      ) : rings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rings.map((ring) => (
            <ProductCard key={ring.id} ring={ring} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="font-headline text-3xl text-on-surface-variant/40 mb-4">No matching designs found</p>
          <p className="font-body text-sm text-on-surface-variant/60">Try adjusting your filters to explore more of our collection.</p>
        </div>
      )}

      {/* Load More / Pagination */}
      <div className="mt-32 flex flex-col items-center">
        <div className="w-64 h-px bg-outline-variant/30 mb-8"></div>
        <button className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary-custom transition-colors flex items-center gap-4 group">
          Discover More Designs
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-y-1">
            expand_more
          </span>
        </button>
      </div>
    </section>
  );
}
