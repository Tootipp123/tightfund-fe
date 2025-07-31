import { TextInput } from "@/components/ui/TextInput";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { formatNumber } from "@/utils/formatNumber";

export default function MonthlyExpensesForm({
  currentStepIndex,
}: {
  currentStepIndex: number;
}) {
  const {
    onboardingSteps,
    setOnboardingSteps,
    monthlyExpenses,
    setMonthlyExpenses,
  } = useOnboardingStore();

  const handleValueChange = (index: number, newValue: string) => {
    const digitsOnly = newValue.replace(/\D/g, "");
    const updated = [...monthlyExpenses];
    updated[index].value = digitsOnly;
    setMonthlyExpenses(updated);

    const clonedOnboardingSteps = [...onboardingSteps];
    clonedOnboardingSteps[currentStepIndex].value = updated;
    setOnboardingSteps(clonedOnboardingSteps);
  };

  return (
    <div className="w-full">
      {monthlyExpenses.map((expense: any, idx: number) => (
        <div key={idx} className="mb-6 flex items-center justify-between">
          <div>
            <p className="font-semibold text-dark-main flex-1">
              {expense.label}
            </p>
            <p className="font-light text-dark-main text-sm flex-1">
              {expense.subLabel}
            </p>
          </div>
          <div className="relative w-[160px]">
            <TextInput
              placeholder="00.00"
              value={formatNumber(expense.value)}
              textAlign="left"
              type="numberField"
              onChange={(val) => handleValueChange(idx, val)}
              rightText={expense.currency}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
