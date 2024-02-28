import PropTypes from 'prop-types';
import './Scroller.scss';

const Scroller = ({ children }) => {
  return <div className="scroller">{children}</div>;
};

Scroller.propTypes = {
  // className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Scroller;
