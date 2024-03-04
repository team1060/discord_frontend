import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';
import Avatar from '../Avatar/Avatar';

const Channel = ({ link, avatar, name, onDelete }) => {
  return (
    <li className="channel">
      <div className="linkbtn">
        <Link to={link} className="link">
          <div className="avatar-with-text layout">
            <Avatar avatar={avatar} />
            <div className="content">
              <div className="nameWrapper">
                <div className="name">{name}</div>
              </div>
            </div>
          </div>
        </Link>
        <div className="close-button" onClick={onDelete}>
          <FaXmark size="16" />
        </div>
      </div>
    </li>
  );
};

Channel.propTypes = {
  link: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Channel;
