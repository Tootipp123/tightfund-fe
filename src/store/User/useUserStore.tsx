import { useContext } from "react";
import { UserContext } from "./userContext";

export default function useUserStore() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserStore must be used within `UserContext`");
  }
  return context;
}
