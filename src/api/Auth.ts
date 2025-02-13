import { ResponseData } from "@/types/global";
import { apiRequest } from ".";

export const discordLogin = async () => {
  const payload = {
    url: `/v1/auth/discord/login`,
  };
  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const discordCallback = async (code: string) => {
  const payload = {
    url: `/v1/auth/discord/callback?code=${code}`,
  };
  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const createGuestApi = async (guestId: string) => {
  const payload = {
    url: `/v1/auth/guest/create`,
    method: "POST",
    data: {
      guestId,
    },
  };
  const { res, err }: ResponseData = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
