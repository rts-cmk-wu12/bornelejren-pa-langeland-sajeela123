import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
     
    <div id="wrapper">
      
      <footer>
        <div className="footer__logo">
{/*<ul className=" footer__li">
  <li className="footer__li">Forside</li>
  <li className="footer__li">Om os</li>
   <li className="footer__li">Tilmeld som sponsor</li>
  <li className="footer__li">Børnelejren Takker</li>
</ul>*/}
        <p>
          <Link to="/sponsor" style={{ textDecoration: "none", color: "white", }}>
            JOIN Us !
          </Link>
        </p>
</div>
      </footer>
    </div>
  );
};

export default Footer;

