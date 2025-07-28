import { useOnboardingStore } from "@/store/useOnboardingStore";
import { FieldType } from "@/utils/onboarding";

export default function useOnboardingDependencies() {
  const { setOnboardingSteps } = useOnboardingStore();

  const injectExtraOnboardingScreen = (updatedOnboardingSteps: any[]) => {
    const familySafetyNet = updatedOnboardingSteps?.find(
      (step) => step.question === "Can your family help you financially?"
    )?.value;

    const haveDependents = updatedOnboardingSteps?.some((step) => {
      if (step.question === "How much is your monthly expenses?") {
        console.log("step.value: ", step.value);
        return step.value?.some(
          (field: any) => field.label === "Dependents" && !!field.value
        );
      }
      return false;
    });

    const dependentNeedsAnswer = updatedOnboardingSteps?.find(
      (step) =>
        step.question ===
        "Any family members or dependents with health/urgent needs?"
    )?.value;

    const hasExtraStep = updatedOnboardingSteps.some(
      (step) =>
        step.question ===
        "How much are you willing to allocate for their needs?"
    );

    if (familySafetyNet && familySafetyNet !== "family_can_fully_support_me") {
      const extraStep = {
        question: "Any family members or dependents with health/urgent needs?",
        type: "choices" as FieldType,
        inputField: null,
        withDependency: true,
        value: "",
        autoNext: true,
        choices: [
          {
            icon: "",
            label: "None",
            value: "none",
          },
          {
            icon: "",
            label: "Yes, minor needs",
            value: "yes_minor_needs",
          },
          {
            icon: "",
            label: "Yes, serious needs",
            value: "yes_serious_needs",
          },
        ],
      };
      const newSteps = [...updatedOnboardingSteps, extraStep];
      setOnboardingSteps(newSteps);
    } else if (
      familySafetyNet &&
      familySafetyNet === "family_can_fully_support_me"
    ) {
      const filteredSteps = updatedOnboardingSteps.filter(
        (step) =>
          step.question !==
          "Any family members or dependents with health/urgent needs?"
      );
      setOnboardingSteps(filteredSteps);
    }

    if (
      dependentNeedsAnswer &&
      dependentNeedsAnswer !== "none" &&
      !hasExtraStep
    ) {
      const extraStep = {
        question: "How much are you willing to allocate for their needs?",
        type: "numberField",
        value: "",
        inputField: {
          type: "text",
          required: true,
          label: "",
          placeholder: "00.00",
        },
        autoNext: false,
        choices: [],
      };

      const newSteps = [...updatedOnboardingSteps, extraStep];
      setOnboardingSteps(newSteps);
      return;
    } else if (dependentNeedsAnswer && dependentNeedsAnswer === "none") {
      const filteredSteps = updatedOnboardingSteps.filter(
        (step) =>
          step.question !==
          "How much are you willing to allocate for their urgent needs?"
      );
      setOnboardingSteps(filteredSteps);
    }
  };

  return {
    injectExtraOnboardingScreen,
  };
}
