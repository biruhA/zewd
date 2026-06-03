"use client";

import { useEffect, useState, useCallback } from "react";
import { useCustomizationStore } from "@/store/useCustomizationStore";

interface RingConfig {
  name: string;
  basePrice: number;
  images: string[];
  style: {
    id: string;
    label: string;
    description: string;
    priceModifier: number;
  };
  metals: {
    id: string;
    label: string;
    from: string;
    to: string;
    priceModifier: number;
  }[];
  diamonds: {
    id: string;
    label: string;
    icon: string;
    priceModifier: number;
  }[];
}

interface CustomizationPanelProps {
  ring: RingConfig;
}

// TODO: Replace with your actual WhatsApp phone number (include country code, no + or spaces)
const WHATSAPP_PHONE = "251921429029";

export default function CustomizationPanel({ ring }: CustomizationPanelProps) {
  const {
    selectedShape,
    selectedMetal,
    selectedBand,
    setSelectedShape,
    setSelectedMetal,
    setSelectedBand,
    setInitialState,
  } = useCustomizationStore();

  const [selectedSize, setSelectedSize] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Initialize store with default values from the ring data on mount
  useEffect(() => {
    const defaultShape = ring.diamonds.length > 0 ? ring.diamonds[0].id : "";
    const defaultMetal = ring.metals.length > 0 ? ring.metals[0].id : "";
    const defaultBand = ring.style.id;
    setInitialState(defaultShape, defaultMetal, defaultBand);
  }, [ring, setInitialState]);

  // If store is not initialized yet (first render), use defaults for price calc
  const currentShapeId =
    selectedShape || (ring.diamonds.length > 0 ? ring.diamonds[0].id : "");
  const currentMetalId =
    selectedMetal || (ring.metals.length > 0 ? ring.metals[0].id : "");
  const currentBandId = selectedBand || ring.style.id;

  const activeShape = ring.diamonds.find((d) => d.id === currentShapeId);
  const activeMetal = ring.metals.find((m) => m.id === currentMetalId);

  // Create an array with the single style for the UI to map over
  const BAND_STYLES = [ring.style];
  const activeBand = BAND_STYLES.find((b) => b.id === currentBandId);

  const shapeModifier = activeShape?.priceModifier || 0;
  const metalModifier = activeMetal?.priceModifier || 0;
  const bandModifier = activeBand?.priceModifier || 0;

  const totalPrice =
    ring.basePrice + shapeModifier + metalModifier + bandModifier;

  // Save Design: download the first ring image
  const handleSaveDesign = useCallback(async () => {
    if (ring.images.length === 0) return;
    setIsSaving(true);
    try {
      const imageUrl = ring.images[0];
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${ring.name.replace(/\s+/g, "-").toLowerCase()}-design.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      // Fallback: open image in new tab
      window.open(ring.images[0], "_blank");
    } finally {
      setIsSaving(false);
    }
  }, [ring.images, ring.name]);

  // Contact us: open WhatsApp with a pre-filled message
  const handleContactWhatsApp = useCallback(() => {
    const message = `Hi, I'm interested in the *${ring.name}* ring.\n\nMy selections:\n• Shape: ${activeShape?.label || "N/A"}\n• Metal: ${activeMetal?.label || "N/A"}\n• Band: ${activeBand?.label || "N/A"}\n\nI'd like to know more about purchasing this design.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, "_blank");
  }, [ring.name, activeShape, activeMetal, activeBand, totalPrice]);

  return (
    <section className="w-full md:w-[35%] lg:w-[35%] bg-surface h-full overflow-y-auto no-scrollbar md:fixed right-0 top-0 pt-8 md:pt-28 pb-12 px-8 lg:px-12 z-30 border-l border-outline-variant/20">
      {/* Header */}
      <header className="mb-12">
        <h1 className="font-headline font-medium text-4xl lg:text-5xl text-on-background tracking-tight mb-3">
          {ring.name}
        </h1>
        <p className="font-body text-sm text-on-surface-variant tracking-[0.2em] uppercase">
          Starting from £{totalPrice.toLocaleString()}
        </p>
      </header>

      <div className="space-y-12">
        {/* 1. Diamond Shape */}
        <div>
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-headline text-lg text-on-background">Shape</h2>
            <button className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors pb-0.5 border-b border-on-surface-variant/30">
              Shape Guide
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {ring.diamonds.map((shape) => (
              <button
                key={shape.id}
                onClick={() => setSelectedShape(shape.id)}
                className={`aspect-square flex flex-col items-center justify-center gap-2 group transition-all duration-300 ${
                  currentShapeId === shape.id
                    ? "border border-on-background bg-surface-container-lowest shadow-[0_0_15px_rgba(10,29,45,0.05)]"
                    : "border border-outline-variant/50 hover:border-on-background/50 bg-surface-container-lowest"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-2xl font-light transition-colors ${
                    currentShapeId === shape.id
                      ? "text-on-background"
                      : "text-on-surface-variant group-hover:text-on-background"
                  }`}
                >
                  {shape.icon}
                </span>
                <span
                  className={`text-[9px] font-label uppercase tracking-widest transition-colors ${
                    currentShapeId === shape.id
                      ? "text-on-background"
                      : "text-on-surface-variant group-hover:text-on-background"
                  }`}
                >
                  {shape.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Metal */}
        <div>
          <h2 className="font-headline text-lg text-on-background mb-6">
            Metal
          </h2>
          <div className="flex gap-5 flex-wrap">
            {ring.metals.map((metal) => (
              <button
                key={metal.id}
                onClick={() => setSelectedMetal(metal.id)}
                aria-label={metal.label}
                className={`w-10 h-10 rounded-full ring-offset-4 flex items-center justify-center transition-all shadow-inner ${
                  currentMetalId === metal.id
                    ? "ring-1 ring-on-background"
                    : "ring-1 ring-transparent hover:ring-outline-variant"
                }`}
                style={{
                  background: `linear-gradient(to bottom right, ${metal.from}, ${metal.to})`,
                }}
              >
                <span className="w-full h-full rounded-full border border-white/40"></span>
              </button>
            ))}
          </div>
          <p className="text-xs font-body tracking-wider text-on-background uppercase mt-5">
            {activeMetal?.label || "Select Metal"}
          </p>
        </div>

        {/* 3. Band Style */}
        <div>
          <h2 className="font-headline text-lg text-on-background mb-6">
            Band Style
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {BAND_STYLES.map((band) => (
              <button
                key={band.id}
                onClick={() => setSelectedBand(band.id)}
                className={`p-5 text-left group flex justify-between items-center transition-all duration-300 ${
                  currentBandId === band.id
                    ? "border border-on-background bg-surface-container-lowest shadow-[0_0_15px_rgba(10,29,45,0.03)]"
                    : "border border-outline-variant/50 hover:border-on-background/50 bg-transparent"
                }`}
              >
                <div>
                  <span
                    className={`font-headline text-base block mb-1 transition-colors ${
                      currentBandId === band.id
                        ? "text-on-background"
                        : "text-on-surface-variant group-hover:text-on-background"
                    }`}
                  >
                    {band.label}
                  </span>
                  <span className="text-xs text-on-surface-variant font-body font-light block">
                    {band.description}
                  </span>
                </div>
                {currentBandId === band.id ? (
                  <span className="material-symbols-outlined text-on-background font-light">
                    check
                  </span>
                ) : band.priceModifier > 0 ? (
                  <span className="text-xs font-label tracking-widest text-on-surface-variant group-hover:text-on-background transition-colors">
                    + £{band.priceModifier}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-8 space-y-3">
          <button
            onClick={handleSaveDesign}
            disabled={isSaving}
            className="w-full py-5 border border-on-background text-on-background font-body text-xs tracking-[0.2em] uppercase hover:bg-on-background hover:text-surface transition-all duration-400 flex items-center justify-center gap-4 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "Save Design"}
            <span className="material-symbols-outlined text-[16px] font-light">
              {isSaving ? "hourglass_empty" : "download"}
            </span>
          </button>
          <button
            onClick={handleContactWhatsApp}
            className="w-full py-5 hero-gradient text-on-primary font-body text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-400 flex items-center justify-center gap-4 metallic-shine relative overflow-hidden"
          >
            Contact us to Purchase
            <span className="material-symbols-outlined text-[16px] font-light">
              east
            </span>
          </button>
        </div>

        {/* Collapsible Details */}
        <div className="mt-12 space-y-0 border-t border-outline-variant/30 pt-4">
          <details className="group border-b border-outline-variant/30 py-5">
            <summary className="flex justify-between items-center cursor-pointer font-headline text-base text-on-background list-none [&::-webkit-details-marker]:hidden">
              Design Details
              <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-45 transition-transform duration-300 font-light">
                add
              </span>
            </summary>
            <div className="pt-6 text-sm text-on-surface-variant font-body font-light leading-relaxed">
              A delicate 4-prong setting secures the center diamond while
              maximizing light return. The knife-edge band creates a razor-thin
              silhouette from the top view, emphasizing the scale of the stone.
              Handcrafted in our studio.
            </div>
          </details>
          <details className="group border-b border-outline-variant/30 py-5">
            <summary className="flex justify-between items-center cursor-pointer font-headline text-base text-on-background list-none [&::-webkit-details-marker]:hidden">
              Delivery &amp; Packaging
              <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-45 transition-transform duration-300 font-light">
                add
              </span>
            </summary>
            <div className="pt-6 text-sm text-on-surface-variant font-body font-light leading-relaxed">
              Presented in our signature handcrafted leather box. Insured
              overnight shipping included. Please allow 3-4 weeks for bespoke
              creation.
            </div>
          </details>
          <details className="group border-b border-outline-variant/30 py-5">
            <summary className="flex justify-between items-center cursor-pointer font-headline text-base text-on-background list-none [&::-webkit-details-marker]:hidden">
              Certification
              <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-45 transition-transform duration-300 font-light">
                add
              </span>
            </summary>
            <div className="pt-6 text-sm text-on-surface-variant font-body font-light leading-relaxed">
              Every diamond above 0.30ct is accompanied by a GIA Gemological
              Certificate. Our metals are independently assayed and hallmarked,
              guaranteeing purity and provenance.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
