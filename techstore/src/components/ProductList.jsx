import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ productos, agregarAlCarrito }) {
  return (
    <section className="products-section">
      <h2 style={{ marginBottom: '15px', color: '#0b2216' }}>Productos Destacados</h2>
      <div className="products-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <ProductCard 
              key={producto.id} 
              producto={producto} 
              agregarAlCarrito={agregarAlCarrito} 
            />
          ))
        ) : (
          <p>No se encontraron productos coincidentes con tu búsqueda.</p>
        )}
      </div>
    </section>
  );
}

export default ProductList;