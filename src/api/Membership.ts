import { ResponseData } from "@/types/global";
import { apiRequest } from "../api";

export const cancelMembershipApi = async (
  subscriptionId: string,
  reason: string
) => {
  const payload = {
    url: `/v1/membership/cancel`,
    method: "POST",
    data: {
      subscriptionId,
      reason,
    },
  };

  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
