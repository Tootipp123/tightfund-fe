"use client";

import Field from "@/components/features/Onboarding/Field";
import Button from "@/components/ui/Button";
import { useOnboarding } from "@/store/useOnboarding";
import { firstOnboardingStep, nextOnboardingSteps } from "@/utils/onboarding";
import { useState } from "react";

const FirstOnboardingStep = ({
  handleSelectInitialStep,
}: {
  handleSelectInitialStep: any;
}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[420px] m-auto">
        <h2 className="text-dark-main font-bold text-[32px] text-center px-5 leading-none">
          {firstOnboardingStep.question}
        </h2>
        <div className="flex items-center flex-col gap-y-4 mt-[80px]">
          {firstOnboardingStep.choices.map((choice: any, idx: number) => (
            <div
              className="bg-light-secondary w-full py-4 rounded-2xl cursor-pointer border-[2px] border-transparent hover:border-dark-main transition-colors"
              key={idx}
              onClick={() => handleSelectInitialStep(choice.value)}
            >
              <p className="text-dark-main text-center font-semibold">
                {choice.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function OnboardingPage() {
  const [selectedInitialStep, setSelectedInitialStep] = useState<
    "fullTime" | "partTime" | "unemployed" | ""
  >("");
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);
  const { onboardingSteps, setOnboardingSteps } = useOnboarding();

  const handleSelectInitialStep = (
    value: "fullTime" | "partTime" | "unemployed"
  ) => {
    setSelectedInitialStep(value);
    setCurrentStepIndex(0);
    setOnboardingSteps(nextOnboardingSteps[value]);
  };

  if (selectedInitialStep && currentStepIndex !== null && onboardingSteps) {
    const step = onboardingSteps[currentStepIndex];

    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[420px] m-auto">
          <h2 className="text-dark-main font-bold text-[28px] text-center px-5 leading-none">
            {step.question}
          </h2>
          <p className="text-dark-main font-regular mt-2 opacity-[0.9] text-[16px] text-center px-5 leading-none">
            {step.description}
          </p>
          <div className="flex items-center flex-col gap-y-4 mt-[80px]">
            <Field
              type={step.type}
              value={step.value}
              inputField={step.inputField}
              choices={step.choices}
              onInputChange={(text: string) => {
                const updated = [...onboardingSteps];
                updated[currentStepIndex].value = text;
                setOnboardingSteps(updated);
              }}
              onNumberChange={(val: any) => {
                const digitsOnly = val.replace(/\D/g, "");
                const updated = [...onboardingSteps];
                updated[currentStepIndex].value = digitsOnly;
                setOnboardingSteps(updated);
              }}
              onChoiceSelect={(val: string) => {
                const updated = [...onboardingSteps];
                updated[currentStepIndex].value = val;
                setOnboardingSteps(updated);

                if (step.autoNext) {
                  setCurrentStepIndex((prev) => prev! + 1);
                }
              }}
            />
          </div>
          {!step.autoNext && (
            <Button
              className="w-full mt-10 py-3"
              onClick={() => setCurrentStepIndex((prev) => prev! + 1)}
            >
              <p className="text-lg">Next</p>
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <FirstOnboardingStep handleSelectInitialStep={handleSelectInitialStep} />
  );
}
