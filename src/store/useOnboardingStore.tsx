import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type OnboardingState = {
  onboardingSteps: any;
  setOnboardingSteps: (onboardingSteps: any) => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      onboardingSteps: null,
      setOnboardingSteps: (onboardingSteps: string) => set({ onboardingSteps }),
    }),
    {
      name: "onboardingSteps",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
