import PropTypes from 'prop-types';

const ActionButtons = ({ actions }) => {
  return (
    <div className="action">
      {actions.map((ActionIcon, index) => (
        <div className="action-button" key={index} onClick={ActionIcon.onClick}>
          <ActionIcon.Icon size={24} />
        </div>
      ))}
    </div>
  );
};

ActionButtons.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default ActionButtons;
