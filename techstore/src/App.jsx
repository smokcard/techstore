import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './assets/css/styles.css';

const API_URL = 'http://localhost:5000/api/productos';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const cargarProductos = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('No se pudo cargar el catálogo');

        const data = await response.json();
        setProductos(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error al conectar con MongoDB backend:', err);
          setError('No fue posible cargar los productos. Intenta nuevamente.');
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

    return productos.filter((prod) => prod.nombre?.toLowerCase().includes(query));
  }, [productos, busqueda]);

  return (
    <div className="app-container">
      <Header cartCount={carrito.length} busqueda={busqueda} setBusqueda={setBusqueda} />
      <Navbar />
      <Banner />

      <div className="main-layout">
        <Sidebar />
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