export default function SameHeroCounter({ hero }: any) {
  return (
    <div className="mt-5 py-5 border-t border-[#383852]">
      {hero?.sameHeroCounter ? (
        <div>
          <h2 className="text-neutral-100 capitalize font-bold text-lg mb-2">
            How to counter with the same hero:
          </h2>
          <div className="py-3">
            <h4 className="w-[100px] text-neutral-200 text-md font-semibold">
              Objective:
            </h4>
            <p className="w-full text-[#A0A0AF] leading-[25px]">
              {hero?.sameHeroCounter.objective}
            </p>
          </div>
          <ul>
            {hero.sameHeroCounter.steps.map(
              (step: string, counterKey: number) => (
                <li
                  key={counterKey}
                  className="text-neutral-200 flex gap-2 mt-4"
                >
                  <h4 className="w-[100px] text-lg font-medium">
                    Step {counterKey + 1}
                  </h4>
                  <p className="w-full text-[#A0A0AF] leading-[25px]">{step}</p>
                </li>
              )
            )}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
