import { create } from 'zustand'

interface CustomizationState {
  selectedShape: string
  selectedMetal: string
  selectedBand: string
  setSelectedShape: (shape: string) => void
  setSelectedMetal: (metal: string) => void
  setSelectedBand: (band: string) => void
  setInitialState: (shape: string, metal: string, band: string) => void
}

export const useCustomizationStore = create<CustomizationState>((set) => ({
  selectedShape: "",
  selectedMetal: "",
  selectedBand: "",
  setSelectedShape: (shape) => set({ selectedShape: shape }),
  setSelectedMetal: (metal) => set({ selectedMetal: metal }),
  setSelectedBand: (band) => set({ selectedBand: band }),
  setInitialState: (shape, metal, band) => set((state) => {
    // Only set if not already set, or just overwrite to ensure freshness per page
    return { selectedShape: shape, selectedMetal: metal, selectedBand: band }
  }),
}))
