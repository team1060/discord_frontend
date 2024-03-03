// Modal.jsx
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // 모달 외부를 클릭하여 닫기
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-wrapper">{children}</div>
        <div className="modal-close-wrapper">
          <button className="btn-blue modal-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
