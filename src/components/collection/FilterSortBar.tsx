"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import {
  useFilterStore,
  type MetalFilter,
  type StyleFilter,
  type ShapeFilter,
} from "@/store/useFilterStore";
import { MetalType, MetalColor, RingStyle, DiamondShape } from "@prisma/client";

const METALS = [
  {
    id: "PLATINUM" as MetalFilter,
    type: MetalType.PLATINUM,
    label: "Platinum",
    color: "bg-gradient-to-br from-gray-100 to-gray-300",
  },
  {
    id: "YELLOW_GOLD" as MetalFilter,
    type: MetalType.GOLD,
    metalColor: MetalColor.YELLOW,
    label: "18k Yellow Gold",
    color: "bg-gradient-to-br from-amber-100 to-amber-300",
  },
  {
    id: "ROSE_GOLD" as MetalFilter,
    type: MetalType.GOLD,
    metalColor: MetalColor.ROSE,
    label: "18k Rose Gold",
    color: "bg-gradient-to-br from-rose-100 to-rose-300",
  },
  {
    id: "WHITE_GOLD" as MetalFilter,
    type: MetalType.GOLD,
    metalColor: MetalColor.WHITE,
    label: "18k White Gold",
    color: "bg-gradient-to-br from-slate-100 to-slate-300",
  },
];

const STYLES = [
  { id: RingStyle.SOLITAIRE, label: "Solitaire", icon: "ring_solitaire" },
  { id: RingStyle.HALO, label: "Halo", icon: "ring_halo" },
  { id: RingStyle.TOI_ET_MOI, label: "Toi et Moi", icon: "ring_toi_et_moi" },
  { id: RingStyle.DIAMOND_BAND, label: "Diamond Band", icon: "ring_band" },
  { id: RingStyle.TRILOGY, label: "Trilogy", icon: "ring_trilogy" },
];

const SHAPES = [
  { id: DiamondShape.ROUND, label: "Round" },
  { id: DiamondShape.OVAL, label: "Oval" },
  { id: DiamondShape.PEAR, label: "Pear" },
  { id: DiamondShape.HEART, label: "Heart" },
  { id: DiamondShape.CUSHION, label: "Cushion" },
  { id: DiamondShape.EMERALD, label: "Emerald" },
  { id: DiamondShape.PRINCESS, label: "Princess" },
  { id: DiamondShape.MARQUISE, label: "Marquise" },
  { id: DiamondShape.ASSCHER, label: "Asscher" },
  { id: DiamondShape.RADIANT, label: "Radiant" },
  { id: DiamondShape.PEAR_AND_PEAR, label: "Pear & Pear" },
];

