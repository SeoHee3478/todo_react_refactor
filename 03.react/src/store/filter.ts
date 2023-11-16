import create from "zustand";

type FilterStore = {
  filter: 'all' | 'done' | 'undone';
  setFilter: (filter: 'all' | 'done' | 'undone') => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filter: 'all',
  setFilter: (filter) => set({ filter }),
}))