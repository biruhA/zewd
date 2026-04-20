/* eslint-disable @next/next/no-img-element */
export default function DiamondExperience() {
  return (
    <section className="bg-on-background text-white py-32 overflow-hidden relative">
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQP4x3yr3rnnWjLwgjH_qMcYoGEVpGXcnlo7zY82AeT2pZdv0LUuRLoNmD4uGENoMja0Q0L7j3QhhFgPipzVZs-lQjJy9H82O7XI4pyAzTPgycquzLB0VvmHwcAEyr26SUEK-a3kkgrtIcqTQqILG_dfRyAuUUvzoyA-wPwcXQbWx9ZaWsF4Fy1cAl59ZS8XchTNsRvkDE0c0x4alSgqEveNeEOFw8ouiT4QHMwXCu-ut-9EdkbK5gL_Q_UeJrIOCZIj0RfSYDIVQ" 
              alt="Professional diamond grader inspecting a diamond" 
              className="w-full h-auto aspect-square object-cover" 
            />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container-custom/20 backdrop-blur-xl p-8 hidden lg:block">
              <p className="font-headline italic text-xl">"Brilliance is not just seen; it is engineered through decades of mastery."</p>
            </div>
          </div>
          
          <div className="max-w-lg">
            <span className="font-label text-primary-container-custom tracking-[0.4em] uppercase text-xs mb-8 block">The Science of Soul</span>
            <h2 className="text-5xl lg:text-6xl mb-10 leading-tight">Mastery in every <span className="italic font-light opacity-80 text-surface">facet.</span></h2>
            
            <div className="space-y-8 font-body text-surface/70 leading-relaxed">
              <p>We source only the top 0.1% of global diamonds, ensuring each stone possesses a soul and fire that transcends standard certifications.</p>
              <p>Our artisans combine traditional bench techniques with state-of-the-art 3D rendering to visualize the impossible before it is brought to life.</p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
              <div>
                <span className="block text-3xl font-headline mb-2">GIA</span>
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">Certified Diamonds</span>
              </div>
              <div>
                <span className="block text-3xl font-headline mb-2">Ethical</span>
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">Conflict-Free Origin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
