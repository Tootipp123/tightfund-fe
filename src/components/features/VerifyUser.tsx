"use client";

import { verifyUserToken } from "@/api/User";
import { useUserStore } from "@/store/User";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";

export default function VerifyUser() {
  const { setIsMember, setSubscriptionId, setProfileDetails }: any =
    useUserStore();

  useEffect(() => {
    const existingGuestId = localStorage.getItem("guestId");
    const newGuestId = uuidv4();
    if (existingGuestId !== newGuestId) {
      localStorage.setItem("guestId", newGuestId);
    }
  }, []);

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
      setProfileDetails(null);
    }
  }, [isError]);

  useEffect(() => {
    if (profile) {
      setProfileDetails(profile);
      setIsMember(profile.subscriptionId);
      setSubscriptionId(profile.subscriptionId);
      localStorage.setItem("subscriptionId", profile.subscriptionId);
      localStorage.setItem("profileId", profile._id);
      localStorage.setItem("userId", profile.userId);
    }
  }, [profile]);

  return <></>;
}
