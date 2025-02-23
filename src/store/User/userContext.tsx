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
  setIsMember: any;
  subscriptionId: any;
  setSubscriptionId: any;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");

  const value: ContextValue = {
    accessToken,
    setAccessToken,
    isMember,
    setIsMember,
    subscriptionId,
    setSubscriptionId,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
