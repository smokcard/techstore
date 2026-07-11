import { memo } from 'react';
import SearchBar from './SearchBar';
import logoPrincipal from '../assets/logo-principal.png';
import instagramLogo from '../assets/logo-instagram.png';
import facebookLogo from '../assets/logo-facebook.png';
import xLogo from '../assets/logo-x.png';

const socialLinks = [
  { href: 'https://instagram.com/homeasia_mostazal', src: instagramLogo, alt: 'Instagram' },
  { href: 'https://facebook.com/VectorGeenk', src: facebookLogo, alt: 'Facebook' },
  { href: 'https://twitter.com', src: xLogo, alt: 'Twitter (X)' },
];

function Header({ cartCount, busqueda, setBusqueda }) {
  return (
    <header className="header-top">
      <div className="logo-container">
        <a href="#inicio" title="Volver al inicio" className="logo-link">
          <img src={logoPrincipal} alt="TechStore Isotipo" className="main-logo-img" />
          <span className="logo-text">TechStore</span>
        </a>
      </div>

      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="header-socials">
        {socialLinks.map(({ href, src, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noreferrer" title={alt}>
            <img src={src} alt={alt} className="social-icon-img" />
          </a>
        ))}
      </div>

      <div className="auth-buttons-container">
        <div className="auth-buttons">
          <button type="button">Iniciar Sesión</button>
          <button type="button">Registrarse</button>
        </div>
        <div className="cart-icon">
          🛒 Carrito: <strong>{cartCount}</strong>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);