import React from "react";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="footer__copyright">©{fullYear} Mesto Russia</p>
    </div>
  );
}

export default Footer;
