import React from 'react';

function ProductCard({ producto, agregarAlCarrito }) {
  const formatCLP = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <div className="rating">{"⭐".repeat(producto.valoracion)}</div>
      <p className="product-price">{formatCLP(producto.precio)}</p>
      <button className="btn-add-cart" onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;