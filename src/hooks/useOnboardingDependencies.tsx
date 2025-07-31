import { useOnboardingStore } from "@/store/useOnboardingStore";
import {
  dependencyKeys,
  FieldType,
  questionsWithDependencies,
} from "@/utils/onboarding";

export default function useOnboardingDependencies() {
  const { setOnboardingSteps } = useOnboardingStore();

  console.log("here1");

  const hasDependents = (steps: any[]) =>
    steps
      .find((s) => s.question === questionsWithDependencies.expenses)
      ?.value?.some((f: any) => f.label === "Dependents" && !!f.value);

  const getAnswer = (steps: any[], question: string) =>
    steps.find((s) => s.question === question)?.value;

  const getKeyAnswer = (steps: any[], key: string) =>
    steps.find((s) => s.key === key)?.value;

  const hasStep = (steps: any[], question: string) =>
    steps.some((s) => s.question === question);

  const removeStep = (steps: any[], question: string) =>
    steps.filter((s) => s.question !== question);

  const injectExtraOnboardingScreen = (steps: any[]) => {
    const familySupport = getAnswer(
      steps,
      questionsWithDependencies.familySupport
    );
    const dependentsNeeds = getKeyAnswer(
      steps,
      dependencyKeys.anyDependentsWithUrgentNeeds
    );
    const hasAllocationStep = hasStep(
      steps,
      questionsWithDependencies.dependentsAllocation
    );

    let updatedSteps = [...steps];

    if (
      familySupport &&
      familySupport !== "family_can_fully_support_me" &&
      !hasStep(steps, questionsWithDependencies.dependentsNeeds)
    ) {
      updatedSteps.push({
        question: questionsWithDependencies.dependentsNeeds,
        type: "choices" as FieldType,
        inputField: null,
        withDependency: true,
        value: "",
        autoNext: true,
        choices: [
          { icon: "", label: "None", value: "none" },
          { icon: "", label: "Yes, minor needs", value: "yes_minor_needs" },
          { icon: "", label: "Yes, serious needs", value: "yes_serious_needs" },
        ],
      });
    } else if (familySupport === "family_can_fully_support_me") {
      updatedSteps = removeStep(
        updatedSteps,
        questionsWithDependencies.dependentsNeeds
      );
    }

    if (dependentsNeeds && dependentsNeeds !== "none" && !hasAllocationStep) {
      updatedSteps.push({
        question: questionsWithDependencies.dependentsAllocation,
        type: "number",
        value: "",
        inputField: {
          type: "text",
          required: true,
          label: "",
          placeholder: "00.00",
        },
        withDependency: false,
        autoNext: false,
        choices: [],
      });
    } else if (dependentsNeeds === "none") {
      updatedSteps = removeStep(
        updatedSteps,
        questionsWithDependencies.dependentsAllocation
      );
    }

    setOnboardingSteps(updatedSteps);
    return updatedSteps;
  };

  return { injectExtraOnboardingScreen };
}
