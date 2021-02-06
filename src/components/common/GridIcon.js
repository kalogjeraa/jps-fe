import React from 'react';

const GridIcon = props => {
  const {
    image,
    text,
    title,
  } = props;

  return (
    <div className="col-md-6">
      <img
        src={image}
        alt="icon"
      />
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};

export default GridIcon;