import { Mongoose } from "mongoose";

const mensajes = Mongoose.model(mensajesCollection, mensajesSchema)

const mensajesCollection = 'mensajes';

const mensajesSchema = new Mongoose.Schema({
    email: {type: String, require:true, minlength:3, maxlength: 100}, 
    mensaje: {type: String, require:true, minlength:1, maxlength: 100}, 
    time: { type: String}
});


export default mensajes;

