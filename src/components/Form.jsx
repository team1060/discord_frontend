// Form.jsx

import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ action, children, className, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <form method="post" action={action} className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
