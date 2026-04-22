import { create } from 'zustand'
import { RingStyle, DiamondShape } from '@prisma/client'

export type MetalFilter = 'ALL' | 'PLATINUM' | 'YELLOW_GOLD' | 'ROSE_GOLD' | 'WHITE_GOLD'
export type StyleFilter = 'ALL' | RingStyle
export type ShapeFilter = 'ALL' | DiamondShape

interface FilterState {
  metal: MetalFilter
  style: StyleFilter
  shape: ShapeFilter
  setMetal: (metal: MetalFilter) => void
  setStyle: (style: StyleFilter) => void
  setShape: (shape: ShapeFilter) => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  metal: 'ALL',
  style: 'ALL',
  shape: 'ALL',
  setMetal: (metal) => set({ metal }),
  setStyle: (style) => set({ style }),
  setShape: (shape) => set({ shape }),
  resetFilters: () => set({ metal: 'ALL', style: 'ALL', shape: 'ALL' }),
}))
