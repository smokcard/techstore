import { memo } from 'react';

function SearchBar({ busqueda, setBusqueda }) {
  return (
    <label className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos tecnológicos..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />
      <button type="button" aria-label="Buscar productos">
        🔍
      </button>
    </label>
  );
}

export default memo(SearchBar);