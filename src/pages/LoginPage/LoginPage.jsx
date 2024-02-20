import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import { apiRequest } from '../../api/request';
import { API_URL } from '../../api/urls';
import { useState } from 'react';
import { PATH } from '../../utils/paths/paths';
import Modal from '../../components/Modal';
import { login } from '../../api/hooks/login';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailLabel, setEmailLabel] = useState('이메일');
  const [passwordLabel, setPasswordLabel] = useState('비밀번호');

  const [emailInputClass, setEmailInputClass] = useState('input-label');
  const [passwordInputClass, setPasswordInputClass] = useState('input-label');

  const handleSubmit = async () => {
    const checkEmailDuplicate = (email) => {
      if (!email.trim()) {
        setEmailLabel('이메일 - 이메일은 필수 입력 값입니다.');
        setEmailInputClass('input-label-invalid');
        return false;
      }
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        setEmailLabel('이메일 - 이메일 형식이 올바르지 않습니다.');
        setEmailInputClass('input-label-invalid');
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

    const isEmailDuplicate = checkEmailDuplicate(email);
    const isPasswordDuplicate = checkPasswordDuplicate(password);

    if (!isEmailDuplicate) {
      console.log('유효하지 않은 이메일입니다.');
    }
    if (!isPasswordDuplicate) {
      console.log('올바르지 않은 비밀번호입니다.');
    }

    try {
      await login(email, password);
      navigate(PATH.MAIN_SCREEN);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setEmailLabel('이메일 - 유효하지 않은 아이디 또는 비밀번호입니다.');
        setEmailInputClass('input-label-invalid');
        setPasswordLabel('비밀번호 - 유효하지 않은 아이디 또는 비밀번호입니다.');
        setPasswordInputClass('input-label-invalid');
      } else {
        console.error(error);
      }
      return false;
    }
  };

  const handlePasswordRecovery = async () => {
    if (!email) {
      setEmailLabel('이메일 - 필수 입력 칸이에요.');
      setEmailInputClass('input-label-invalid');
      return false;
    }
    try {
      const response = await apiRequest.post(API_URL.EMAIL_POST, { email: email });
      console.log(response.data);

      setEmailLabel('이메일');
      setEmailInputClass('text-input');
      setPasswordLabel('비밀번호');
      setPasswordInputClass('text-input');
      setModalOpen(true);
      return true;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setEmailLabel('이메일 - 존재하지 않는 이메일입니다.');
        setEmailInputClass('input-label-invalid');
        setPasswordLabel('비밀번호');
        setPasswordInputClass('text-input');
      } else {
        console.error(error);
      }
      return false;
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
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
              <div className="link" onClick={handlePasswordRecovery}>
                비밀번호를 잊으셨나요?
              </div>
            </div>
            <div>
              <button className="button-full-width">로그인</button>
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
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div className="modal-header">
          <h2>지시사항 이메일로 전송 완료</h2>
        </div>
        <div className="modal-content">
          <p>
            계정 비밀번호 변경 방법을
            <strong>{email}</strong>
            (으)로 보냈어요. 받은 편지함 또는 스팸함을 확인해주세요.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default LoginPage;
