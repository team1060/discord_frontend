import PropTypes from 'prop-types';
import { GoChevronDown } from 'react-icons/go';

export const DownIcon = ({ size }) => {
  return <GoChevronDown size={size} />;
};

DownIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
