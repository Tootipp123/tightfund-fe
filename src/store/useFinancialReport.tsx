import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type FinancialReport = {
  financialReport: any;
  setFinancialReport: (financialReport: any) => void;
};

export const useFinancialReport = create<FinancialReport>()(
  persist(
    (set) => ({
      financialReport: null,
      setFinancialReport: (financialReport: any) => set({ financialReport }),
    }),
    {
      name: "financialReport",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
