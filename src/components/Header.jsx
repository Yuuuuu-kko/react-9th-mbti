import { Link } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const Header = () => {
  const { user, logout } = useAuthStore((state) => state);

  const handleLogout = () => {
    logout();
    useAuthStore.persist.clearStorage("user");
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center items-center py-2 bg-white">
      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li className="text-pink-400">
            {user ? user.nickname : "게스트"}님 환영합니다!
          </li>
          {/* 로그인 상태일 경우, 버튼 안보이게 수정 필요 */}

          <li>
            <Link to="/profile">프로필</Link>
          </li>
          <li>
            <Link to="/testpage">테스트</Link>
          </li>
          <li>
            <Link to="/testresultpage">결과보기</Link>
          </li>

          <li>
            {user ? (
              <Link className="text-red-400" to="/log-in">
                <button
                  onClick={handleLogout}
                  className="w-20 text-white py-3 bg-red-400 hover:bg-red-100 rounded-lg transition-colors"
                >
                  로그아웃
                </button>
              </Link>
            ) : (
              <Link className="text-red-400" to="/log-in">
                <button className="w-20 text-white py-3 bg-red-400 hover:bg-red-100 rounded-lg transition-colors">
                  로그인
                </button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
