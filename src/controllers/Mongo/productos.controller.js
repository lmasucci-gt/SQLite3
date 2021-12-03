import Dbconnect from '../../DB/Mongo/connection';
import { model } from "mongoose";


export const getProductosMongo = async (req, res) => {
    try {
        //Dbconnect();
        console.log('leyendo base mongo ...')
        const productos = await model.Productos.find({})
        console.log("productos mongo ..", productos)
        return res.status(200).json(productos);
    } catch (error) {
        console.log("Error en select", e);
        return res.status(404).json({ msg: "Error en select ", e });  
    }
}

export const agregarProductoMongo = async (req, res) => {
    try {
        const producto = req.body;
        const productoSaveModel = new model.productos(producto)
        const productoSave = await productoSaveModel.save()
        console.log(productoSave)
        return res.status(201).json({ msg: "Registro insertado Mongo" });
    } catch (error) {
        console.log(error);
        return res.status(404).json({ msg: "Error en el insert Mongo", error });
    }
}


