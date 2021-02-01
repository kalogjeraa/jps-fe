import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = props => {
  const {
    text,
    url
  } = props;

  return (
    <li>
      <Link
        to={url}
        className="nav-link"
      >
        {text}
        <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
};

export default NavItem;