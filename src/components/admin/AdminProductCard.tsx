"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { deleteCatalogRing } from "@/app/actions/catalog";
import Link from "next/link";

interface AdminProductCardProps {
  ring: {
    id: string;
    name: string;
    style: string;
    basePrice: number;
    images: {
      url: string;
      isHero: boolean;
    }[];
  };
}

export default function AdminProductCard({ ring }: AdminProductCardProps) {
  const [isPending, startTransition] = useTransition();
  const [isLoaded, setIsLoaded] = useState(false);

  const heroImage =
    ring.images?.find((img) => img.isHero)?.url || ring.images?.[0]?.url;

  console.log("heroImage:$heroImage");

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (confirm(`Are you sure you want to delete "${ring.name}"?`)) {
      startTransition(async () => {
        await deleteCatalogRing(ring.id);
      });
    }
  };

  return (
    <div
      className={`group relative flex flex-col h-full bg-white/40 dark:bg-surface-container-low/40 hover:bg-white dark:hover:bg-surface-container-low p-5 transition-all duration-500 rounded-sm border border-outline-variant/5 hover:border-outline-variant/20 hover:editorial-shadow ${isPending ? "opacity-50 grayscale" : ""}`}
    >
      {/* Delete Button */}
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="absolute top-8 right-8 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-surface/90 text-on-surface-variant hover:text-error hover:scale-110 transition-all flex items-center justify-center border border-outline-variant/10 shadow-sm opacity-0 group-hover:opacity-100"
        title="Delete Ring"
      >
        <span className="material-symbols-outlined text-xl">delete</span>
      </button>

      <Link href={`/rings/${ring.id}`} className="flex flex-col h-full">
        <div className="relative aspect-4/5 bg-surface-container-lowest overflow-hidden transition-all duration-700 ease-in-out">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={ring.name}
              fill
              className={`object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 ${
                isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
              }`}
              onLoadingComplete={() => setIsLoaded(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-low text-on-surface-variant/20 space-y-4">
              <span className="material-symbols-outlined text-6xl">
                diamond
              </span>
              <span className="font-label text-[10px] tracking-widest uppercase">
                No Image Available
              </span>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col flex-grow">
          <h3 className="font-headline text-2xl text-on-background dark:text-white mb-1">
            {ring.name}
          </h3>
          <p className="font-body text-sm text-on-surface-variant/70 mb-5 flex-grow">
            {ring.style}
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
            <span className="font-body text-lg text-primary-custom">
              From £{ring.basePrice.toLocaleString()}
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
    </div>
  );
}
