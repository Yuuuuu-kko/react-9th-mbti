import { jsonAPI } from "./authInstance";

export const getTestResults = async () => {
  try {
    const response = await jsonAPI.get("/testResults");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTestResult = async (resultData) => {
  try {
    const response = await jsonAPI.post("/testResults", resultData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTestResult = async (id) => {};

export const updateTestResultVisibility = async (id, visibility) => {};
