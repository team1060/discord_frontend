import PropTypes from 'prop-types';
import './PeopleListItem.scss';
import Avatar from '../Avatar/Avatar';
import { TbMessage2, TbDotsVertical } from 'react-icons/tb';

const PeopleListItem = ({ avatar, username, state, onClick }) => {
  return (
    <div className="people-item" onClick={onClick}>
      <div className="item-content">
        <div className="user-info">
          <Avatar avatar={avatar} />
          <div className="text">
            <div className="username">{username}</div>
            <div className="subtext">{state}</div>
          </div>
        </div>
        <div className="action">
          <div className="action-button">
            <TbMessage2 size="24" />
          </div>
          <div className="action-button">
            <TbDotsVertical size="24" />
          </div>
        </div>
      </div>
    </div>
  );
};

PeopleListItem.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  username: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PeopleListItem;
