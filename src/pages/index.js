import React, { useState } from "react"
import { Link } from 'gatsby'
import Header from "./components/Header"
import Overlay from './components/Overlay';
import 'ress';
import './css/style.css'
import Meta from "./components/Meta";

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const overlayToggle = () => setOverlay(!overlay);
  return (
    <div>
      <Meta />
      <Header toggle={overlayToggle} open={overlay} />
      {overlay && <Overlay />}
      Hello world!
      <Link to='/about'>to about</Link>
    </div>
  )
}
