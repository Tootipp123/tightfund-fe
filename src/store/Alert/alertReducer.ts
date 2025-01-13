"use client";

export const initialState = {
  showAlert: false,
  message: "",
  type: "",
  viewLink: "",
  action: "close",
};

const AlertReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        showAlert: true,
        message: payload.message,
        viewLink: payload.viewLink,
        type: "SUCCESS",
      };
    case "ERROR":
      return {
        ...state,
        showAlert: true,
        message: payload.message,
        viewLink: payload.viewLink,
        type: "ERROR",
      };
    case "REMOVE":
      return {
        ...state,
        showAlert: false,
        message: "",
        viewLink: "",
        type: "",
      };
    default:
      throw new Error("No case type found");
  }
};

export default AlertReducer;
