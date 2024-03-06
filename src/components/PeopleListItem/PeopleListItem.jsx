import PropTypes from 'prop-types';
import './PeopleListItem.scss';
import { TbMessage2, TbDotsVertical } from 'react-icons/tb';
import UserInfo from 'components/UserInfo';

const PeopleListItem = ({ avatar, username, state, onClick }) => {
  return (
    <div className="people-item" onClick={onClick}>
      <div className="item-content">
        <UserInfo avatar={avatar} username={username} state={state} />
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
