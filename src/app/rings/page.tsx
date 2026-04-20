import type { Metadata } from 'next';
import CollectionHero from '@/components/collection/CollectionHero';
import FilterSortBar from '@/components/collection/FilterSortBar';
import ProductGrid from '@/components/collection/ProductGrid';
import ConsultationCta from '@/components/collection/ConsultationCta';

export const metadata: Metadata = {
  title: 'Engagement Rings | THE ATELIER',
  description: 'A testament to eternal devotion. Discover our curated selection of bespoke engagement ring designs.',
};

export default function RingsPage() {
  return (
    <main className="pt-24">
      <CollectionHero />
      <FilterSortBar />
      <ProductGrid />
      <ConsultationCta />
    </main>
  );
}
