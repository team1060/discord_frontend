import Avatar from 'components/Avatar';
import PropTypes from 'prop-types';
import './UserInfo.scss';

const UserInfo = ({ avatar, username, state }) => {
  return (
    <div className="user-info">
      <Avatar avatar={avatar} />
      <div className="text">
        <div className="username">{username}</div>
        <div className="subtext">{state}</div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  username: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default UserInfo;
