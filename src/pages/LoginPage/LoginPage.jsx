import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import { apiRequest } from '../../api/request';
import { API_URL } from '../../api/urls';
import { useState } from 'react';
import { PATH } from '../../utils/paths/paths';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailLabel, setEmailLabel] = useState('이메일');
  const [passwordLabel, setPasswordLabel] = useState('비밀번호');

  const [emailInputClass, setEmailInputClass] = useState('input-label');
  const [passwordInputClass, setPasswordInputClass] = useState('input-label');

  const handleSubmit = async () => {
    const checkEmailDuplicate = async (email) => {
      if (!email.trim()) {
        setEmailLabel('이메일 - 이메일은 필수 입력 값입니다.');
        setEmailInputClass('input-label-invalid');
        return false;
      }
      try {
        const response = await apiRequest.get(API_URL.REGISTER_GET, { params: { email } });
        console.log(response.data);
        const members = response.data;

        // 이메일이 중복되는지 확인
        const isDuplicate = members.some((member) => member.email === email);
        if (isDuplicate) {
          setEmailLabel('이메일 - 이미 등록된 이메일입니다.');
          setEmailInputClass('input-label-invalid');
          return false; // 유효성 검사 실패
        }
        setEmailLabel('이메일');
        setEmailInputClass('text-input');
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    };

    const checkPasswordDuplicate = (password) => {
      const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
      if (!regex.test(password)) {
        console.log(password);
        setPasswordLabel('비밀번호 - 유효하지 않은 아이디 또는 비밀번호입니다.');
        setPasswordInputClass('input-label-invalid');
        return false;
      } else {
        setPasswordLabel('비밀번호');
        setPasswordInputClass('text-input');
        return true;
      }
    };

    const isEmailDuplicate = await checkEmailDuplicate(email);
    const isPasswordDuplicate = checkPasswordDuplicate(password);

    if (!isEmailDuplicate) {
      console.log('이메일이 중복되었습니다.');
      return;
    }
    if (!isPasswordDuplicate) {
      console.log('올바르지 않은 비밀번호입니다.');
      return;
    }

    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await apiRequest.postFormData(API_URL.LOGIN, formData);
      console.log(response.data);

      navigate(PATH.MAIN_SCREEN);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="login-page">
      <div className="login-form">
        <Form className="wrapper" onSubmit={handleSubmit}>
          <div className="inner">
            <div className="login-header">
              <h1>돌아오신 것을 환영해요!</h1>
            </div>
            <div className="input-section">
              <label className={emailInputClass}>
                {emailLabel} <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="text-input"></input>
            </div>
            <div className="input-section">
              <label className={passwordInputClass}>
                {passwordLabel} <span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"></input>
            </div>
            <div>
              <div className="link">비밀번호를 잊으셨나요?</div>
            </div>
            <div>
              <button>로그인</button>
            </div>
            <div>
              <span className="join-link">계정이 필요한가요?</span>
              <Link to={PATH.REGISTER} className="link">
                가입하기
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
