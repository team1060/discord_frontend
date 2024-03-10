import PropTypes from 'prop-types';
import { FaXmark, FaPlus, FaCheck } from 'react-icons/fa6';

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

export const CheckIcon = ({ size }) => {
  return <FaCheck size={size} />;
};

CheckIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
