import PropTypes from 'prop-types';
import { UserInfo, ActionButtons } from './index';

const PeopleListItem = (props) => {
  return (
    <div className="people-item" onClick={props.onClick}>
      <div className="item-content">
        <UserInfo avatar={props.avatar} username={props.username} state={props.state} />
        <ActionButtons actions={props.actions} />
      </div>
    </div>
  );
};

PeopleListItem.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  username: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default PeopleListItem;
