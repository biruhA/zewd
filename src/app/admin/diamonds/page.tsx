import { getCatalogRings } from "@/app/actions/catalog";
import AdminProductCard from "@/components/admin/AdminProductCard";
import Link from "next/link";

export const metadata = {
  title: "Diamond Inventory | Admin Studio",
};

export default async function AdminDiamondListPage() {
  const rings = await getCatalogRings();

  return (
    <div className="px-6 py-12 md:py-24 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-headline text-5xl lg:text-6xl text-on-surface tracking-tight">
            Diamond <span className="italic">Inventory</span>
          </h2>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Manage your curated collection of high-fidelity jewelry. From here,
            you can review configurations or remove pieces from the public
            catalog.
          </p>
        </div>
        <Link
          href="/admin"
          className="hero-gradient px-8 py-4 text-on-primary font-label uppercase tracking-widest text-xs shadow-xl active:scale-[0.98] transition-transform rounded-sm flex items-center gap-3"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Add New Setting
        </Link>
      </div>

      <div className="w-full h-px bg-outline-variant/10"></div>

      {rings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rings.map((ring: any) => (
            <AdminProductCard key={ring.id} ring={ring} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 space-y-6 text-center">
          <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">
              inventory_2
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="font-headline text-2xl text-on-surface">
              No Rings Found
            </h3>
            <p className="font-body text-on-surface-variant max-w-xs">
              Your inventory is currently empty. Start by adding your first
              masterpiece.
            </p>
          </div>
          <Link
            href="/admin"
            className="text-primary-custom font-label uppercase tracking-widest text-xs border-b border-primary-custom/20 hover:border-primary-custom pb-1 transition-all"
          >
            Create New Ring
          </Link>
        </div>
      )}
    </div>
  );
}
