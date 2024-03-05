import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import './FriendSection.scss';
import PeopleListItem from '../PeopleListItem/PeopleListItem';
import { FaCreativeCommonsZero } from 'react-icons/fa';
import { useState } from 'react';

const FriendSection = ({ state, stateFriend }) => {
  const [friends, SetFriends] = useState([
    { avatar: <FaCreativeCommonsZero size="24" />, state: '온라인', username: '이길호' },

    { avatar: <FaCreativeCommonsZero size="24" />, state: '온라인', username: '이길호' },
  ]);

  const handleAddFriend = () => {
    SetFriends((prevFriends) => [
      ...prevFriends,
      { avatar: <FaCreativeCommonsZero size="24" />, state: '온라인', username: '이길호' }, // 추후 실제 값으로 수정
    ]);
  };

  let friend_count = friends.length;
  return (
    <div id={`${state}-section-tab`}>
      <div className="search-wrapper">
        <SearchBar label="검색하기" className="search-section" tagName="input" />
      </div>
      <div className="section-title">
        <h3 className="title small">{`${stateFriend} — ${friend_count}명`}</h3>
      </div>
      <div className="people-list scroller">
        {friends.map((friend, index) => (
          <PeopleListItem
            key={index}
            avatar={friend.avatar}
            state={friend.state}
            username={friend.username}
            onClick={handleAddFriend}
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
