import React from 'react';
import MenuBtn from './MenuBtn';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="logo">会社</h1>
      <MenuBtn open={props.open} toggle={props.toggle} />
    </header>
  )
}
export default Header;
