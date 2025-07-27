import { TextInput } from "@/components/ui/TextInput";
import { formatNumber } from "@/utils/formatNumber";
import MonthlyExpensesForm from "../CustomForms/MonthlyExpensesForm";

export default function Field({
  type,
  value,
  inputField,
  choices,
  onInputChange,
  onNumberChange,
  onChoiceSelect,
}: {
  type: "inputField" | "numberField" | "choices" | "monthlyExpensesForm";
  value: any;
  inputField: any;
  choices: any;
  onInputChange?: (val: string) => void;
  onNumberChange?: (val: any) => void;
  onChoiceSelect?: (val: string) => void;
}) {
  switch (type) {
    case "inputField":
      return (
        <TextInput
          placeholder={inputField.placeholder}
          value={value}
          onChange={onInputChange}
        />
      );

    case "numberField":
      return (
        <TextInput
          placeholder={inputField.placeholder}
          value={formatNumber(value)}
          onChange={onNumberChange}
          rightText={"USD"}
        />
      );

    case "choices":
      return (
        <div className="flex flex-col gap-2 w-full">
          {choices.map((choice: any, idx: number) => (
            <div
              key={idx}
              className="relative bg-light-secondary w-full py-4 flex items-center justify-center rounded-2xl cursor-pointer border border-transparent hover:border-dark-main transition-colors"
              onClick={() => onChoiceSelect?.(choice.value)}
            >
              <span className="absolute left-4">{choice.icon}</span>
              <p className="text-dark-main text-center font-semibold w-full">
                {choice.label}
              </p>
            </div>
          ))}
        </div>
      );

    case "monthlyExpensesForm":
      return <MonthlyExpensesForm />;

    default:
      return <></>;
  }
}
