import PropTypes from 'prop-types';
import { FaCreativeCommonsZero, FaCompass, FaUserFriends, FaShoppingBag, FaPlus } from 'react-icons/fa';
export const ZeroIcon = ({ size }) => {
  return <FaCreativeCommonsZero size={size} />;
};

ZeroIcon.propTypes = {
  size: PropTypes.number.isRequired,
};

export const CompassIcon = ({ size }) => {
  return <FaCompass size={size} />;
};

CompassIcon.propTypes = {
  size: PropTypes.number.isRequired,
};

export const FriendIcon = ({ size }) => {
  return <FaUserFriends size={size} />;
};

FriendIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
export const ShopIcon = ({ size }) => {
  return <FaShoppingBag size={size} />;
};

ShopIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
export const PlusIcon = ({ size }) => {
  return <FaPlus size={size} />;
};

PlusIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
