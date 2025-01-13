import { apiRequest } from ".";

export const createGuestApi = async (guestId: string) => {
  const payload = {
    url: `/v1/auth/guest/create`,
    method: "POST",
    data: {
      guestId,
    },
  };
  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
