import { ResponseData } from "@/types/global";
import { apiRequest } from ".";

export const requestPaypalTokenApi = async () => {
  const payload = {
    url: `/v1/paypal/token`,
    method: "POST",
    data: {},
  };
  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
