import React from "react";
import { Link } from 'gatsby'

export default () => (
  <div className="thanks-container">
    <h1 className="thanks-title">お問い合わせいただきありがとうございます</h1>
    <p>This is a custom thank you page for form submissions</p>
    <Link to="/" className="to-home">&lt; HOME</Link>
  </div>
);
