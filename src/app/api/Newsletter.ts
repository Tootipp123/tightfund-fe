import { apiRequest } from ".";

export const createNewsletterSub = async (email: string) => {
  const payload = {
    url: `/v1/newsletter/subscribe`,
    method: "POST",
    data: {
      email,
    },
  };
  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
