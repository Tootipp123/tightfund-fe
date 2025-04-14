"use client";
import { useEffect } from "react";

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Load Gumroad.js script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gumroad.com/js/gumroad.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <>{children}</>;
}

declare global {
  interface Window {
    handleGumroadPayment: (data: GumroadResponse) => void;
  }
}

interface GumroadResponse {
  license_key: string;
  email: string;
  sale_id: string;
  product_id: string;
}
