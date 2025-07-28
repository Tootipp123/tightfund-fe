import { firstOnboardingStep } from "@/utils/onboarding";

export const FirstOnboardingStep = ({
  handleSelectInitialStep,
}: {
  handleSelectInitialStep: any;
}) => {
  return (
    <>
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
    </>
  );
};
