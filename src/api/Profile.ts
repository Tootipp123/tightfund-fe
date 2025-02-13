import { ResponseData } from "@/types/global";
import { apiRequest } from "../api";

export const getProfileApi = async () => {
  const payload = {
    url: `/v1/profiles/get/${localStorage.getItem("profileId")}`,
    method: "GET",
  };

  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
