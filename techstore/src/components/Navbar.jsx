import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#ofertas">Ofertas</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;