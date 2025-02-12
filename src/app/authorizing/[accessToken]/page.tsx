"use client";

import AnimatedLoadingIcon from "@/components/ui/AnimatedLoadingIcon";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Authorizing() {
  const router = useRouter();
  const param = useParams();

  useEffect(() => {
    if (param.accessToken) {
      localStorage.setItem("accessToken", param.accessToken as string);
      router.push("/");
    }
  }, [param]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <AnimatedLoadingIcon size="xl" />
        <p className="mt-5 text-md text-center dark:text-dark-text">
          Authorizing...
        </p>
      </div>
    </div>
  );
}
