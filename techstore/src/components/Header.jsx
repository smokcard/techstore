import React from 'react';
import SearchBar from './SearchBar';
import logoPrincipal from '../assets/logo-principal.png';
import instagramLogo from '../assets/logo-instagram.png';
import facebookLogo from '../assets/logo-facebook.png';
import xLogo from '../assets/logo-x.png';

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
      
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      
      {/* Redes Sociales con imágenes de logos reales */}
      <div className="header-socials">
        <a href="https://instagram.com/homeasia_mostazal" target="_blank" rel="noreferrer" title="Instagram">
          <img src={instagramLogo} alt="Instagram" className="social-icon-img" />
        </a>
        <a href="https://facebook.com/VectorGeenk" target="_blank" rel="noreferrer" title="Facebook">
          <img src={facebookLogo} alt="Facebook" className="social-icon-img" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter (X)">
          <img src={xLogo} alt="Twitter X" className="social-icon-img" />
        </a>
      </div>

      {/* Botones y carrito abajo a la derecha */}
      <div className="auth-buttons-container">
        <div className="auth-buttons">
          <button>Iniciar Sesión</button>
          <button>Registrarse</button>
        </div>
        <div className="cart-icon">
          🛒 Carrito: <strong>{cartCount}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;