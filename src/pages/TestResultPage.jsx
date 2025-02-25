import React from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  getTestResults,
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";

const TestResultPage = () => {
  const queryClient = useQueryClient();

  const QUERY_KEY = {
    MBTI: "testResults",
  };

  const {
    data: testResult = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
    retry: 1,
  });
  console.log(testResult);

  // 공개 전환
  const updateVisibilityMutation = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
      toast.success("전환되었습니다!");
    },
  });

  //뮤테이션으로 결과 삭제
  const deleteTestResultMutation = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MBTI],
      });
    },
  });

  if (isPending) {
    return <div>로딩중입니다</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다</div>;
  }

  const handleDeleteResult = (id) => {
    const result = window.confirm("정말 삭제하시겠습니까?");
    if (!result) return;
    deleteTestResultMutation.mutate(id);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-primary-color mb-10">
        테스트 결과 페이지
      </h1>
      {isPending && <p>로딩 중...</p>}
      {isError && <p>데이터를 불러오는 중 오류가 발생했습니다.</p>}
      {testResult?.map((data) => (
        <>
          <div key={data.id}>
            <div className="flex justify-end items-center gap-3">
              {data.result}
            </div>
            <div className="flex justify-end items-center gap-3">
              {data.nickname}
            </div>
            <div className="flex justify-end items-center gap-3">
              {data.date}
            </div>
          </div>

          <button className="text-white px-2 py-1 bg-red-800 hover:bg-red-500 rounded-lg transition-colors">
            공개여부
          </button>
          <button
            onClick={() => handleDeleteResult(data.id)}
            className="
            text-white
            px-2
            py-1
            bg-red-800
            hover:bg-red-500
            rounded-lg
            transition-colors"
          >
            삭제
          </button>
        </>
      ))}
    </div>
  );
};

export default TestResultPage;
