import React from 'react';

const MenuBtn = (props) => {
  const menuClass = props.open ? "open menu-btn" : "menu-btn";
  return (
    <button type="button" className={menuClass} onClick={props.toggle}>
      <span className="menu-bar menu-bar__top"></span>
      <span className="menu-bar menu-bar__center"></span>
      <span className="menu-bar menu-bar__bottom"></span>
    </button>
  )
}
export default MenuBtn;
