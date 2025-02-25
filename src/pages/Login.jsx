import AuthForm from "../components/authForm";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore((state) => state);

  const handleLogin = async (formData) => {
    try {
      const { accessToken, userId, nickname } = await login(formData);
      setUser({ userId, nickname });
      setToken(accessToken);
      alert("로그인에 성공했습니다.");
      navigate("/");
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
