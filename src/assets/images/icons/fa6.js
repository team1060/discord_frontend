import PropTypes from 'prop-types';
import { FaXmark, FaPlus } from 'react-icons/fa6';

export const XmarkIcon = ({ size }) => {
  return <FaXmark size={size} />;
};

XmarkIcon.propTypes = {
  size: PropTypes.number.isRequired,
};

export const PlusIcon = ({ size }) => {
  return <FaPlus size={size} />;
};

PlusIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
