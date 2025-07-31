import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type EmploymentType = "fullTime" | "partTime" | "unemployed";

export type MonthlyExpenses = {
  label: string;
  subLabel: string;
  value: any;
  currency: string;
};

export type OnboardingState = {
  currencySymbol: string;
  setCurrencySymbol: (symbol: string) => void;
  monthlyExpenses: MonthlyExpenses[];
  setMonthlyExpenses: (expenses: MonthlyExpenses[]) => void;
  selectedInitialStep: EmploymentType | "";
  setSelectedInitialStep: (step: EmploymentType) => void;
  onboardingSteps: any;
  setOnboardingSteps: (steps: any) => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      currencySymbol: "",
      setCurrencySymbol: (symbol: string) => {
        // update all existing monthlyExpenses with new currency
        const updatedExpenses = get().monthlyExpenses.map((exp) => ({
          ...exp,
          currency: symbol,
        }));
        set({ currencySymbol: symbol, monthlyExpenses: updatedExpenses });
      },
      monthlyExpenses: [
        {
          label: "Rent or mortgage",
          subLabel: "",
          value: "",
          currency: "",
        },
        {
          label: "Food and groceries",
          subLabel: "",
          value: "",
          currency: "",
        },
        {
          label: "Utilities",
          subLabel: "(Gas, electricity, water, internet)",
          value: "",
          currency: "",
        },
        {
          label: "Debt",
          subLabel: "(Credit card & other loans)",
          value: "",
          currency: "",
        },
        {
          label: "Dependents",
          subLabel: "(leave blank if none)",
          value: "",
          currency: "",
        },
      ],
      setMonthlyExpenses: (expenses: MonthlyExpenses[]) =>
        set({ monthlyExpenses: expenses }),
      selectedInitialStep: "",
      setSelectedInitialStep: (step: EmploymentType | "") =>
        set({ selectedInitialStep: step }),
      onboardingSteps: null,
      setOnboardingSteps: (steps: any) => set({ onboardingSteps: steps }),
    }),
    {
      name: "onboardingSteps",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
