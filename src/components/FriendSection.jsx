import PropTypes from 'prop-types';

import { useState } from 'react';
import { MenuIcon, MessageIcon } from 'assets/images/icons/tb';
import { ZeroIcon } from 'assets/images/icons/fa';
import { PeopleListItem, SearchBar } from './index';

const FriendSection = ({ state, stateFriend }) => {
  const [friends, SetFriends] = useState([
    { avatar: <ZeroIcon size="24" />, state: '온라인', username: '이길호' },

    { avatar: <ZeroIcon size="24" />, state: '온라인', username: '이길호' },
  ]);

  const handleAddFriend = () => {
    SetFriends((prevFriends) => [
      ...prevFriends,
      { avatar: <ZeroIcon size="24" />, state: '온라인', username: '이길호' }, // 추후 실제 값으로 수정
    ]);
  };

  let friend_count = friends.length;

  const handleSendMessage = () => {};
  const handleOpenDiaLog = () => {};

  return (
    <div id={`${state}-section-tab`}>
      <div className="search-wrapper">
        <SearchBar label="검색하기" className="search-section" tagName="input" />
      </div>
      <div className="section-title">
        <h3 className="title small">{`${stateFriend} — ${friend_count}명`}</h3>
      </div>
      <div className="scroller">
        {friends.map((friend, index) => (
          <PeopleListItem
            key={index}
            avatar={friend.avatar}
            state={friend.state}
            username={friend.username}
            onClick={handleAddFriend}
            actions={[
              { Icon: MessageIcon, onClick: () => handleSendMessage() },
              { Icon: MenuIcon, onClick: () => handleOpenDiaLog() },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

FriendSection.propTypes = {
  state: PropTypes.string.isRequired,
  stateFriend: PropTypes.string.isRequired,
};
export default FriendSection;
