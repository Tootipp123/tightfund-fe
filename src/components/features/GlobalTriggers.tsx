"use client";

import { useGlobalStore } from "@/store/useGlobalStore";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { useEffect } from "react";

export default function GlobalTriggers() {
  const { currency, initializeCurrency } = useGlobalStore();
  const { setCurrencySymbol } = useOnboardingStore();

  useEffect(() => {
    initializeCurrency();
  }, []);

  useEffect(() => {
    if (currency?.symbol) {
      setCurrencySymbol(currency?.symbol);
    }
  }, [currency?.symbol]);

  return null;
}
