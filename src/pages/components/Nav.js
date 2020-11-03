import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to='/'>HOME</Link>
        </li>
        <li className="nav-item">NEWS</li>
        <li className="nav-item">ABOUT</li>
        <li className="nav-item">COMPANY</li>
        <li className="nav-item">
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav;
