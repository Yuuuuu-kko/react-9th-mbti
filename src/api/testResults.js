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

export const deleteTestResult = async (id) => {
  try {
    const response = await jsonAPI.delete(`/testResults/${id}`);
    return response.data;
  } catch (error) {
    console.error("테스트 결과 삭제 중 오류 발생:", error);
    throw error;
  }
};

export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await jsonAPI.patch(`/testResults/${id}`, { visibility });
    return response.data;
  } catch (error) {
    console.error("공개 여부 변경 중 오류 발생:", error);
    throw error;
  }
};
