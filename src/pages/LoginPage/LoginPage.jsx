import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import { apiRequest } from '../../api/request';
import { API_URL } from '../../api/urls';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (email && password) {
      const formData = new FormData();

      formData.append('email', email);
      formData.append('password', password);

      try {
        const response = await apiRequest.postFormData(API_URL.LOGIN, formData);
        console.log(response?.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('이메일 또는 비밀번호 미입력');
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
              <label className="input-label">
                이메일 또는 전화번호 <span className="required">*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-input"></input>
            </div>
            <div className="input-section-last">
              <label className="input-label">
                비밀번호 <span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
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
              <Link to="/register" className="link">
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
