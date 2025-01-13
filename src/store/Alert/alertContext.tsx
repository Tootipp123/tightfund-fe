"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import alertReducer, { initialState } from "./alertReducer";

export const AlertContext = createContext<any>(
  // @ts-ignore
  null
);

interface Alert {
  type: string | null;
  message: string | null;
  viewLink?: string;
}

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  /**
   * The primary function for dispatching the alert
   */
  const dispatchAlert = useCallback(
    ({ type, message, viewLink }: Alert) => {
      dispatch({
        type,
        payload: {
          message,
          viewLink,
        },
      });
    },
    [dispatch]
  );

  // Value context prop
  const value: any = useMemo(() => {
    return {
      dispatchAlert,
      type: state.type,
      showAlert: state.showAlert,
      message: state.message,
      viewLink: state.viewLink,
    };
  }, [
    dispatchAlert,
    state.type,
    state.showAlert,
    state.message,
    state.viewLink,
  ]);

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};
