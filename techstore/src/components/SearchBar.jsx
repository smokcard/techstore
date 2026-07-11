import React from 'react';

function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Buscar productos tecnológicos..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button>🔍</button>
    </div>
  );
}

export default SearchBar;