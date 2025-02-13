"use client";

import AnimatedLoadingIcon from "@/components/ui/AnimatedLoadingIcon";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Authorizing() {
  const router = useRouter();
  const param = useParams();
  const searchParams = useSearchParams();

  const userId = searchParams.get("resourceId") as string;
  const profileId = searchParams.get("profileId") as string;

  useEffect(() => {
    if (param.accessToken) {
      localStorage.setItem("accessToken", param.accessToken as string);
      localStorage.setItem("userId", userId);
      localStorage.setItem("profileId", profileId);
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
