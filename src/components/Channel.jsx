import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Avatar } from './index';
import { XmarkIcon } from 'assets/images/icons/fa6';

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
          <XmarkIcon size={16} />
        </div>
      </div>
    </li>
  );
};

Channel.propTypes = {
  link: PropTypes.string,
  avatar: PropTypes.node,
  name: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Channel;
