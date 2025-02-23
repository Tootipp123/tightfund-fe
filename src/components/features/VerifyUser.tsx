"use client";

import { verifyUserToken } from "@/api/User";
import { useUserStore } from "@/store/User";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function VerifyUser() {
  const { setIsMember, setSubscriptionId } = useUserStore();

  const {
    isLoading,
    isError,
    data: profile,
  } = useQuery("verifyUser", verifyUserToken, {
    refetchOnMount: true,
    retry: 3,
  });

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("accessToken");
    }
  }, [isError]);

  useEffect(() => {
    if (profile) {
      setIsMember(profile.subscriptionId);
      setSubscriptionId(profile.subscriptionId);
      localStorage.setItem("subscriptionId", profile.subscriptionId);
      localStorage.setItem("profileId", profile._id);
      localStorage.setItem("userId", profile.userId);
    }
  }, [profile]);

  return <></>;
}
