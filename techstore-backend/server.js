const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('./models/Product');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log(' Conectado exitosamente a MongoDB (TechStore Verde)');
    
  
    const count = await Product.countDocuments();
    if (count === 0) {
      const productosIniciales = [
        { "id": 1, "nombre": "Notebook Gamer ASUS ROG Strix G16", "precio": 1299990, "valoracion": 5, "imagen": "https://images.unsplash.com/photo-1771015310937-6754da25e49a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Tm90ZWJvb2slMjBHYW1lciUyMEFTVVMlMjBST0clMjBTdHJpeCUyMEcxNnxlbnwwfHwwfHx8MA%3D%3D", "categoria": "Notebook" },
        { "id": 2, "nombre": "iPhone 15 Pro Max 256GB Space Gray", "precio": 1219990, "valoracion": 5, "imagen": "https://images.unsplash.com/photo-1695048132854-8d9e119f957b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGlQaG9uZSUyMDE1fGVufDB8fDB8fHww", "categoria": "Smartphone" },
        { "id": 3, "nombre": "Monitor LG UltraGear 27\" 165Hz QHD", "precio": 349990, "valoracion": 4, "imagen": "https://images.unsplash.com/photo-1575387873691-c93801e21c62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vbml0b3IlMjBMR3xlbnwwfHwwfHx8MA%3D%3D", "categoria": "Monitor" },
        { "id": 4, "nombre": "Mouse Gamer Logitech G502 HERO", "precio": 49990, "valoracion": 5, "imagen": "https://images.unsplash.com/photo-1618499893452-942141785a2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1vdXNlJTIwR2FtZXIlMjBMb2dpdGVjaHxlbnwwfHwwfHx8MA%3D%3D", "categoria": "Mouse" },
        { "id": 5, "nombre": "Teclado Mecánico Razer BlackWidow V4", "precio": 139990, "valoracion": 4, "imagen": "https://images.unsplash.com/photo-1636487658576-006362feb9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGVjbGFkbyUyME1lYyVDMyVBMW5pY28lMjBSYXplcnxlbnwwfHwwfHx8MA%3D%3D", "categoria": "Teclado" },
        { "id": 6, "nombre": "Audífonos HyperX Cloud Alpha Wireless", "precio": 154990, "valoracion": 5, "imagen": "https://images.unsplash.com/photo-1593112723196-e841f5c60799?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVkJUMzJUFEZm9ub3MlMjBIeXBlclh8ZW58MHx8MHx8fDA%3D", "categoria": "Audífonos" },
        { "id": 7, "nombre": "Memoria RAM Kingston FURY Beast 16GB", "precio": 65990, "valoracion": 4, "imagen": "https://unsplash.com/es/fotos/foto-de-toma-macro-de-la-memoria-ram-de-una-computadora-lYxQ5F9xBDM", "categoria": "RAM" },
        { "id": 8, "nombre": "Unidad SSD Kingston NV2 1TB NVMe", "precio": 72990, "valoracion": 5, "imagen": "https://unsplash.com/es/fotos/un-primer-plano-de-un-pequeno-dispositivo-sobre-una-superficie-blanca-R2j48L9nRaw", "categoria": "SSD" }
      ];
      await Product.insertMany(productosIniciales);
      console.log(' Base de datos poblada con éxito con la nueva estética');
    }
  })
  .catch(err => console.error(' Error crítico al conectar a MongoDB:', err));

// Endpoint REST público para el Frontend
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al consultar catálogo', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Servidor backend activo en http://localhost:${PORT}`));