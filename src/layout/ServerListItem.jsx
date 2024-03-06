import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServerListItem = ({ link, className, name, onClick }) => {
  return (
    <div className="listItem" onClick={onClick}>
      <div className="pill wrapper">
        <span className="item"></span>
      </div>
      <Link to={link} className="link">
        <div>
          <div className={`childWrapper ${className}`}>{name}</div>
        </div>
      </Link>
    </div>
  );
};

ServerListItem.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};
export default ServerListItem;
