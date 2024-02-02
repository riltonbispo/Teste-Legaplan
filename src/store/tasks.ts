import { ItemType } from "@/types/itemType";
import { create } from "zustand";

export interface State {
  items: ItemType[];
  addItem: (item: ItemType) => void;
  toggleItem: (item: ItemType) => void;
  removeItem: (item: ItemType) => void;
}

const useTaksStore = create<State>(set => ({
  items: [],

  addItem: (item: ItemType) => {
    set((state) => ({ items: [...state.items, item] }));
  },

  toggleItem: (item: ItemType) => {
    set((state) => ({
      items: state.items.map((i) =>
        i === item ? { ...i, checked: !i.checked } : i
      ),
    }));
  },

  removeItem: (item: ItemType) => {
    set((state) => ({
      items: state.items.filter((i) => i !== item),
    }));
  },
}));

export default useTaksStore;
