// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#d0000b', padding: '1rem', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Forside</Link>
      <Link to="/om-os" style={{ marginRight: '1rem', color: 'white' }}>Om os</Link>
      <Link to="/sponsor" style={{ marginRight: '1rem', color: 'white' }}>Tilmeld som sponsor</Link>
      <Link to="/tak" style={{ color: 'white' }}> Takker</Link>
    </nav>
  );
}
