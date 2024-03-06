import { useState } from 'react';
import './AddFriendSectionContent.scss';
import { API_URL } from 'api/urls';
import { apiRequest } from 'api/request';
import PeopleListItem from 'components/PeopleListItem/PeopleListItem';
import { MenuIcon, MessageIcon } from 'assets/images/icons/tb';

const AddFriendSectionContent = () => {
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryParams = {};
      if (inputText) {
        queryParams.nickname = inputText;
      } else {
        queryParams.userHash = inputText;
      }

      console.log(queryParams);

      const response = await apiRequest.get(API_URL.USER_SEARCH, { params: queryParams });

      console.log(response.data);

      if (response.status !== 200) {
        throw new Error('서버에서 검색 결과를 가져오지 못했습니다.');
      }

      const data = await response.data;
      setSearchResults([data]);

      console.log(searchResults);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // useEffect(() => {});

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSendMessage = () => {};

  const handleOpenMenu = () => {};

  return (
    <div id="addFriend-section-tab">
      <div className="addFriend-section-header">
        <h3 className="title">친구 추가하기</h3>
        <form onSubmit={handleSubmit}>
          <div className="description">Discord 사용자명을 사용하여 친구를 추가할 수 있어요.</div>
          <div className={`addFriend-input-wrapper ${isFocused ? 'focused' : ''}`}>
            <div className="addFriend-input">
              <input
                type="text"
                className="inputText"
                placeholder="Discord 사용자명을 사용하여 친구를 추가할 수 있어요."
                maxLength="50"
                value={inputText}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit" className={`btn-blue ${inputText.length > 0 && isFocused ? '' : 'btn-disabled'}`}>
              친구 요청 보내기
            </button>
          </div>
          {/* <div className={'description form-footer'}>{'이미 친구가 된 사용자에요!'}</div> */}
        </form>
        {searchResults.map((result) => (
          <div key={result.userId}>
            <table>{result.userId}</table>
            <table>{result.nickname}</table>
            <table>{result.email}</table>
            <table>{result.userHash}</table>
            <table>{result.state}</table>
          </div>
        ))}
      </div>
      <div className="scroller">
        {searchResults.map((friend, index) => (
          <PeopleListItem
            key={index}
            avatar={friend.avatar}
            state={friend.state}
            username={friend.username}
            actions={[
              { Icon: MessageIcon, onClick: () => handleSendMessage() },
              { Icon: MenuIcon, onClick: () => handleOpenMenu() },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default AddFriendSectionContent;
