import PropTypes from 'prop-types';
const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      {avatar}
      <div className="state">
        <div className="stateCircle"></div>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.node,
  state: PropTypes.string,
};
export default Avatar;
