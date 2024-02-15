// Form.jsx

import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ children, className, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <form method="post" className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
