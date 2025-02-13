import { ResponseData } from "@/types/global";
import { apiRequest } from ".";

export const getUser = async () => {
  const payload = {
    url: "/v1/users/get",
    method: "GET",
  };

  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const updateUserAccessApi = async () => {
  const payload = {
    url: "/v1/users/access-update",
    method: "PUT",
  };

  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
