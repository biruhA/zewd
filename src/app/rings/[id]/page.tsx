import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ImageGallery from "@/components/detail/ImageGallery";
import CustomizationPanel from "@/components/detail/CustomizationPanel";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const rings = await prisma.catalogRing.findMany({
    select: { id: true },
  });
  return rings.map((ring) => ({ id: ring.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ring = await prisma.catalogRing.findUnique({
    where: { id },
    select: { name: true },
  });

  return {
    title: ring ? `${ring.name} | THE ATELIER` : "Ring Details | THE ATELIER",
    description:
      "Discover and customize your perfect engagement ring at The Atelier.",
  };
}

export default async function RingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const ring = await prisma.catalogRing.findUnique({
    where: { id },
  });

  if (!ring) {
    notFound();
  }

  // Format images for ImageGallery
  const imageUrls = ring.images.map((img) => img.url);

  // Format default options for CustomizationPanel
  const defaultMetal = ring.metals[0];
  const defaultDiamond = ring.diamonds[0];
  
  // Format Metals
  const formattedMetals = ring.metals.map((metal) => {
    let from = "#e5e4e2";
    let to = "#d3d2d0";
    let label = "Platinum";
    let id = "platinum";

    if (metal.type === "GOLD") {
      if (metal.color === "YELLOW") {
        from = "#f3e5ab";
        to = "#e8d58a";
        label = `${metal.purity} Yellow Gold`;
        id = `yellow-gold-${metal.purity}`;
      } else if (metal.color === "ROSE") {
        from = "#d4a3a3";
        to = "#c58f8f";
        label = `${metal.purity} Rose Gold`;
        id = `rose-gold-${metal.purity}`;
      } else if (metal.color === "WHITE") {
        from = "#f0f1f5";
        to = "#e6e8fa";
        label = `${metal.purity} White Gold`;
        id = `white-gold-${metal.purity}`;
      }
    }

    return { id, label, from, to, priceModifier: metal.priceModifier };
  });

  // Format Diamonds
  const getIconForShape = (shape: string) => {
    switch (shape) {
      case "ROUND": return "diamond";
      case "PRINCESS": return "crop_square";
      case "EMERALD": return "hexagon";
      case "OVAL": return "egg";
      case "PEAR": return "water_drop";
      case "HEART": return "favorite";
      default: return "diamond";
    }
  };

  const formattedDiamonds = ring.diamonds.map((diamond) => {
    const label = diamond.shape.charAt(0) + diamond.shape.slice(1).toLowerCase().replace('_', ' ');
    return {
      id: diamond.shape,
      label,
      icon: getIconForShape(diamond.shape),
      priceModifier: diamond.priceModifier
    };
  });

  // Format Style
  const styleLabel = ring.style.charAt(0) + ring.style.slice(1).toLowerCase().replace('_', ' ');
  const formattedStyle = {
    id: ring.style,
    label: styleLabel,
    description: "Smooth, polished finish.",
    priceModifier: 0,
  };

  return (
    <main className="min-h-screen pt-24 md:pt-0 flex flex-col md:flex-row">
      {/* Left Showcase Canvas (65%) */}
      <section className="w-full md:w-[65%] lg:w-[65%] min-h-[614px] md:min-h-screen bg-background-custom relative flex flex-col p-8 md:p-12 md:pt-28">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-label tracking-widest uppercase mb-8">
          <Link
            href="/"
            className="hover:text-on-background transition-colors duration-300"
          >
            Home
          </Link>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <Link
            href="/rings"
            className="hover:text-on-background transition-colors duration-300"
          >
            Engagement Rings
          </Link>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <span className="text-on-background font-medium">{ring.name}</span>
        </div>

        {/* Image Gallery */}
        <ImageGallery images={imageUrls} name={ring.name} />

        {/* Description/Quote */}
        <div className="mt-12 hidden md:block border-t border-outline-variant/30 pt-8">
          <p className="font-headline italic text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            {ring.description ||
              "A study in singular perfection. The setting disappears, allowing the light to command the narrative."}
          </p>
        </div>
      </section>

      {/* Right Customization Panel (35%) */}
      <div className="h-full">
        <CustomizationPanel
          ring={{
            name: ring.name,
            basePrice: ring.basePrice,
            style: formattedStyle,
            metals: formattedMetals,
            diamonds: formattedDiamonds,
          }}
        />
      </div>
    </main>
  );
}
