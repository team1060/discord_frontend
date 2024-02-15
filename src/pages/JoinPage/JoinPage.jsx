import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import { GoChevronDown } from 'react-icons/go';
import { apiRequest } from '../../api/request';
import { API_URL } from '../../api/urls';
import { useEffect, useState } from 'react';

const JoinPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [user_hash, setUserHash] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = async () => {
    const validity =
      email && nickname && user_hash && password && birth;
      // true;
    if (validity) {
      const formData = new FormData();

      formData.append('email', email);
      formData.append('nickname', nickname);
      formData.append('user_hash', user_hash);
      formData.append('password', password);
      formData.append('birth', birth);
      try {
        const response = await apiRequest.postFormData(API_URL.REGISTER_POST, formData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('미입력 있음');
    }
  };
  useEffect(() => {
    setBirth(year + '/' + month + '/' + day);
  }, [year, month, day]);
  return (
    <div id="join-page">
      <div className="join-form">
        <Form className="wrapper" onSubmit={handleSubmit}>
          <div className="inner">
            <div className="join-header">
              <h1>계정 만들기</h1>
            </div>
            <div className="input-section">
              <label className="input-label">
                이메일 <span className="required">*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="text-input"></input>
            </div>
            <div className="input-section">
              <label className="input-label">별명</label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                onChange={(e) => setNickname(e.target.value)}
                className="text-input"></input>
            </div>
            <div className="input-section">
              <label className="input-label">
                사용자명 <span className="required">*</span>
              </label>
              <input
                type="text"
                name="user_hash"
                id="user_hash"
                onChange={(e) => setUserHash(e.target.value)}
                className="text-input"></input>
            </div>
            <div className="input-section">
              <label className="input-label">
                비밀번호 <span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"></input>
            </div>
            <div className="input-section-last">
              <fieldset>
                <label className="input-label">
                  생년월일 <span className="required">*</span>
                </label>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className="input-label-inner">
                    <div>
                      <input
                        type="text"
                        name="year"
                        id="year"
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="년"
                        className="input-inner"></input>
                    </div>
                    <div className="selector">
                      <GoChevronDown />
                    </div>
                  </div>
                  <div className="input-label-inner">
                    <div>
                      <input
                        type="text"
                        name="month"
                        id="month"
                        onChange={(e) => setMonth(e.target.value)}
                        placeholder="월"
                        className="input-inner"></input>
                    </div>
                    <div className="selector">
                      <GoChevronDown />
                    </div>
                  </div>
                  <div className="input-label-inner">
                    <div>
                      <input
                        type="text"
                        name="day"
                        id="day"
                        onChange={(e) => setDay(e.target.value)}
                        placeholder="일"
                        className="input-inner"></input>
                    </div>
                    <div className="selector">
                      <GoChevronDown />
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div>
              <button>계속하기</button>
            </div>
            <div className="policy-agreement">
              <span>등록하는 순간 Discord의 </span>
              <Link to="/register" className="link">
                서비스 이용 약관
              </Link>
              <span>과 </span>
              <Link to="/register" className="link">
                개인정보 보호 정책
              </Link>
              <span>에 동의하게 됩니다.</span>
            </div>
            <div>
              <Link to="/register" className="link">
                이미 계정이 있으신가요?
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default JoinPage;
