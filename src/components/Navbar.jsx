
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="wrapper">
      <nav className="nave__bar">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav__links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav__link" onClick={() => setMenuOpen(false)}>Forside</Link>
          <Link to="/om-os" className="nav__link" onClick={() => setMenuOpen(false)}>Om os</Link>
          <Link to="/sponsor" className="nav__link" onClick={() => setMenuOpen(false)}>Tilmeld som sponsor</Link>
          <Link to="/tak" className="nav__link" onClick={() => setMenuOpen(false)}>Børnelejren Takker</Link>
        </div>
      </nav>
    </div>
  );
}
