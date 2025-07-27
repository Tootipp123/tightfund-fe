import { TextInput } from "@/components/ui/TextInput";
import { formatNumber } from "@/utils/formatNumber";
import { useState } from "react";

export default function MonthlyExpensesForm() {
  const [expenses, setExpenses] = useState([
    {
      label: "Rent or mortgage",
      subLabel: "",
      value: "",
      currency: "USD",
    },
    {
      label: "Food and groceries",
      subLabel: "",
      value: "",
      currency: "USD",
    },
    {
      label: "Utilities",
      subLabel: "(Gas, electricity, water, internet)",
      value: "",
      currency: "USD",
    },
    {
      label: "Debt",
      subLabel: "(Credit card & other loans)",
      value: "",
      currency: "USD",
    },
    {
      label: "Dependents",
      subLabel: "(leave blank if none)",
      value: "",
      currency: "USD",
    },
  ]);

  const handleValueChange = (index: number, newValue: string) => {
    const digitsOnly = newValue.replace(/\D/g, "");
    const updated = [...expenses];
    updated[index].value = digitsOnly;
    setExpenses(updated);
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
