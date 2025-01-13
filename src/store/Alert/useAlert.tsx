import { useContext } from "react";
import { AlertContext } from "./alertContext";

export default function useAlert() {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlert must be used within `AlertContext`");
  }
  return context;
}
