import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Channel = ({ link, avatar, name }) => {
  return (
    <li className="channel">
      <div className="linkbtn">
        <Link to={link} className="link">
          <div className="avatar-with-text layout">
            <div className="avatar">{avatar}</div>
            <div className="content">
              <div className="nameWrapper">
                <div className="name">{name}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

Channel.propTypes = {
  link: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default Channel;