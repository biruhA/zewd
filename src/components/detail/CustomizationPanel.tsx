"use client";

import { useState } from "react";

interface RingConfig {
  name: string;
  price: number;
  metal: string;
  shape: string;
}

const SHAPES = [
  { id: "round", label: "Round", icon: "diamond" },
  { id: "princess", label: "Princess", icon: "crop_square" },
  { id: "emerald", label: "Emerald", icon: "hexagon" },
  { id: "oval", label: "Oval", icon: "egg" },
];

const METALS = [
  { id: "platinum", label: "Platinum", from: "#e5e4e2", to: "#d3d2d0" },
  { id: "white-gold", label: "White Gold", from: "#f0f1f5", to: "#e6e8fa" },
  {
    id: "yellow-gold",
    label: "18k Yellow Gold",
    from: "#f3e5ab",
    to: "#e8d58a",
  },
  { id: "rose-gold", label: "18k Rose Gold", from: "#d4a3a3", to: "#c58f8f" },
];

const BAND_STYLES = [
  {
    id: "plain",
    label: "Plain",
    description: "Smooth, polished finish.",
    priceModifier: 0,
  },
  {
    id: "pave",
    label: "Pavé",
    description: "Continuous diamond sparkle.",
    priceModifier: 600,
  },
];

const RING_SIZES = ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8"];

interface CustomizationPanelProps {
  ring: RingConfig;
}

export default function CustomizationPanel({ ring }: CustomizationPanelProps) {
  const [selectedShape, setSelectedShape] = useState("round");
  const [selectedMetal, setSelectedMetal] = useState("platinum");
  const [selectedBand, setSelectedBand] = useState("plain");
  const [selectedSize, setSelectedSize] = useState("");

  const bandModifier =
    BAND_STYLES.find((b) => b.id === selectedBand)?.priceModifier || 0;
  const totalPrice = ring.price + bandModifier;

  return (
    <section className="w-full md:w-[35%] lg:w-[35%] bg-surface h-full overflow-y-auto no-scrollbar md:fixed right-0 top-0 pt-8 md:pt-28 pb-12 px-8 lg:px-12 z-30 border-l border-outline-variant/20">
      {/* Header */}
      <header className="mb-12">
        <h1 className="font-headline font-medium text-4xl lg:text-5xl text-on-background tracking-tight mb-3">
          {ring.name}
        </h1>
        <p className="font-body text-sm text-on-surface-variant tracking-[0.2em] uppercase">
          Starting from ${totalPrice.toLocaleString()}
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
            {SHAPES.map((shape) => (
              <button
                key={shape.id}
                onClick={() => setSelectedShape(shape.id)}
                className={`aspect-square flex flex-col items-center justify-center gap-2 group transition-all duration-300 ${
                  selectedShape === shape.id
                    ? "border border-on-background bg-surface-container-lowest shadow-[0_0_15px_rgba(10,29,45,0.05)]"
                    : "border border-outline-variant/50 hover:border-on-background/50 bg-surface-container-lowest"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-2xl font-light transition-colors ${
                    selectedShape === shape.id
                      ? "text-on-background"
                      : "text-on-surface-variant group-hover:text-on-background"
                  }`}
                >
                  {shape.icon}
                </span>
                <span
                  className={`text-[9px] font-label uppercase tracking-widest transition-colors ${
                    selectedShape === shape.id
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
          <div className="flex gap-5">
            {METALS.map((metal) => (
              <button
                key={metal.id}
                onClick={() => setSelectedMetal(metal.id)}
                aria-label={metal.label}
                className={`w-10 h-10 rounded-full ring-offset-4 flex items-center justify-center transition-all shadow-inner ${
                  selectedMetal === metal.id
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
            {METALS.find((m) => m.id === selectedMetal)?.label}
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
                  selectedBand === band.id
                    ? "border border-on-background bg-surface-container-lowest shadow-[0_0_15px_rgba(10,29,45,0.03)]"
                    : "border border-outline-variant/50 hover:border-on-background/50 bg-transparent"
                }`}
              >
                <div>
                  <span
                    className={`font-headline text-base block mb-1 transition-colors ${
                      selectedBand === band.id
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
                {selectedBand === band.id ? (
                  <span className="material-symbols-outlined text-on-background font-light">
                    check
                  </span>
                ) : band.priceModifier > 0 ? (
                  <span className="text-xs font-label tracking-widest text-on-surface-variant group-hover:text-on-background transition-colors">
                    + ${band.priceModifier}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* Ring Size */}
        <div className="pt-8 border-t border-outline-variant/30">
          <div className="flex justify-between items-center mb-4">
            <label
              className="font-headline text-lg text-on-background"
              htmlFor="ring-size"
            >
              Ring Size
            </label>
            <button className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors pb-0.5 border-b border-on-surface-variant/30">
              Size Guide
            </button>
          </div>
          <div className="relative mt-4 border border-outline-variant/50 hover:border-on-background/50 transition-colors">
            <select
              id="ring-size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full appearance-none bg-transparent border-0 py-4 px-5 text-on-background font-body text-sm focus:ring-0 cursor-pointer rounded-none"
            >
              <option value="">Select Size</option>
              {RING_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant font-light">
              expand_more
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-8">
          <button className="w-full py-5 hero-gradient text-on-primary font-body text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-400 flex items-center justify-center gap-4 metallic-shine relative overflow-hidden">
            Add to Collection
            <span className="material-symbols-outlined text-[16px] font-light">
              east
            </span>
          </button>
          <p className="text-center text-[10px] uppercase tracking-widest text-on-surface-variant font-label mt-6 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[14px] font-light">
              verified_user
            </span>
            Complimentary secure shipping &amp; returns
          </p>
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
              Handcrafted in our atelier.
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
