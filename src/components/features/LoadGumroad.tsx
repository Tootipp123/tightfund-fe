"use client";

import Script from "next/script";

export default function LoadGumroad({ children }: any) {
  return (
    <>
      <Script
        src="https://gumroad.com/js/gumroad.js"
        async={true}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
