import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import MenuBtn from "./MenuBtn";
import Overlay from "./Overlay";

import 'ress';
import '../css/layout.css';
import '../css/style.css';

const Layout = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const overlayToggle = () => setOverlay(!overlay);
  return (
    <>
      <Meta />
      <Header />
      <MenuBtn open={overlay} toggle={overlayToggle}/>
      {overlay && <Overlay />}
      <main>{ children }</main>
      <Footer />
    </>
  )
}
export default Layout;
