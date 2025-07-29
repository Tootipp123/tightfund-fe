import { apiRequest } from ".";
import { ResponseData } from "../types/global";

// Not used yet
// We use login on [...nextauth] to trigger from server
export const googleLogin = async (data: NonNullable<unknown>) => {
  const payload = {
    url: "/auth/google/login",
    method: "POST",
    data,
  };

  const { res, err }: ResponseData = await apiRequest({ payload });
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const deleteAccount = async () => {
  const payload = {
    url: "/auth/delete-account",
    method: "POST",
    data: {},
  };

  const { res, err }: ResponseData = await apiRequest({ payload });
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
