import { memo } from 'react';

const formatCLP = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

const ProductCard = memo(function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <article className="product-card">
      <img src={producto.imagen} alt={producto.nombre} loading="lazy" decoding="async" />
      <h3>{producto.nombre}</h3>
      <div className="rating" aria-label={`Valoración ${producto.valoracion} de 5`}>
        {'⭐'.repeat(producto.valoracion)}
      </div>
      <p className="product-price">{formatCLP.format(producto.precio)}</p>
      <button type="button" className="btn-add-cart" onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </article>
  );
});

export default ProductCard;