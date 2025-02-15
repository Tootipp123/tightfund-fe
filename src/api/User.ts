import { apiRequest } from ".";

/**
 * Log in a user using Google authentication.
 * @param data - Data for Google login.
 * @returns {Object} User data upon successful login.
 * @throws {Object} Error object with details if login fails.
 */
export const loginGoogle = async (data: NonNullable<unknown>) => {
  const payload = {
    url: "/user/login/google",
    method: "POST",
    data,
  };

  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const loginUser = async (data: NonNullable<unknown>) => {
  const payload = {
    url: "/user/login",
    method: "POST",
    data,
  };

  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const getUserRoleApi = async () => {
  const payload = {
    url: "/user/role/get",
    method: "GET",
  };

  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const editUserRoleApi = async (data: NonNullable<unknown>) => {
  const payload = {
    url: "/user/role/edit",
    method: "PATCH",
    data,
  };

  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

export const signupUser = async (data: NonNullable<unknown>) => {
  const payload = {
    url: "/user/register",
    method: "POST",
    data,
  };

  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

/**
 * Log out a user.
 * @param data - Data for user logout.
 * @returns {Object} Logout response.
 * @throws {Object} Error object with details if logout fails.
 */
export const logoutUser = async () => {
  const payload = {
    url: "/v1/user/logout",
    method: "POST",
  };

  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};

/**
 * Verify user access token.
 * @returns {Object} Verification response.
 * @throws {Object} Error object with details if verification fails.
 */
export const verifyUserToken = async () => {
  const payload = {
    url: "/v1/user/verify-access",
    method: "GET",
  };

  const { res, err }: any = await apiRequest(payload);
  if (err) {
    throw err?.response?.data;
  }
  return res;
};
