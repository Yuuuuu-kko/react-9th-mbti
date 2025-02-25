import React from "react";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  // 완성된 로직들이 아니에요! 참고만 하세요!
  const handleSignup = async (formData) => {
    console.log("버튼클릭");

    try {
      await register(formData);
      alert("가입에 성공했습니다.");
      navigate("/login");
    } catch (error) {
      alert("가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-primary-color mb-6">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
