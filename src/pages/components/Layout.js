import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import MenuOverlay from './MenuOverlay';

import 'ress';
import '../css/layout.css';
import '../css/style.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <MenuOverlay />
      <main>{ children }</main>
      <Footer />
    </>
  )
}
export default Layout;
