import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './assets/css/styles.css';
import productosData from './data/productos.json';

const API_URL = 'http://localhost:5000/api/productos';

function App() {
  const [productos, setProductos] = useState(productosData);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState(() => localStorage.getItem('techstore-theme') || 'dark');

  useEffect(() => {
    const controller = new AbortController();

    const cargarProductos = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('No se pudo cargar el catálogo');

        const data = await response.json();
        setProductos(Array.isArray(data) ? data : productosData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.warn('Usando catálogo local porque el backend no está disponible:', err.message);
          setProductos(productosData);
          setError('');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    cargarProductos();

    return () => controller.abort();
  }, []);

  const agregarAlCarrito = useCallback((producto) => {
    setCarrito((prev) => {
      if (prev.some((item) => item.id === producto.id)) return prev;
      return [...prev, producto];
    });
  }, []);

  const productosFiltrados = useMemo(() => {
    const query = busqueda.trim().toLowerCase();
    if (!query) return productos;

    return productos.filter((prod) => {
      const texto = [prod.nombre, prod.categoria, prod.descripcion, prod.marca]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return texto.includes(query);
    });
  }, [productos, busqueda]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('techstore-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      <Header
        cartCount={carrito.length}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        theme={theme}
        setTheme={setTheme}
      />
      <Navbar />
      <Banner />

      <div className="main-layout">
        <ProductList
          productos={productosFiltrados}
          agregarAlCarrito={agregarAlCarrito}
          loading={loading}
          error={error}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;