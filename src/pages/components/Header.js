import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">S.S.S</h1>
      </Link>
    </header>
  )
}
export default Header;
