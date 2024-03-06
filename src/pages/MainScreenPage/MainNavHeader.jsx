import SearchBar from 'components/SearchBar';

const MainNavHeader = () => {
  const handleButtonClick = {};
  return (
    <div id="main-nav-header">
      <SearchBar
        label="대화 찾기 또는 시작하기"
        className="search-main-nav"
        onButtonClick={handleButtonClick}
        tagName="button"
      />
    </div>
  );
};

export default MainNavHeader;
