"use client";

import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext<ContextValue>(
  // @ts-ignore
  null
);

interface ContextValue {
  accessToken: string;
  setAccessToken: any;
  isMember: boolean;
  userId: string;
  setIsMember: any;
  subscriptionId: any;
  setSubscriptionId: any;
  setUserId: any;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [profileDetails, setProfileDetails] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");
  const [userId, setUserId] = useState("");

  const value: any = {
    accessToken,
    setAccessToken,
    profileDetails,
    setProfileDetails,
    isMember,
    setIsMember,
    userId,
    setUserId,
    subscriptionId,
    setSubscriptionId,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
