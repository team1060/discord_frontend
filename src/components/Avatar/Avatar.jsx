import './Avatar.scss';
import PropTypes from 'prop-types';

const Avatar = ({ avatar }) => {
  return <div className="avatar">{avatar}</div>;
};

Avatar.propTypes = {
  avatar: PropTypes.node,
};
export default Avatar;
