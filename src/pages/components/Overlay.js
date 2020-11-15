import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Nav from './Nav';

const Overlay = ({ show }) => {
  return (
    <CSSTransition
      in={show}
      timeout={300}
      unmountOnExit
      classNames="overlay"
    >
      <div id="overlay">
        <Nav />
      </div>
    </CSSTransition>
  )
}
export default Overlay;
