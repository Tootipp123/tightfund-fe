import { ResponseData } from "@/types/global";
import { apiRequest } from "../api";

export const getProfile = async () => {
  const payload = {
    url: `/v1/profiles/get`,
    method: "GET",
  };

  const { res, err }: ResponseData = await apiRequest({ payload });
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const updateFreeGenerateTriesCount = async () => {
  const payload = {
    url: `/v1/profiles/free-trial/generate`,
    method: "PATCH",
    data: {},
  };

  const { res, err }: ResponseData = await apiRequest({ payload });
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const getFreeGenerateTriesCount = async () => {
  const payload = {
    url: `/v1/profiles/free-trial/generate`,
    method: "GET",
  };

  const { res, err }: ResponseData = await apiRequest({ payload });
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
