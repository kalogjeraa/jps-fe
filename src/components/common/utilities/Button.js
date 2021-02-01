import React from 'react';

const Button = props => {
  const {
    action,
    children,
    styles
  } = props;

  return (
    <button
      onClick={action}
      className={styles}
    >
      {children}
    </button>
  );
};

export default Button;