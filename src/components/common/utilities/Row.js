import React from 'react';

const Row  = props => {
  const {
    children,
    special
  } = props;

  const styles = special !== ''
    ? `row ${special}`
    : 'row';

  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export default Row;