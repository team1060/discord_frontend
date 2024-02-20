import Form from '../../components/Form';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/paths/paths';
import { useEffect, useState } from 'react';
import { apiRequest } from '../../api/request';
import { API_URL } from '../../api/urls';
import { jwtDecode } from 'jwt-decode';
const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const hash = window.location.hash;
  const token = new URLSearchParams(hash.substring(1)).get('token');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [passwordInputClass, setPasswordInputClass] = useState('');
  const [passwordLabel, setPasswordLabel] = useState('새 비밀번호');

  useEffect(() => {
    // useEffect를 사용하여 페이지가 로드될 때 토큰을 디코딩하도록 설정
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken); // 디코딩된 이메일 출력
      const email = decodedToken.email;
      setEmail(email);
    }
  }, [token]); // token이 변경될 때만 실행되도록 설정

  const handleSubmit = async () => {
    const checkPasswordDuplicate = (password) => {
      const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
      if (!regex.test(password)) {
        console.log(password);
        setPasswordLabel('비밀번호 - 비밀번호는 6자 이상이여야 해요.');
        setPasswordInputClass('input-label-invalid');
        return false;
      } else {
        setPasswordLabel('비밀번호');
        setPasswordInputClass('text-input');
        return true;
      }
    };

    const isPasswordDuplicate = checkPasswordDuplicate(password);

    if (!isPasswordDuplicate) {
      console.log('올바르지 않은 비밀번호입니다.');
      return;
    }

    const resetPasswordFormData = new FormData();

    resetPasswordFormData.append('email', email);
    resetPasswordFormData.append('password', password);
    console.log(resetPasswordFormData);
    try {
      const response = await apiRequest.putFormData(API_URL.EMAIL_PUT, resetPasswordFormData);
      console.log(response.data);

      const loginFormData = new FormData();

      loginFormData.append('email', email);
      loginFormData.append('password', password);

      try {
        const response = await apiRequest.postFormData(API_URL.LOGIN, loginFormData);
        console.log(response.data);

        navigate(PATH.MAIN_SCREEN);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="reset-password-page">
      <div className="reset-password-form">
        <Form className="wrapper" onSubmit={handleSubmit}>
          <div className="inner">
            <div className="reset-header">
              <img src='https://via.placeholder.com/171x84' alt='비밀번호 변경하기'></img>
              <h1>비밀번호 변경하기</h1>
            </div>
            <div className="input-section">
              <label className={passwordInputClass}>{passwordLabel}</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="text-input"></input>
            </div>
            <div>
              <button>비밀번호 변경하기</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
