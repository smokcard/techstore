import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#productos', label: 'Productos' },
    { href: '#ofertas', label: 'Ofertas' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav className="navbar">
      <button
        type="button"
        className="nav-toggle"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;