import React from 'react';

import '../../styles/gridIcon.css';

const GridIcon = props => {
  const {
    image,
    text,
    title,
  } = props;

  return (
    <div className="col-md-6 custom-grid">
      <img
        src={image}
        alt="icon"
      />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default GridIcon;