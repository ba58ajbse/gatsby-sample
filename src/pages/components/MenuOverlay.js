import React, { useState } from 'react';
import MenuBtn from "./MenuBtn";
import Overlay from "./Overlay";

const MenuOverlay = () => {
  const [overlay, setOverlay] = useState(false);
  const overlayToggle = () => setOverlay(!overlay);
  return (
    <>
      <MenuBtn open={overlay} toggle={overlayToggle} />
      <Overlay show={overlay} />
    </>
  )
}
export default MenuOverlay;
