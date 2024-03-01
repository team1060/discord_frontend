import PropTypes from 'prop-types';
import { Link } from '../../node_modules/react-router-dom/dist/index';

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
  link: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ServerListItem;
