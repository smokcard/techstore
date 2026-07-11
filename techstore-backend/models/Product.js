const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  valoracion: { type: Number, required: true },
  imagen: { type: String, required: true },
  categoria: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);