"use client";

import Link from "next/link";
import { useRef } from "react";
import ConsultationModal, { ConsultationModalRef } from "./ConsultationModal";
import heroImage2 from "../../../public/images/hero_image_higher.png";
import Image from "next/image";

export default function HeroSection() {
  const modalRef = useRef<ConsultationModalRef>(null);

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full flex items-center overflow-hidden bg-surface-container-low"
    >
      <div className="absolute inset-0 z-0">
        {/* src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoyni-5L2jl20-dSls_Qy6TXZvuhfcmwG-qICfspQf9n8jeqt3pLoZQlInw9PATFYRbFvtizcxfmyuhFgLTVIPeP8QwOXZLj5JSsTsfzeltX6t0yy0llpUV05_eFc3d8H2FwAmudY3pkkvU-TqJZfQj7IXd0HBnuPxTQ0gtDZ2tEHxmdYCo6PzLAu1NCqqggcfRfMKaTzo89bMwT02qBfyh0baSlvVZGnL60bFCzcJ9b3gp-rw-jRFtyeNaOEFx2zTtQyq646iYIg" */}
        <Image
          src={heroImage2}
          fill
          alt="Close-up of a high-fidelity pear-cut diamond ring"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent z-10"></div>
      <div className="container mx-auto px-12 relative z-20">
        <div className="max-w-2xl">
          {/* Badge — enters first */}
          <span
            className="animate-fade-in-up font-label text-primary-custom tracking-[0.4em] uppercase text-xs mb-6 block"
            style={{ animationDelay: "200ms" }}
          >
            Legacy of Excellence
          </span>

          {/* Headline — enters second */}
          <h1
            className="animate-fade-in-up font-headline font-light text-7xl lg:text-9xl mb-8 leading-[1.05] tracking-tight text-on-background"
            style={{ animationDelay: "400ms" }}
          >
            Create Your
            <br />
            <span className="italic text-primary-custom font-extralight">
              Forever
            </span>
          </h1>

          {/* Body copy — enters third */}
          <p
            className="animate-fade-in-up font-body text-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed"
            style={{ animationDelay: "600ms" }}
          >
            We know how important the right ring is for this moment.
            <br />
            Let us help you find the perfect one.
          </p>

          {/* CTA buttons — enter last */}
          <div
            className="animate-fade-in-up flex gap-6"
            style={{ animationDelay: "800ms" }}
          >
            <Link
              href="/rings"
              className="hero-gradient px-10 py-5 text-on-primary font-label uppercase tracking-widest text-xs shadow-xl active:scale-[0.99] transition-transform rounded-sm"
            >
              Explore Collection
            </Link>
            <button
              onClick={() => modalRef.current?.open()}
              className="border border-outline-variant shadow-xs px-10 py-5 text-primary-custom font-label uppercase tracking-widest text-xs hover:bg-surface-container-highest transition-colors rounded-sm cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator — enters after everything */}
      <div
        className="animate-fade-in-up absolute bottom-12 right-12 flex flex-col items-center gap-4 z-20"
        style={{ animationDelay: "1100ms" }}
      >
        <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary-custom/60 rotate-90 mb-8">
          Scroll
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary-custom/60 to-transparent"></div>
      </div>

      <ConsultationModal ref={modalRef} />
    </section>
  );
}
