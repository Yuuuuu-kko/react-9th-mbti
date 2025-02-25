import { authAPI } from "./authInstance";

export const register = async (userData) => {
  const response = await authAPI.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await authAPI.post("/login", userData);
  return response.data;
};
