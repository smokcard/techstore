import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar-benefits">
      <h3 style={{ color: '#0b2216', fontSize: '16px', marginBottom: '5px' }}>Garantía TechStore</h3>
      
      <div className="benefit-card-left">
        <span>💳</span>
        <strong>Compra en cuotas</strong>
        <p>Hasta 12 cuotas sin interés.</p>
      </div>

      <div className="benefit-card-left">
        <span>📦</span>
        <strong>Despacho asegurado</strong>
        <p>Envíos rápidos a todo Chile.</p>
      </div>

      <div className="benefit-card-left">
        <span>🔄</span>
        <strong>Cambios sin costo</strong>
        <p>Satisfacción 100% garantizada.</p>
      </div>

      <div className="benefit-card-left">
        <span>🛡️</span>
        <strong>Compra 100% Protegida</strong>
        <p>Tus datos siempre seguros.</p>
      </div>
    </aside>
  );
}

export default Sidebar;