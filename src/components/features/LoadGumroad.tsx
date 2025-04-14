"use client";
import Script from "next/script";

export default function LoadGumroad() {
  // useEffect(() => {
  //   // 1. Check if script already exists
  //   let script: HTMLScriptElement | null = document.querySelector(
  //     'script[src="https://gumroad.com/js/gumroad.js"]'
  //   );

  //   if (!script) {
  //     script = document.createElement("script");
  //     script.src = "https://gumroad.com/js/gumroad.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }

  //   // 2. Type-safe global callback
  //   window.handleGumroadPayment = (data: GumroadResponse) => {
  //     console.log("Payment success:", data);
  //     // Handle redirection or state update here
  //   };

  //   return () => {
  //     // 3. Cleanup
  //     if (script) {
  //       document.body.removeChild(script);
  //     }
  //     delete window.handleGumroadPayment;
  //   };
  // }, []);

  return (
    <>
      <Script
        src="https://gumroad.com/js/gumroad.js"
        async={true}
        strategy="beforeInteractive"
      />
    </>
  );
}

interface GumroadResponse {
  license_key: string;
  email: string;
  sale_id: string;
  product_id: string;
  url_params?: Record<string, string>;
}

declare global {
  interface Window {
    handleGumroadPayment?: (data: GumroadResponse) => void;
  }
}
