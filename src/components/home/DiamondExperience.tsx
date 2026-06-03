import { Gem, HandHeart } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function DiamondExperience() {
  return (
    <section id="diamond-experience" className="bg-on-background dark:bg-[#071521] text-white py-32 overflow-hidden relative">
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQP4x3yr3rnnWjLwgjH_qMcYoGEVpGXcnlo7zY82AeT2pZdv0LUuRLoNmD4uGENoMja0Q0L7j3QhhFgPipzVZs-lQjJy9H82O7XI4pyAzTPgycquzLB0VvmHwcAEyr26SUEK-a3kkgrtIcqTQqILG_dfRyAuUUvzoyA-wPwcXQbWx9ZaWsF4Fy1cAl59ZS8XchTNsRvkDE0c0x4alSgqEveNeEOFw8ouiT4QHMwXCu-ut-9EdkbK5gL_Q_UeJrIOCZIj0RfSYDIVQ"
              alt="Professional diamond grader inspecting a diamond"
              className="w-full h-auto aspect-square object-cover"
            />
            <div className="absolute -bottom-12 -right-12 w-72 h-40 bg-primary-container-custom/20 dark:bg-[#c1a27a]/10 backdrop-blur-xl border border-white/10 dark:border-white/10 p-8 hidden lg:block">
              <p className="font-headline italic text-xl">
                "Every Zewd diamond is a promise of heritage, crafted with
                mastery."
              </p>
            </div>
          </div>

          <div className="max-w-lg">
            <span className="font-label text-primary-container-custom tracking-[0.4em] uppercase text-xs mb-8 block">
              THE PRIDE OF ETHIOPIA
            </span>
            <h2 className="text-5xl lg:text-6xl mb-10 leading-tight">
              Mastery in every{" "}
              <span className="italic font-light opacity-80 text-primary-container-custom">
                detail.
              </span>
            </h2>

            <div className="space-y-8 font-body text-white/60 leading-relaxed">
              <p>
                At Zewd Diamond & Jewelry, we source only the finest natural,
                lab diamonds & precious gemstones.
              </p>
              <p>
                Each piece is crafted by master jewelers around the world,
                blending exceptional craftsmanship with timeless design to
                create jewelry meant to be cherished for generations.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-white/10 dark:border-white/10">
              <div>
                <Gem
                  strokeWidth={1}
                  className="w-4/6 h-12 mb-4 rounded-full text-primary-container-custom"
                />
                <span className="block text-2xl font-headline mb-2">
                  Certified Diamonds
                </span>
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">
                  IGI certified lab and natural diamonds.
                </span>
              </div>
              <div>
                <HandHeart
                  strokeWidth={1}
                  className="w-4/6 h-12 mb-4 rounded-full text-primary-container-custom"
                />
                <span className="block text-2xl font-headline mb-2">
                  Ethical & Responsible
                </span>
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">
                  Conflict-free sourcing and responsible practices.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
