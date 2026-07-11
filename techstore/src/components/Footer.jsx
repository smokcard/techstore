import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-content">
          <div>
            <h3>TechStore SpA</h3>
            <p>📍 Los Ángeles, Región del Bío-Bío, Chile</p>
            <p>✉️ contacto@techstore.cl</p>
          </div>
          <div>
            <h3>Soporte y Ecosistema</h3>
            <p>Términos y Condiciones | Preguntas Frecuentes</p>
          </div>
        </div>
        <hr style={{ borderColor: '#0b2216', margin: '15px 0' }} />
        <p>&copy; {new Date().getFullYear()} TechStore. Diseñado para ofrecer la mejor experiencia de compra.</p>
      </div>
    </footer>
  );
}

export default Footer;