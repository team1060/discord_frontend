import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import { GoChevronDown } from 'react-icons/go';
import { apiRequest } from '../../api/request';
import { API_URL } from '../../api/urls';
import { useEffect, useState } from 'react';
import { PATH } from '../../utils/paths/paths';
import { login } from '../../api/hooks/login';

const JoinPage = () => {
  const navigate = useNavigate();

  // form의 입력 값
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [user_hash, setUserHash] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // 각 라벨의 값 (유효성 검사 시 변경)
  const [emailLabel, setEmailLabel] = useState('이메일');
  const nicknameLabel = '별명';
  const [userHashLabel, setUserHashLabel] = useState('사용자명');
  const [passwordLabel, setPasswordLabel] = useState('비밀번호');
  const [birthLabel, setBirthLabel] = useState('생년월일');

  const [emailInputClass, setEmailInputClass] = useState('input-label');
  const [userHashInputClass, setUserHashInputClass] = useState('input-label');
  const [passwordInputClass, setPasswordInputClass] = useState('input-label');
  const [birthInputClass, setBirthInputClass] = useState('input-label');

  const handleSubmit = async () => {
    // 유효성
    const checkEmailDuplicate = async (email) => {
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

    const checkUserHashDuplicate = async (user_hash) => {
      if (!user_hash.trim()) {
        setUserHashLabel('사용자명 - 사용자명은 필수 입력 값입니다.');
        setUserHashInputClass('input-label-invalid');
        return false;
      }
      if (user_hash.length < 2 || user_hash.length > 32) {
        setUserHashLabel('사용자명 - 2~32자 이내의 값을 입력해주세요.');
        setUserHashInputClass('input-label-invalid');
        return false;
      }
      try {
        const response = await apiRequest.get(API_URL.REGISTER_GET, { params: { user_hash } });
        console.log(response.data);
        const members = response.data;

        // 사용자명이 중복되는지 확인
        const isDuplicate = members.some((member) => member.user_hash === user_hash);
        if (isDuplicate) {
          setUserHashLabel('사용자명 - 사용할 수 없거나 중복된 사용자명입니다.');
          setUserHashInputClass('input-label-invalid');
          return false; //
        }
        setUserHashLabel('사용자명');
        setUserHashInputClass('text-input');
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
        setPasswordLabel(
          '비밀번호 - 8에서 20자 사이여야 합니다. 적어도 하나 이상의 영어 대소문자, 숫자, 특수문자(@$!%*?&)를 포함해야 합니다.',
        );
        setPasswordInputClass('input-label-invalid');
        return false;
      } else {
        setPasswordLabel('비밀번호');
        setPasswordInputClass('text-input');
        return true;
      }
    };

    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      return { year, month, day };
    };

    const checkBirthDuplicate = (year, month, day) => {
      if (year.trim() === '' || month.trim() === '' || day.trim() === '') {
        setBirthLabel('생년월일 - 필수 입력 값입니다.');
        setBirthInputClass('input-label-invalid');
        return false;
      } else {
        const inputYear = parseInt(year);
        const inputMonth = parseInt(month);
        const inputDay = parseInt(day);
        const { year: currentYear, month: currentMonth, day: currentDay } = getCurrentDate();

        if (
          inputYear < 1900 ||
          inputYear > currentYear ||
          (inputYear === currentYear && inputMonth > currentMonth) ||
          (inputYear === currentYear && inputMonth === currentMonth && inputDay > currentDay)
        ) {
          setBirthLabel('생년월일 - 유효하지 않은 값입니다.');
          setBirthInputClass('input-label-invalid');
          return false;
        } else {
          setBirthLabel('생년월일');
          setBirthInputClass('text-input');
          return true;
        }
      }
    };

    const isEmailDuplicate = await checkEmailDuplicate(email);
    const isUserHashDuplicate = await checkUserHashDuplicate(user_hash);
    const isPasswordDuplicate = checkPasswordDuplicate(password);
    const isBirthDuplicate = checkBirthDuplicate(year, month, day);

    if (!isEmailDuplicate) {
      console.log('이메일이 중복되었습니다.');
      return;
    }
    if (!isUserHashDuplicate) {
      console.log('올바르지 않은 사용자명입니다.');
      return;
    }
    if (!isPasswordDuplicate) {
      console.log('올바르지 않은 비밀번호입니다.');
      return;
    }
    if (!isBirthDuplicate) {
      console.log('올바르지 않은 생년월일입니다.');
      return;
    }

    const registerFormData = new FormData();

    registerFormData.append('email', email);
    registerFormData.append('nickname', nickname);
    registerFormData.append('user_hash', user_hash);
    registerFormData.append('password', password);
    registerFormData.append('birth', birth);

    try {
      const response = await apiRequest.postFormData(API_URL.REGISTER_POST, registerFormData);
      console.log(response.data);

      try {
        await login(email, password);
        navigate(PATH.MAIN_SCREEN);
      } catch (error) {
        console.error(error);
      }

      // 데이터 처리 후 로그인 페이지로 이동
    } catch (error) {
      console.error(error);
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
              <label className="input-label">{nicknameLabel}</label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                onChange={(e) => setNickname(e.target.value)}
                className="text-input"></input>
            </div>
            <div className="input-section">
              <label className={userHashInputClass}>
                {userHashLabel} <span className="required">*</span>
              </label>
              <input
                type="text"
                name="user_hash"
                id="user_hash"
                onChange={(e) => setUserHash(e.target.value)}
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
            <div className="input-section-last">
              <fieldset>
                <label className={birthInputClass}>
                  {birthLabel} <span className="required">*</span>
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
              <button className="button-full-width">계속하기</button>
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
              <Link to={PATH.LOGIN} className="link">
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
