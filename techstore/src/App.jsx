import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './assets/css/styles.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  // Conexión con la API REST de tu backend MongoDB
  useEffect(() => {
    fetch('http://localhost:5000/api/productos')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al conectar con MongoDB backend:', error));
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Filtrado en tiempo real controlado por el estado "busqueda"
  const productosFiltrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Envía los props de búsqueda y contador al Header */}
      <Header 
        cartCount={carrito.length} 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
      />
      <Navbar />
      <Banner />
      
      <div className="main-layout">
        {/* Sidebar va primero para alinearse a la izquierda gracias al CSS Grid */}
        <Sidebar />
        
        {/* Renderiza los productos filtrados en tiempo real */}
        <ProductList 
          productos={productosFiltrados} 
          agregarAlCarrito={agregarAlCarrito} 
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;