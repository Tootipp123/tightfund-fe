import { TextInput } from "@/components/ui/TextInput";
import { useGlobalStore } from "@/store/useGlobalStore";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { formatNumber } from "@/utils/formatNumber";
import { useState } from "react";

export default function MonthlyExpensesForm({
  currentStepIndex,
}: {
  currentStepIndex: number;
}) {
  const { onboardingSteps, setOnboardingSteps } = useOnboardingStore();
  const { currency: userCurrency } = useGlobalStore();
  const currency = userCurrency.symbol;

  const [expenses, setExpenses] = useState([
    {
      label: "Rent or mortgage",
      subLabel: "",
      value: "",
      currency,
    },
    {
      label: "Food and groceries",
      subLabel: "",
      value: "",
      currency,
    },
    {
      label: "Utilities",
      subLabel: "(Gas, electricity, water, internet)",
      value: "",
      currency,
    },
    {
      label: "Debt",
      subLabel: "(Credit card & other loans)",
      value: "",
      currency,
    },
    {
      label: "Dependents",
      subLabel: "(leave blank if none)",
      value: "",
      currency,
    },
  ]);

  const handleValueChange = (index: number, newValue: string) => {
    const digitsOnly = newValue.replace(/\D/g, "");
    const updated = [...expenses];
    updated[index].value = digitsOnly;
    setExpenses(updated);

    const clonedOnboardingSteps = [...onboardingSteps];
    clonedOnboardingSteps[currentStepIndex].value = updated;
    setOnboardingSteps(clonedOnboardingSteps);
  };

  return (
    <div className="w-full">
      {expenses.map((expense, idx) => (
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
              onChange={(val) => handleValueChange(idx, val)}
              rightText={expense.currency}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
