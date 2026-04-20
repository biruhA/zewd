import { create } from 'zustand';
import { CatalogRing } from '@prisma/client';

interface CatalogState {
  rings: CatalogRing[];
  isLoading: boolean;
  setRings: (rings: CatalogRing[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  rings: [],
  isLoading: false,
  setRings: (rings) => set({ rings }),
  setLoading: (isLoading) => set({ isLoading }),
}));
