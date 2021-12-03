import mongoose from 'mongoose';
const { Schema } = mongoose;

const productosCollection = 'productos';
const Productos = mongoose.model(productosCollection, productosSchema);

const productosSchema = new mongoose.Schema({
    title: {type: String, require:true, minlength:2, maxlength: 100}, 
    price: {price: Number, require: true}, 
    thumbnail: { type: String}
});

export default Productos;