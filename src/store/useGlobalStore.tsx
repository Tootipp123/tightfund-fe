import { getCurrencyByLocale } from "@/utils/getCurrencyByLocale";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type GlobalState = {
  currency: {
    country: string;
    currency: string;
    symbol: string;
  };
  setCurrency: (currency: any) => void;
};

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      currency: getCurrencyByLocale() ?? {
        country: "Unknown",
        currency: "USD",
        symbol: "$",
      },
      setCurrency: (currency: any) => set({ currency }),
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
