"use client";

import { useGlobalStore } from "@/store/useGlobalStore";
import { useEffect } from "react";

export default function GlobalTriggers() {
  const { initializeCurrency } = useGlobalStore();

  useEffect(() => {
    initializeCurrency();
  }, []);
  return null;
}
