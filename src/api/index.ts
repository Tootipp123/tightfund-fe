"use client";

import constants from "@/utils/constants";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Note: accessToken is stored in localStorage for now.
 * This will be updated once refresh token action is available
 */

/**
 * Makes an API request with the provided payload.
 * @param payload - AxiosRequestConfig object containing request details.
 * @returns {Object} An object containing response and error, e.g., { res, err }.
 */
export const apiRequest = async ({
  payload,
  accessToken,
}: {
  payload: AxiosRequestConfig;
  accessToken?: string;
}) => {
  const config: AxiosRequestConfig = {
    ...payload,
    headers: {
      ...payload.headers,
      Authorization: `Bearer ${accessToken}`,
    },
    url: `${process.env.NEXT_PUBLIC_SERVICE_URL}${payload.url}`,
  };

  try {
    const res: AxiosResponse = await axios(config);
    if (!res) throw Error(constants.API_REQUEST_ERROR);

    return {
      res: res.data.data,
      err: null as AxiosError | null,
    };
  } catch (err) {
    return {
      res: null as AxiosResponse | null,
      err,
    };
  }
};
