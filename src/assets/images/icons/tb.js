import PropTypes from 'prop-types';
import { TbMessage2, TbDotsVertical, TbMessage2Plus, TbMailFilled, TbHelpCircleFilled } from 'react-icons/tb';

export const MessageIcon = ({ size }) => {
  return <TbMessage2 size={size} />;
};

MessageIcon.propTypes = {
  size: PropTypes.number.isRequired,
};

export const MenuIcon = ({ size }) => {
  return <TbDotsVertical size={size} />;
};

MenuIcon.propTypes = {
  size: PropTypes.number.isRequired,
};

export const MessagePlusIcon = ({ size }) => {
  return <TbMessage2Plus size={size} />;
};

MessagePlusIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
export const MailIcon = ({ size }) => {
  return <TbMailFilled size={size} />;
};

MailIcon.propTypes = {
  size: PropTypes.number.isRequired,
};

export const HelpCircleIcon = ({ size }) => {
  return <TbHelpCircleFilled size={size} />;
};

HelpCircleIcon.propTypes = {
  size: PropTypes.number.isRequired,
};
