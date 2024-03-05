import { useState } from 'react';
import './FriendSection.scss';

const AddFriendSectionContent = () => {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 요청 보내기 추가 예정
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
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
      </div>
    </div>
  );
};

export default AddFriendSectionContent;
