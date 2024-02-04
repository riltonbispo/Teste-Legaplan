import { ItemType } from "@/types/itemType";
import { create } from "zustand";
import { persist } from 'zustand/middleware'

export interface State {
  items: ItemType[];
  addItem: (item: ItemType) => void;
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
}

export const useTaksStore = create<State>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item: ItemType) => {
        set((state) => ({ items: [...state.items, item] }));
      },
    
      toggleItem: (id: string) => {
        set(state => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
          ),
        }));
      },
    
      removeItem: (id: string) => {
        set(state => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: 'tasks',
    },
  ),
)


export default useTaksStore;
