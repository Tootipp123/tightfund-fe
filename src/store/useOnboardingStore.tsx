import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type EmploymentType = 'fullTime' | 'partTime' | 'unemployed';

export type OnboardingState = {
  selectedInitialStep: EmploymentType | '';
  setSelectedInitialStep: (selectedInitialStep: EmploymentType) => void;
  onboardingSteps: any;
  setOnboardingSteps: (onboardingSteps: any) => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    set => ({
      selectedInitialStep: '',
      setSelectedInitialStep: (selectedInitialStep: EmploymentType | '') =>
        set({ selectedInitialStep }),
      onboardingSteps: null,
      setOnboardingSteps: (onboardingSteps: string) => set({ onboardingSteps }),
    }),
    {
      name: 'onboardingSteps',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
