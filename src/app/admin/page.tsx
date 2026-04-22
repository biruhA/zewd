'use client';

import React, { useState, useTransition } from 'react';
import { createCatalogRing } from '@/app/actions/catalog';

// Types matching the Prisma schema
interface JewelryImage {
  url: string;
  metalColor: string;
  diamondShape: string;
  isHero: boolean;
}

interface MetalOption {
  type: 'GOLD' | 'PLATINUM';
  color: 'YELLOW' | 'WHITE' | 'ROSE';
  purity: string;
  priceModifier: number;
}

interface DiamondOption {
  shape: string;
  carat: number;
  color: string;
  clarity: string;
  cut: string;
  origin: string;
  priceModifier: number;
}

export default function CatalogManagerPage() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<boolean | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [style, setStyle] = useState('SOLITAIRE');
  const [description, setDescription] = useState('');
  const [basePrice, setBasePrice] = useState('');

  // Dynamic Arrays
  const [images, setImages] = useState<JewelryImage[]>([]);
  const [metals, setMetals] = useState<MetalOption[]>([]);
  const [diamonds, setDiamonds] = useState<DiamondOption[]>([]);

  // Handlers for Images
  const addImage = () => {
    setImages([...images, { url: '', metalColor: 'WHITE', diamondShape: 'ROUND', isHero: images.length === 0 }]);
  };
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  const updateImage = (index: number, field: keyof JewelryImage, value: any) => {
    const newImages = [...images];
    newImages[index] = { ...newImages[index], [field]: value };
    // Ensure only one hero image
    if (field === 'isHero' && value === true) {
      newImages.forEach((img, i) => { if (i !== index) img.isHero = false; });
    }
    setImages(newImages);
  };

  // Handlers for Metals
  const addMetal = () => {
    setMetals([...metals, { type: 'GOLD', color: 'YELLOW', purity: '18k', priceModifier: 0 }]);
  };
  const removeMetal = (index: number) => {
    setMetals(metals.filter((_, i) => i !== index));
  };
  const updateMetal = (index: number, field: keyof MetalOption, value: any) => {
    const newMetals = [...metals];
    newMetals[index] = { ...newMetals[index], [field]: value };
    setMetals(newMetals);
  };

  // Handlers for Diamonds
  const addDiamond = () => {
    setDiamonds([...diamonds, { shape: 'ROUND', carat: 1.0, color: 'G', clarity: 'VS1', cut: 'Excellent', origin: 'Natural', priceModifier: 0 }]);
  };
  const removeDiamond = (index: number) => {
    setDiamonds(diamonds.filter((_, i) => i !== index));
  };
  const updateDiamond = (index: number, field: keyof DiamondOption, value: any) => {
    const newDiamonds = [...diamonds];
    newDiamonds[index] = { ...newDiamonds[index], [field]: value };
    setDiamonds(newDiamonds);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await createCatalogRing({
        name,
        style,
        description,
        basePrice,
        images,
        metals,
        diamonds
      });
      if (result.success) {
        setSuccess(true);
        // Reset form or redirect
      } else {
        setSuccess(false);
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16 pb-40">
      <div className="space-y-4">
        <h2 className="font-headline text-5xl lg:text-6xl text-on-surface tracking-tight">Configure Setting</h2>
        <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Define the structural base, imagery, and variant permutations for this piece. 
          Each entry should reflect the precision and heritage of The Atelier.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-16">
        {/* Section 1: Base Details */}
        <section className="bg-white dark:bg-surface-container-low rounded-sm p-12 space-y-10 border border-outline-variant/10 editorial-shadow relative group">
          <div className="absolute -left-[1px] top-12 w-[3px] h-16 bg-primary-custom opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <header className="border-b border-outline-variant/10 pb-6 mb-8">
            <h3 className="font-headline text-3xl text-on-surface">1. Base Details</h3>
            <p className="font-body text-sm text-on-surface-variant mt-2 tracking-wide uppercase">Core identifiers and foundational pricing.</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="space-y-2 relative pt-6">
              <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em] transition-all">Setting Name</label>
              <input 
                className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-3 text-on-surface transition-all outline-none"
                placeholder="e.g. The Valencia Halo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 relative pt-6">
              <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Design Style</label>
              <select 
                className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-3 text-on-surface appearance-none outline-none cursor-pointer"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                <option value="SOLITAIRE">Solitaire</option>
                <option value="HALO">Halo</option>
                <option value="TOI_ET_MOI">Toi et Moi</option>
                <option value="DIAMOND_BAND">Diamond Band</option>
                <option value="TRILOGY">Trilogy</option>
              </select>
            </div>
            <div className="space-y-2 relative pt-6 md:col-span-2">
              <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Editorial Description</label>
              <textarea 
                className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-3 text-on-surface resize-none min-h-[100px] outline-none"
                placeholder="Craft a narrative for this piece..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2 relative pt-6">
              <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Base Price (USD)</label>
              <input 
                type="number"
                className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-3 text-on-surface outline-none"
                placeholder="0.00"
                value={basePrice}
                onChange={(e) => setBasePrice(e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Section 2: Imagery Assets */}
        <section className="bg-white dark:bg-surface-container-low rounded-sm p-12 space-y-10 border border-outline-variant/10 editorial-shadow relative group">
          <div className="absolute -left-[1px] top-12 w-[3px] h-16 bg-primary-custom opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <header className="border-b border-outline-variant/10 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h3 className="font-headline text-3xl text-on-surface">2. Imagery Assets</h3>
              <p className="font-body text-sm text-on-surface-variant mt-2 tracking-wide uppercase">Curated visual representations of permutations.</p>
            </div>
            <button 
              type="button"
              onClick={addImage}
              className="text-primary-custom font-label uppercase tracking-widest text-[10px] flex items-center space-x-2 border-b border-primary-custom/20 hover:border-primary-custom pb-1 transition-all"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
              <span>Add Asset</span>
            </button>
          </header>
          
          <div className="space-y-8">
            {images.map((img, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end bg-surface-container-low/30 dark:bg-black/10 p-8 rounded-sm relative border border-outline-variant/5 hover:border-outline-variant/20 transition-all group/item">
                <button 
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
                <div className="md:col-span-5 space-y-2 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Image URL</label>
                  <input 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    placeholder="https://..."
                    value={img.url}
                    onChange={(e) => updateImage(idx, 'url', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2 space-y-2 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Metal</label>
                  <select 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface appearance-none outline-none"
                    value={img.metalColor}
                    onChange={(e) => updateImage(idx, 'metalColor', e.target.value)}
                  >
                    <option value="YELLOW">Yellow Gold</option>
                    <option value="WHITE">White Gold</option>
                    <option value="ROSE">Rose Gold</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Shape</label>
                  <select 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface appearance-none outline-none"
                    value={img.diamondShape}
                    onChange={(e) => updateImage(idx, 'diamondShape', e.target.value)}
                  >
                    <option value="ROUND">Round</option>
                    <option value="OVAL">Oval</option>
                    <option value="PEAR">Pear</option>
                    <option value="HEART">Heart</option>
                    <option value="CUSHION">Cushion</option>
                    <option value="EMERALD">Emerald</option>
                    <option value="PRINCESS">Princess</option>
                    <option value="MARQUISE">Marquise</option>
                    <option value="ASSCHER">Asscher</option>
                    <option value="RADIANT">Radiant</option>
                    <option value="PEAR_AND_PEAR">Pear & Pear</option>
                  </select>
                </div>
                <div className="md:col-span-3 pb-2 flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    id={`hero-${idx}`}
                    checked={img.isHero}
                    onChange={(e) => updateImage(idx, 'isHero', e.target.checked)}
                    className="w-4 h-4 rounded-sm border-outline-variant/40 text-primary-custom focus:ring-primary-custom"
                  />
                  <label htmlFor={`hero-${idx}`} className="text-xs font-label uppercase tracking-widest text-on-surface-variant cursor-pointer">Hero Image</label>
                </div>
              </div>
            ))}
            {images.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-outline-variant/10 rounded-sm">
                <p className="font-body text-sm text-on-surface-variant">No imagery assets defined. Add the first one to begin visual curation.</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Metal Permutations */}
        <section className="bg-white dark:bg-surface-container-low rounded-sm p-12 space-y-10 border border-outline-variant/10 editorial-shadow relative group">
          <div className="absolute -left-[1px] top-12 w-[3px] h-16 bg-primary-custom opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <header className="border-b border-outline-variant/10 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h3 className="font-headline text-3xl text-on-surface">3. Metal Permutations</h3>
              <p className="font-body text-sm text-on-surface-variant mt-2 tracking-wide uppercase">Available alloys and pricing modifiers.</p>
            </div>
            <button 
              type="button"
              onClick={addMetal}
              className="text-primary-custom font-label uppercase tracking-widest text-[10px] flex items-center space-x-2 border-b border-primary-custom/20 hover:border-primary-custom pb-1 transition-all"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
              <span>Add Metal</span>
            </button>
          </header>
          
          <div className="space-y-6">
            {metals.map((metal, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end bg-surface-container-low/30 dark:bg-black/10 p-8 rounded-sm relative border border-outline-variant/5">
                <button 
                  type="button"
                  onClick={() => removeMetal(idx)}
                  className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Type</label>
                  <select 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={metal.type}
                    onChange={(e) => updateMetal(idx, 'type', e.target.value)}
                  >
                    <option value="GOLD">Gold</option>
                    <option value="PLATINUM">Platinum</option>
                  </select>
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Color</label>
                  <select 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={metal.color}
                    onChange={(e) => updateMetal(idx, 'color', e.target.value)}
                  >
                    <option value="YELLOW">Yellow</option>
                    <option value="WHITE">White</option>
                    <option value="ROSE">Rose</option>
                  </select>
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Purity</label>
                  <input 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    placeholder="18k"
                    value={metal.purity}
                    onChange={(e) => updateMetal(idx, 'purity', e.target.value)}
                  />
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Price Modifier</label>
                  <input 
                    type="number"
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    placeholder="+0.00"
                    value={metal.priceModifier}
                    onChange={(e) => updateMetal(idx, 'priceModifier', parseFloat(e.target.value))}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Center Stone Parameters */}
        <section className="bg-white dark:bg-surface-container-low rounded-sm p-12 space-y-10 border border-outline-variant/10 editorial-shadow relative group">
          <div className="absolute -left-[1px] top-12 w-[3px] h-16 bg-primary-custom opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <header className="border-b border-outline-variant/10 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h3 className="font-headline text-3xl text-on-surface">4. Center Stone Parameters</h3>
              <p className="font-body text-sm text-on-surface-variant mt-2 tracking-wide uppercase">Compatible diamond specifications.</p>
            </div>
            <button 
              type="button"
              onClick={addDiamond}
              className="text-primary-custom font-label uppercase tracking-widest text-[10px] flex items-center space-x-2 border-b border-primary-custom/20 hover:border-primary-custom pb-1 transition-all"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
              <span>Add Diamond</span>
            </button>
          </header>
          
          <div className="space-y-6">
            {diamonds.map((diamond, idx) => (
              <div key={idx} className="grid grid-cols-2 md:grid-cols-7 gap-6 items-end bg-surface-container-low/30 dark:bg-black/10 p-8 rounded-sm relative border border-outline-variant/5">
                <button 
                  type="button"
                  onClick={() => removeDiamond(idx)}
                  className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
                <div className="col-span-2 md:col-span-1 space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Shape</label>
                  <select 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={diamond.shape}
                    onChange={(e) => updateDiamond(idx, 'shape', e.target.value)}
                  >
                    <option value="ROUND">Round</option>
                    <option value="OVAL">Oval</option>
                    <option value="PEAR">Pear</option>
                    <option value="HEART">Heart</option>
                    <option value="CUSHION">Cushion</option>
                    <option value="EMERALD">Emerald</option>
                    <option value="PRINCESS">Princess</option>
                    <option value="MARQUISE">Marquise</option>
                    <option value="ASSCHER">Asscher</option>
                    <option value="RADIANT">Radiant</option>
                    <option value="PEAR_AND_PEAR">Pear & Pear</option>
                  </select>
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Carat</label>
                  <input 
                    type="number" step="0.01"
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={diamond.carat}
                    onChange={(e) => updateDiamond(idx, 'carat', parseFloat(e.target.value))}
                  />
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Color</label>
                  <input 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={diamond.color}
                    onChange={(e) => updateDiamond(idx, 'color', e.target.value)}
                  />
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Clarity</label>
                  <input 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={diamond.clarity}
                    onChange={(e) => updateDiamond(idx, 'clarity', e.target.value)}
                  />
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Cut</label>
                  <input 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={diamond.cut}
                    onChange={(e) => updateDiamond(idx, 'cut', e.target.value)}
                  />
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Origin</label>
                  <select 
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={diamond.origin}
                    onChange={(e) => updateDiamond(idx, 'origin', e.target.value)}
                  >
                    <option value="Natural">Natural</option>
                    <option value="Lab">Lab</option>
                  </select>
                </div>
                <div className="space-y-1 relative pt-6">
                  <label className="absolute top-0 left-0 text-[10px] text-primary-custom font-label uppercase tracking-[0.2em]">Modifier</label>
                  <input 
                    type="number"
                    className="w-full bg-transparent border-none border-b border-outline-variant/20 focus:border-primary-custom focus:ring-0 py-2 text-sm text-on-surface outline-none"
                    value={diamond.priceModifier}
                    onChange={(e) => updateDiamond(idx, 'priceModifier', parseFloat(e.target.value))}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sticky Action Bar */}
        <div className="fixed bottom-0 right-0 w-[calc(100%-18rem)] bg-white/90 dark:bg-surface-container-low/90 backdrop-blur-md border-t border-outline-variant/20 p-8 flex justify-center items-center z-50">
          <div className="max-w-5xl w-full flex justify-end items-center space-x-8 px-6">
            {success === true && <span className="text-primary-custom text-sm font-label uppercase tracking-widest animate-pulse">Configuration Saved Successfully</span>}
            {success === false && <span className="text-error text-sm font-label uppercase tracking-widest">Failed to save configuration</span>}
            
            <button 
              type="button"
              className="text-on-surface-variant font-label uppercase tracking-widest text-[10px] hover:text-primary-custom transition-all"
            >
              Discard Draft
            </button>
            <button 
              type="submit"
              disabled={isPending}
              className="hero-gradient px-12 py-5 text-on-primary font-label uppercase tracking-widest text-xs shadow-2xl active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {isPending ? 'Saving...' : 'Save Configuration'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
