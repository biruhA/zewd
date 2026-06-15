import type { Metadata } from "next";
import CollectionHero from "@/components/collection/CollectionHero";
import FilterSortBar from "@/components/collection/FilterSortBar";
import ProductGrid from "@/components/collection/ProductGrid";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Engagement Rings | ZEWD DIAMOND & JEWELRY",
  description:
    "A testament to eternal devotion. Discover our curated selection of bespoke engagement ring designs.",
};

export default function RingsPage() {
  return (
    <main className="pt-24">
      <CollectionHero />
      <Suspense fallback={<div>Loading catalog...</div>}>
        <FilterSortBar />
      </Suspense>
      <ProductGrid />
    </main>
  );
}
