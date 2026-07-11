import { memo } from 'react';
import ProductCard from './ProductCard';

const ProductList = memo(function ProductList({ productos, agregarAlCarrito, loading, error }) {
  if (loading) {
    return (
      <section className="products-section" id="productos">
        <div className="products-section-header">
          <div>
            <p className="products-section-eyebrow">Catálogo</p>
            <h2 className="products-section-title">Productos Destacados</h2>
          </div>
          <p className="products-section-subtitle">Equipos tecnológicos pensados para rendimiento, diseño y confianza.</p>
        </div>
        <div className="products-state">Cargando productos...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section" id="productos">
        <div className="products-section-header">
          <div>
            <p className="products-section-eyebrow">Catálogo</p>
            <h2 className="products-section-title">Productos Destacados</h2>
          </div>
          <p className="products-section-subtitle">Equipos tecnológicos pensados para rendimiento, diseño y confianza.</p>
        </div>
        <div className="products-state products-state-error">{error}</div>
      </section>
    );
  }

  return (
    <section className="products-section" id="productos">
      <div className="products-section-header">
        <div>
          <p className="products-section-eyebrow">Catálogo</p>
          <h2 className="products-section-title">Productos Destacados</h2>
        </div>
        <p className="products-section-subtitle">Equipos tecnológicos pensados para rendimiento, diseño y confianza.</p>
      </div>
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
          <div className="products-state">No se encontraron productos coincidentes con tu búsqueda.</div>
        )}
      </div>
    </section>
  );
});

export default ProductList;