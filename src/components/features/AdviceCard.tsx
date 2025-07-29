import LogoSvg from "../icons/LogoSvg";

export default function AdviceCard({ amount, months, confidenceScore }: any) {
  return (
    <div className="relative p-6 py-[40px] rounded-xl bg-light-main flex items-center flex-col overflow-hidden text-white w-72 h-auto rotate-[3deg]">
      <LogoSvg width={40} height={40} />

      <p className="text-sm mt-3 mb-2 text-dark-main">We advise you to have</p>
      <p className="text-4xl font-bold mb-4 text-dark-main">
        ${amount.toLocaleString()}
      </p>
      <p className="text-md text-dark-main">
        for <span className="font-bold text-dark-main">{months} months</span> of
        expenses
      </p>

      <div className="mt-8 pt-4 border-t border-white border-opacity-30">
        <p className="text-xs font-semibold text-dark-main text-center">
          Confidence score: {confidenceScore}%
        </p>
        <p className="text-xs text-opacity-80 text-dark-main text-center">
          This amount is right for your situation
        </p>
      </div>
    </div>
  );
}
