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
  showCountrySelection: boolean;
  setShowCountrySelection: (showCountrySelection: boolean) => void;
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
        symbol: "",
      },
      showCountrySelection: true,
      setShowCountrySelection: (showCountrySelection: boolean) =>
        set({ showCountrySelection }),
      setCurrency: (currency: CurrencyInfo) => set({ currency }),
      initializeCurrency: async () => {
        if (
          get().currency.country === "Unknown" &&
          get().currency.currency === "USD"
        ) {
          try {
            const detectedCurrency = await getCurrencyByIPGeolocation();
            if (detectedCurrency) {
              set({ currency: detectedCurrency });
            }
          } catch (err: any) {
            set({ showCountrySelection: true });
          }
        } else {
          set({ showCountrySelection: false });
        }
      },
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
