/* eslint-disable @next/next/no-img-element */
export default function ConsultationCta() {
  return (
    <section className="my-24 mx-12">
      <div className="max-w-7xl mx-auto bg-surface-container py-24 px-12 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <h2 className="font-headline text-4xl md:text-5xl text-on-background mb-6">
            Create something truly unique.
          </h2>
          <p className="font-body text-on-surface-variant/80 mb-10 leading-relaxed">
            Our master artisans work closely with you to design a one-of-a-kind engagement ring that captures your personal story perfectly.
          </p>
          <button className="hero-gradient text-on-primary px-10 py-5 rounded-sm font-label text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:opacity-90 active:scale-[0.98]">
            Book a Consultation
          </button>
        </div>
        <div className="relative w-full md:w-1/3 aspect-square group">
          <div className="absolute inset-0 border border-primary-custom/20 scale-105 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQm4WmUh-fCxKdEBOGC6NWEQDn-YLiz_rFLgJF4vCo0aoPg0EyI7JDkdfxxr8g16EzQG65JjrkPkTqtqJZwF_YcfH8IGu769hVdBiIOkHTV-q17xXgsgqw8F1m4HvB0NGLPaIHcdN2m5Bd0AQ59xDplOJNUH028aBZhkAWHtPA9Ru0GeI4qOw6FBNnaqh-xZ4fNcHesw-VoYuIFXPcrVSiI90cRgoJFDI5aG5p6UH_CCaQkznexDEyqGYe5my-UeGqOkrdqFzIkFc"
            alt="Artisanal jeweler sketching ring designs"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
