import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../api/hooks/login';
import { PATH } from '../../utils/paths/paths';

const MainScreenPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogoutClick = () => {
    handleLogout(); // 로그아웃 함수 호출
    navigate(PATH.LOGIN); // 로그아웃 후 리다이렉션
  };

  return (
    <div>
      <h2>로그아웃</h2>
      <button onClick={handleLogoutClick}>로그아웃</button>
    </div>
  );
};

export default MainScreenPage;
