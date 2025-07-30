import { getCurrencyByIPGeolocation } from "@/utils/getCurrencyByLocale";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CurrencyInfo = {
  // Added a type for clarity
  country: string;
  currency: string;
  symbol: string;
};

export type GlobalState = {
  currency: CurrencyInfo; // Use the new type
  setCurrency: (currency: CurrencyInfo) => void; // Use the new type
  initializeCurrency: () => Promise<void>; // Add an async initializer
};

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      currency: {
        country: "Unknown",
        currency: "USD",
        symbol: "$",
      },
      setCurrency: (currency: CurrencyInfo) => set({ currency }),

      // Async function to fetch and set currency
      initializeCurrency: async () => {
        if (
          get().currency.country === "Unknown" &&
          get().currency.currency === "USD"
        ) {
          const detectedCurrency = await getCurrencyByIPGeolocation();
          if (detectedCurrency) {
            set({ currency: detectedCurrency });
          }
        }
      },
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