// Simple Ring Icon Component
const RingIcon = ({ type }: { type: string }) => {
  return (
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-on-surface-variant/40"
    >
      <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1" />
      {type === "ring_solitaire" && (
        <circle cx="20" cy="7" r="2.5" stroke="currentColor" strokeWidth="1" />
      )}
      {type === "ring_halo" && (
        <>
          <circle cx="20" cy="7" r="2" stroke="currentColor" strokeWidth="1" />
          <circle
            cx="20"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="1 2"
          />
        </>
      )}
      {type === "ring_trilogy" && (
        <>
          <circle cx="20" cy="7" r="2" stroke="currentColor" strokeWidth="1" />
          <circle
            cx="15"
            cy="8"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="25"
            cy="8"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1"
          />
        </>
      )}
      {type === "ring_toi_et_moi" && (
        <>
          <rect
            x="17"
            y="5"
            width="3"
            height="3"
            transform="rotate(45 17 5)"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="23" cy="7" r="2" stroke="currentColor" strokeWidth="1" />
        </>
      )}
      {type === "ring_band" && (
        <path
          d="M13 14H27"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

export default function FilterSortBar() {
  const { metal, setMetal, style, setStyle, shape, setShape, resetFilters } =
    useFilterStore();

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();

  // Pre-select shape from URL param on mount
  useEffect(() => {
    const param = searchParams.get('shape');
    if (param) {
      const shapeKey = param.toUpperCase();
      // Ensure the param matches one of the defined shapes before setting
      const valid = SHAPES.find((s) => s.id === shapeKey as any);
      if (valid) {
        setShape(shapeKey as any);
      }
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setActiveFilter(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <section
      ref={filterRef}
      className="sticky top-24 z-40 bg-white/80 dark:bg-surface-container-low/90 backdrop-blur-md px-12 py-6 border-b border-outline-variant/10"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
        {/* Filter Groups */}
        <div className="flex flex-wrap items-center gap-12">
          {/* Metal Filter */}
          <div className="relative">
            <button
              onClick={() => toggleFilter("metal")}
              className="group cursor-pointer text-left outline-none"
            >
              <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 block mb-1">
                Metal
              </span>
              <div
                className={`flex items-center gap-2 font-body text-sm transition-colors duration-500 ${activeFilter === "metal" ? "text-primary-custom" : "text-on-surface group-hover:text-primary-custom"}`}
              >
                {metal === "ALL"
                  ? "Platinum & Gold"
                  : METALS.find((m) => m.id === metal)?.label}
                <span
                  className={`material-symbols-outlined text-sm transition-transform duration-300 ${activeFilter === "metal" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </div>
            </button>

            {activeFilter === "metal" && (
              <div className="absolute top-14 left-0 w-80 bg-white dark:bg-surface-container-high editorial-shadow p-6 rounded-sm border border-outline-variant/10 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <label className="col-span-2 flex items-center gap-3 cursor-pointer group/label border-b border-outline-variant/10 pb-4">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-outline-variant rounded-full group-hover/label:border-primary-custom transition-colors">
                      <input
                        type="radio"
                        name="metal"
                        className="sr-only peer"
                        checked={metal === "ALL"}
                        onChange={() => setMetal("ALL")}
                      />
                      <div className="w-3 h-3 bg-primary-custom rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xs font-label tracking-widest uppercase text-on-surface">
                      View All
                    </span>
                  </label>
                  {METALS.map((m) => (
                    <label
                      key={m.id}
                      className="flex items-center gap-3 cursor-pointer group/label"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-outline-variant rounded-full group-hover/label:border-primary-custom transition-colors">
                        <input
                          type="radio"
                          name="metal"
                          className="sr-only peer"
                          checked={metal === m.id}
                          onChange={() => setMetal(m.id as MetalFilter)}
                        />
                        <div className="w-3 h-3 bg-primary-custom rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full shadow-inner ${m.color}`}
                      ></div>
                      <span className="text-xs font-body text-on-surface-variant group-hover/label:text-on-surface transition-colors">
                        {m.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Style Filter */}
          <div className="relative">
            <button
              onClick={() => toggleFilter("style")}
              className="group cursor-pointer text-left outline-none"
            >
              <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 block mb-1">
                Style
              </span>
              <div
                className={`flex items-center gap-2 font-body text-sm transition-colors duration-500 ${activeFilter === "style" ? "text-primary-custom" : "text-on-surface group-hover:text-primary-custom"}`}
              >
                {style === "ALL"
                  ? "Solitaire, Halo..."
                  : STYLES.find((s) => s.id === style)?.label}
                <span
                  className={`material-symbols-outlined text-sm transition-transform duration-300 ${activeFilter === "style" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </div>
            </button>

            {activeFilter === "style" && (
              <div className="absolute top-14 left-0 w-[420px] bg-white dark:bg-surface-container-high editorial-shadow p-6 rounded-sm border border-outline-variant/10 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <label className="col-span-2 flex items-center gap-3 cursor-pointer group/label border-b border-outline-variant/10 pb-4">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-outline-variant rounded-full group-hover/label:border-primary-custom transition-colors">
                      <input
                        type="radio"
                        name="style"
                        className="sr-only peer"
                        checked={style === "ALL"}
                        onChange={() => setStyle("ALL")}
                      />
                      <div className="w-3 h-3 bg-primary-custom rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xs font-label tracking-widest uppercase text-on-surface">
                      View All
                    </span>
                  </label>
                  {STYLES.map((s) => (
                    <label
                      key={s.id}
                      className="flex items-center gap-3 cursor-pointer group/label"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-outline-variant rounded-full group-hover/label:border-primary-custom transition-colors">
                        <input
                          type="radio"
                          name="style"
                          className="sr-only peer"
                          checked={style === s.id}
                          onChange={() => setStyle(s.id as StyleFilter)}
                        />
                        <div className="w-3 h-3 bg-primary-custom rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-xs font-body text-on-surface-variant flex-1">
                        {s.label}
                      </span>
                      <RingIcon type={s.icon} />
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Shape Filter */}
          <div className="relative">
            <button
              onClick={() => toggleFilter("shape")}
              className="group cursor-pointer text-left outline-none"
            >
              <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 block mb-1">
                Shape
              </span>
              <div
                className={`flex items-center gap-2 font-body text-sm transition-colors duration-500 ${activeFilter === "shape" ? "text-primary-custom" : "text-on-surface group-hover:text-primary-custom"}`}
              >
                {shape === "ALL"
                  ? "Round, Oval..."
                  : SHAPES.find((s) => s.id === shape)?.label}
                <span
                  className={`material-symbols-outlined text-sm transition-transform duration-300 ${activeFilter === "shape" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </div>
            </button>

            {activeFilter === "shape" && (
              <div className="absolute top-14 left-0 w-[500px] bg-white dark:bg-surface-container-high editorial-shadow p-6 rounded-sm border border-outline-variant/10 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                  <label className="col-span-3 flex items-center gap-3 cursor-pointer group/label border-b border-outline-variant/10 pb-4">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-outline-variant rounded-full group-hover/label:border-primary-custom transition-colors">
                      <input
                        type="radio"
                        name="shape"
                        className="sr-only peer"
                        checked={shape === "ALL"}
                        onChange={() => setShape("ALL")}
                      />
                      <div className="w-3 h-3 bg-primary-custom rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xs font-label tracking-widest uppercase text-on-surface">
                      View All
                    </span>
                  </label>
                  {SHAPES.map((s) => (
                    <label
                      key={s.id}
                      className="flex items-center gap-3 cursor-pointer group/label"
                    >
                      <div className="relative flex items-center justify-center w-5 h-5 border border-outline-variant rounded-full group-hover/label:border-primary-custom transition-colors">
                        <input
                          type="radio"
                          name="shape"
                          className="sr-only peer"
                          checked={shape === s.id}
                          onChange={() => setShape(s.id as ShapeFilter)}
                        />
                        <div className="w-3 h-3 bg-primary-custom rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-xs font-body text-on-surface-variant group-hover/label:text-on-surface transition-colors">
                        {s.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sort & Reset */}
        <div className="flex items-center gap-6">
          <button
            onClick={resetFilters}
            className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant/60 hover:text-primary-custom transition-colors duration-500"
          >
            Reset All
          </button>
          <div className="h-4 w-px bg-outline-variant/30"></div>
          <div className="group cursor-pointer flex items-center gap-2">
            <span className="font-label text-sm text-on-surface">
              Sort: Featured
            </span>
            <span className="material-symbols-outlined text-sm">sort</span>
          </div>
        </div>
      </div>
    </section>
  );
}
