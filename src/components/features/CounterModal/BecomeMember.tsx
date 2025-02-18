import useMiddleware from "@/hooks/useMiddleware";
import { useRouter } from "next/navigation";

export default function BecomeMember() {
  const router = useRouter();
  const { accessToken } = useMiddleware();

  return (
    <div className="hidden md:block black-fade z-[5] pt-[30px] pb-[40px] relative w-full my-auto">
      <p className="text-white font-semibold mb-3">
        Become a member and get access to all the content.
      </p>
      <ul>
        <li className="text-neutral-200">1. Complete Good counter against</li>
        <li className="text-neutral-200 mt-2">
          2. Best maps to pick every heroes
        </li>
        <li className="text-neutral-200 mt-2">
          1. How to counter a hero if you have the same hero
        </li>
        <li className="text-neutral-200 mt-2">
          3. Customize which details you'd only like to see
        </li>
        <li className="text-neutral-200 mt-2">
          3. Best game modes to pick every hero
        </li>
        <li className="text-neutral-200 mt-2">
          4. Detailed explanation on how to counter heroes with team comp
        </li>
        <li className="text-neutral-200 mt-2">
          5. Early access to new content
        </li>
      </ul>
      <button
        onClick={() => {
          if (!accessToken) {
            router.push("/signin");
          } else {
            router.push("/membership");
          }
        }}
        className="mx-auto mt-5 w-fit rounded-md px-3 py-1 bg-emerald-600 text-white font-medium"
      >
        Upgrade
      </button>
    </div>
  );
}
