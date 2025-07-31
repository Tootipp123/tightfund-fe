import { TextInput } from "@/components/ui/TextInput";
import { useGlobalStore } from "@/store/useGlobalStore";
import { formatNumber } from "@/utils/formatNumber";
import MonthlyExpensesForm from "../CustomForms/MonthlyExpensesForm";

export default function Field({
  type,
  value,
  inputField,
  choices,
  currentStepIndex,
  onChange,
}: {
  type:
    | "inputField"
    | "numberField"
    | "choices"
    | "multipleSelect"
    | "monthlyExpensesForm";
  value: any;
  inputField: any;
  choices: any;
  currentStepIndex: number;
  onChange?: (val: any) => void;
}) {
  const { currency } = useGlobalStore();

  switch (type) {
    case "inputField":
      return (
        <TextInput
          placeholder={inputField.placeholder}
          value={value}
          onChange={onChange}
        />
      );

    case "numberField":
      return (
        <TextInput
          placeholder={inputField.placeholder}
          value={formatNumber(value)}
          onChange={onChange}
          rightText={currency.symbol}
        />
      );

    case "choices":
      return (
        <div className="flex flex-col gap-2 w-full">
          {choices.map((choice: any, idx: number) => (
            <div
              key={idx}
              className="relative bg-light-secondary w-full py-4 flex items-center justify-center rounded-2xl cursor-pointer border border-transparent hover:border-dark-main transition-colors"
              onClick={() => onChange?.(choice.value)}
            >
              <span className="absolute left-4">{choice.icon}</span>
              <p className="text-dark-main text-center font-semibold w-full">
                {choice.label}
              </p>
            </div>
          ))}
        </div>
      );

    case "multipleSelect":
      return (
        <div className="flex flex-col gap-2 w-full">
          {choices.map((choice: any, idx: number) => {
            const isSelected =
              Array.isArray(value) && value.includes(choice.value);
            return (
              <div
                key={idx}
                className={`${
                  isSelected
                    ? "border border-dark-main"
                    : "border border-transparent"
                } relative bg-light-secondary w-full py-4 flex items-center justify-center rounded-2xl cursor-pointer hover:border-dark-main transition-colors`}
                onClick={() => onChange?.(choice.value)}
              >
                <div className="w-4 h-4 absolute left-4 flex items-center justify-center bg-[#e3dbcf] rounded-full">
                  {isSelected && (
                    <div className="w-[10px] h-[10px] bg-dark-main rounded-full"></div>
                  )}
                </div>

                <span className="absolute left-4">{choice.icon}</span>
                <p className="text-dark-main text-center font-semibold w-full">
                  {choice.label}
                </p>
              </div>
            );
          })}
        </div>
      );

    case "monthlyExpensesForm":
      return <MonthlyExpensesForm currentStepIndex={currentStepIndex} />;

    default:
      return <></>;
  }
}
