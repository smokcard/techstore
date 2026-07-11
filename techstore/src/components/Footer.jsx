import React from 'react';

function Footer() {
  const benefits = [
    { icon: '💳', title: 'Hasta 12 cuotas', text: 'Financia tus compras con facilidad.' },
    { icon: '📦', title: 'Despachos', text: 'Envíos rápidos y seguros a todo Chile.' },
    { icon: '🔄', title: 'Cambios y devoluciones', text: 'Proceso simple y sin complicaciones.' },
    { icon: '🛡️', title: 'Calidad garantizada', text: 'Productos seleccionados con respaldo.' },
  ];

  return (
    <footer>
      <div className="footer-benefits-bar">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="footer-benefit-item">
            <span className="footer-benefit-icon">{benefit.icon}</span>
            <strong>{benefit.title}</strong>
            <span>{benefit.text}</span>
          </div>
        ))}
      </div>

      <div className="footer-main">
        <div className="footer-content">
          <div id="nosotros">
            <h3>TechStore SpA</h3>
            <p>📍 Los Ángeles, Región del Bío-Bío, Chile</p>
            <p>✉️ contacto@techstore.cl</p>
          </div>
          <div id="contacto">
            <h3>Soporte y Ecosistema</h3>
            <p>Términos y Condiciones | Preguntas Frecuentes</p>
          </div>
        </div>
        <hr style={{ borderColor: 'var(--border-color)', margin: '15px 0' }} />
        <p>&copy; {new Date().getFullYear()} TechStore. Diseñado para ofrecer la mejor experiencia de compra.</p>
      </div>
    </footer>
  );
}

export default Footer;