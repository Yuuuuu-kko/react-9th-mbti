import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
// import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import useAuthStore from "../zustand/authStore";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const user = useAuthStore((state) => state.user);

  const queryClient = useQueryClient();

  const addTestResultMutation = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["testResults"],
      });
    },
  });

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
    addTestResultMutation.mutate({
      nickname: user.nickname,
      result: mbtiDescriptions[mbtiResult],
      visibility: true,
      date: new Date(),
      userId: user.userId,
    });
    setResult(mbtiResult);
  };

  const handleNavigateToResults = () => {
    navigate("/testresultpage");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white h-screen">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-100 transition hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
