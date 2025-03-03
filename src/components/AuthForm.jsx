import React, { useState } from "react";

// 회원가입인지 로그인인지 구분하기 위해 mode 를 props 로 받습니다.
// onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줄 겁니다.
const AuthForm = ({ mode, onSubmit }) => {
  // 무엇을 formData 에 넣어야 할까요?
  const signupForm = { id: "", password: "", nickname: "" };
  const loginForm = { id: "", password: "" };
  const profileForm = { nickname: "" };

  const [formData, setFormData] = useState(
    mode === "login" ? loginForm : mode === "signup" ? signupForm : profileForm
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 인증
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // 얘의 흐름을 잘 상기할것
    // 프로필 모드일때만, 입력 값 초기화
    if (mode === "profile") {
      setFormData({ nickname: "" });
    }
  };

  // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다!
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
        className="w-full p-4 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
        className="w-full p-4 border border-gray-300 rounded-lg"
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button
        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-100 transition hover:text-[#FF5A5F]"
        type="submit"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
