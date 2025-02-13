"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useMiddleware() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("accessToken") as string;

    // if (!jwt) {
    //   router.push("/");
    // }
    setAccessToken(jwt);
  }, [router]);

  return {
    accessToken,
  };
}
