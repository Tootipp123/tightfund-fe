import { apiRequest } from ".";
import { ResponseData } from "../types/global";

const ENDPOINT = "/financial-details";

export const getFinancialDetails = async (
  data: NonNullable<unknown>,
  accessToken: string
) => {
  const payload = {
    url: `${ENDPOINT}/get`,
    method: "GET",
    data,
  };

  const { res, err }: ResponseData = await apiRequest({
    payload,
    accessToken,
  });

  if (err) {
    throw err?.response?.data;
  }

  return res;
};

export const createFinancialDetails = async ({
  data,
  accessToken,
}: {
  data: any;
  accessToken: string;
}) => {
  const payload = {
    url: `${ENDPOINT}/create`,
    method: "POST",
    data,
  };

  const { res, err }: ResponseData = await apiRequest({
    payload,
    accessToken,
  });

  if (err) {
    throw err?.response?.data;
  }

  return res;
};
