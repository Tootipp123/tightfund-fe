import { apiRequest } from ".";

export const createGuestApi = async (guestId: any, activity: string) => {
  const payload = {
    url: `/v1/guest`,
    method: "POST",
    data: {
      guestId,
      activity,
    },
  };
  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
