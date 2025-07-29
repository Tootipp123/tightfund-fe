"use client";

import LogoSvg from "../icons/LogoSvg";

export default function Footer() {
  return (
    <footer className="bg-light-main border-t border-t-neutral-300 w-full">
      <div className="w-full flex items-center pb-[80px] flex-col md:flex-row justify-between px-4 md:px-0 md:w-[1200px] mx-auto">
        <div>
          <div className="w-full pt-[60px] flex flex-col items-center md:flex-row justify-between">
            <LogoSvg width={40} height={40} />
            <div className="text-dark-primary font-semibold">
              My Emergency Fund
            </div>
          </div>
          <div className="w-full mx-auto flex justify-between pb-[50px] mt-2">
            <p className="text-dark-primary opacity-[0.7]">
              © 2025 My Emergency Fund
            </p>
          </div>
        </div>
        <div className="order-1">
          <p className="text-dark-main">Contact us:</p>
          <a href="mailto:humorbounty@gmail.com" className="text-blue-500">
            humorbounty@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
