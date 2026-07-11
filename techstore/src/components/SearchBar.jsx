import { memo } from 'react';

function SearchBar({ busqueda, setBusqueda }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const productosSection = document.getElementById('productos');
    if (productosSection) {
      productosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar productos tecnológicos..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />
      <button type="submit" aria-label="Buscar productos">
        🔍
      </button>
    </form>
  );
}

export default memo(SearchBar);