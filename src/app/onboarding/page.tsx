"use client";

import Field from "@/components/features/Onboarding/Field";
import { FirstOnboardingStep } from "@/components/features/Onboarding/FirstOnboardingStep";
import Button from "@/components/ui/Button";
import useOnboardingDependencies from "@/hooks/useOnboardingDependencies";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { nextOnboardingSteps } from "@/utils/onboarding";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

type EmploymentType = "fullTime" | "partTime" | "unemployed";

export default function OnboardingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { injectExtraOnboardingScreen } = useOnboardingDependencies();
  const [selectedInitialStep, setSelectedInitialStep] = useState<
    EmploymentType | ""
  >("");
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const { onboardingSteps, setOnboardingSteps } = useOnboardingStore();

  const handleSelectInitialStep = (value: EmploymentType) => {
    setSelectedInitialStep(value);
    setCurrentStepIndex(0);
    setOnboardingSteps(nextOnboardingSteps[value]);
  };

  const handleOnChange = ({ step, val }: { step: any; val: any }) => {
    const type = step.type;
    const updated = [...onboardingSteps];

    if (onboardingSteps.length - 1 == currentStepIndex) {
      router.push("/analyzing");
      return;
    }

    switch (type) {
      case "inputField":
        updated[currentStepIndex as number].value = val;
        setOnboardingSteps(updated);
        break;

      case "numberField":
        const digitsOnly = val.replace(/\D/g, "");
        updated[currentStepIndex as number].value = digitsOnly;
        setOnboardingSteps(updated);
        break;

      case "choices":
        updated[currentStepIndex as number].value = val;
        setOnboardingSteps(updated);
        if (step.withDependency) {
          injectExtraOnboardingScreen(updated);
        }
        if (step.autoNext) {
          setDirection(1);
          setCurrentStepIndex((prev) => prev! + 1);
        }
        break;

      default:
        break;
    }
  };

  if (selectedInitialStep && currentStepIndex !== null && onboardingSteps) {
    const step = onboardingSteps[currentStepIndex];

    return (
      <div className="w-full h-screen px-8 md:px-0 flex items-center justify-center">
        <div className="w-[420px] m-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStepIndex}
              custom={direction}
              initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => {
                  setDirection(-1);
                  setCurrentStepIndex((prev) => {
                    if (prev === null || prev <= 0) return null;
                    return prev - 1;
                  });
                }}
                className="m-auto justify-center mb-5"
              >
                <IoArrowBackOutline className="text-2xl text-dark-main" />
              </button>
              <h2 className="text-dark-main font-bold text-2xl md:text-[32px] text-center px-5 leading-none">
                {step.question}
              </h2>
              <p className="text-dark-main font-regular mt-2 opacity-[0.9] text-sm md:text-[16px] text-center px-5 leading-none">
                {step.description}
              </p>
              <div className="flex items-center flex-col gap-y-4 mt-[80px]">
                <Field
                  type={step.type}
                  value={step.value}
                  inputField={step.inputField}
                  choices={step.choices}
                  currentStepIndex={currentStepIndex}
                  onChange={(val: any) => {
                    handleOnChange({
                      step,
                      val,
                    });
                  }}
                />
              </div>
              {!step.autoNext && (
                <Button
                  className="w-full mt-10 py-3"
                  onClick={() => {
                    setDirection(1);
                    if (onboardingSteps.length - 1 == currentStepIndex) {
                      router.push("/analyzing");
                      return;
                    } else {
                      setCurrentStepIndex((prev) => prev! + 1);
                    }
                  }}
                >
                  <p className="text-lg">Next</p>
                </Button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen px-8 md:px-0 flex items-center justify-center">
      <div className="w-[420px] m-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStepIndex}
            custom={direction}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => {
                const from = searchParams.get("from");
                if (from === "dashboard") {
                  router.push("/dashboard");
                } else {
                  router.push("/");
                }
              }}
              className="m-auto justify-center mb-5"
            >
              <IoArrowBackOutline className="text-2xl text-dark-main" />
            </button>
            <FirstOnboardingStep
              handleSelectInitialStep={handleSelectInitialStep}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
