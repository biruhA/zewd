/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface DiamondShape {
  name: string;
  icon: string;
  href: string;
}

const shapes: DiamondShape[] = [
  {
    name: "Round",
    icon: "https://qs.imgix.net/images/round-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/round",
  },
  {
    name: "Oval",
    icon: "https://qs.imgix.net/images/oval-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/oval",
  },
  {
    name: "Cushion",
    icon: "https://qs.imgix.net/images/cushion-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/cushion",
  },
  {
    name: "Pear",
    icon: "https://qs.imgix.net/images/pear-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/pear",
  },
  {
    name: "Emerald",
    icon: "https://qs.imgix.net/images/emerald-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/emerald-cut",
  },
  {
    name: "Princess",
    icon: "https://qs.imgix.net/images/princess-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/princess",
  },
  {
    name: "Heart",
    icon: "https://qs.imgix.net/images/heart-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/heart",
  },
  {
    name: "Marquise",
    icon: "https://qs.imgix.net/images/marquise-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/marquise",
  },
  {
    name: "Asscher",
    icon: "https://qs.imgix.net/images/asscher-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/asscher-cut-engagement-rings",
  },
  {
    name: "Radiant",
    icon: "https://qs.imgix.net/images/radiant-diamond-shape-icon.png?auto=format&q=60&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=200&h=200",
    href: "/engagement-rings/radiant-cut-engagement-rings",
  },
];

export default function ShopDiamonds() {
  return (
    <section id="shop-diamonds" className="py-24 bg-surface border-t border-surface-container-low">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-headline tracking-wide text-on-surface">
            SHOP DIAMONDS <span className="italic font-light">BY SHAPE</span>
          </h2>
          <p className="text-on-surface-variant font-body text-sm tracking-wide">
            Explore our curated selection of conflict-free diamonds cut to
            perfection.
          </p>
        </div>

        {/* Elegant container: scrolls horizontally on mobile, wraps on tablets, fits single-line on laptops/desktops */}
        <div className="flex flex-row overflow-x-auto md:overflow-x-visible md:flex-wrap lg:flex-nowrap justify-start md:justify-center  pb-8 md:pb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary-custom/20 scrollbar-track-transparent">
          <div className="flex-1 min-w-[20px] md:hidden" />

          {shapes.map((shape) => (
            <Link
              key={shape.name}
              href={shape.href}
              className="flex-none w-28 md:w-24 lg:w-28 xl:w-32 group flex flex-col items-center justify-between p-4 hover:border-primary-custom/30 rounded-lg transition-all duration-500 ease-out hover:-translate-y-2 snap-center cursor-pointer "
            >
              <div className="relative w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center overflow-hidden">
                <img
                  src={shape.icon}
                  alt={`${shape.name} cut diamond icon`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-md filter brightness-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 md:mt-6 font-label uppercase tracking-widest text-[10px] md:text-xs text-on-surface group-hover:text-primary-custom transition-colors duration-300">
                {shape.name}
              </div>
            </Link>
          ))}

          <div className="flex-1 min-w-[20px] md:hidden" />
        </div>
      </div>
    </section>
  );
}
