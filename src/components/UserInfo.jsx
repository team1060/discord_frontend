import PropTypes from 'prop-types';
import { Avatar } from './index';

const UserInfo = ({ avatar, username, state, userhash }) => {
  return (
    <div className="user-info">
      <Avatar avatar={avatar} />
      <div className="text">
        <div className="info">
          <div className="username">{username}</div>
          <div className="userhash">{userhash}</div>
        </div>
        <div className="subtext">{state}</div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  username: PropTypes.string.isRequired,
  userhash: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default UserInfo;
