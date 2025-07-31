"use client";

import LogoSvg from "../icons/LogoSvg";

export default function Footer() {
  return (
    <footer className="bg-light-main border-t border-t-neutral-300 w-full">
      <div className="w-full flex items-center justify-center pb-[80px] flex-col md:flex-row px-4 md:px-0 md:w-[1200px] mx-auto">
        <div>
          <div className="w-full pt-[60px] flex flex-col items-center justify-between">
            <LogoSvg width={40} height={40} />
            <div className="text-dark-primary font-semibold text-center">
              Get Emergency Fund
            </div>
          </div>
          <div className="w-full mx-auto flex justify-between pb-[50px] mt-2 text-center">
            <p className="text-dark-primary opacity-[0.7] text-center">
              © 2025 Get Emergency Fund
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
