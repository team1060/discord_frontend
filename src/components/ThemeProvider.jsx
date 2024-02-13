// ThemeProvider.js 파일 내의 ThemeProvider 함수 예시
import PropTypes from 'prop-types';

const ThemeProvider = props => {
  return <div className={`${props.theme}-theme`}>{props.children}</div>;
};

ThemeProvider.propTypes = {
  // theme를 문자열로 받아야 함을 선언
  theme: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node])
};

export default ThemeProvider;
