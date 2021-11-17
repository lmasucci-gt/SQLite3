import { Productos } from "../models/productos.js";
//import archivo from '../models/archivoProductos.js' Lo guardo para persistir en txt
import options from "../DB/Mysql/connection.js";
import knex from "knex";
const orm = knex(options);

/* PERSISTENCIA EN MYSQL */

export const actualizarProductoMysql = async (req, res) => {
  try {
    const { title, price, thumbnail } = req.body;
    const id = req.params.id;
    await orm
      .from("productos")
      .where("id", "=", id)
      .update({ title: title, price: price, thumbnail: thumbnail });
    if (!id) {
      console.log("error: Producto no encontrado");
      return res.status(404).json({ msg: "ID de producto no encontrado" });
    } else {
      return res
        .status(200)
        .json({ msg: "Producto actualizado correctamente" });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "ID de producto no encontrado" });
  }
};

export const borrarProductoMysql = async (req, res) => {
  try {
    const id = req.params.id;
    await orm.from("productos").where("id", "=", id).del();
    if (!id) {
      console.log({ msg: "error: Producto no encontrado" });
    } else {
      return res
        .status(200)
        .json({ msg: `Se borro correctamente el producto ID: ${id}` });
    }
  } catch (error) {
    console.log(error);
  } 
};

export const getProductosMysql = async (req, res) => {
  try {
    let exists = await orm.schema.hasTable('productos')
    console.log(exists);
    if(!exists) {
      return res.status(200).json({msg: 'Aun no tiene productos creados'});
    } else {
    const products = await orm.from("productos").select("*");
    console.log('products: ', products);
    return res.status(200).json(products);
    }
  } catch (e) {
    console.log("Error en select", e);
    return res.status(404).json({ msg: "Error en select ", e });
  } 
};

export const agregarProductoMysql = async (req, res) => {
  try {
    const {title, price, thumbnail} = req.body;
    const product = new Productos(title, price, thumbnail);
    console.log("body!! ", title, price, thumbnail)
    const exists = await orm.schema.hasTable("productos");

    if (!exists) {
      const tableOk = await orm.schema.createTable("productos", (table) => {
        table.increments("id"),
          table.string("title"),
          table.integer("price"),
          table.string("thumbnail");
      });
      if (tableOk) {
        await orm("productos").insert(product);
        console.log("Registro insertado");
        return res.status(201).json({ msg: "Registro insertado1" });
      }
    } else {
      await orm("productos").insert(product);
      console.log("Registro insertado");
      return res.status(201).json({ msg: "Registro insertado2" });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "Error en el insert ", error });
  }
};

/* Persistencia en txt
export const getProductos = async (req, res) => {
  try {
    const listaProductos = await archivo.read();
    console.log(listaProductos);
    //console.log(listaProductos)
    //const listaParseada = listaProductos.json();
    //const { id } = req.params;
    // if (id) {
    //   listaParseada.find((p) => p.id == id);
    // }
    res.render('index.hbs', {listProductos: listaProductos})
  } catch (error) {
    console.log(error);
  }
};

export const agregarProducto = async (req, res) => {
  try {
    const product = await new Productos(
      req.body.title,
      req.body.price,
      req.body.thumbnail
    );
    const productOk = await File.create(product);
    if (productOk) {
      res.render("index.hbs", {
        listProductos: listaProductos,
      });
    }
  } catch (error) {
    console.log(err);
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { title, price, thumbnail } = req.body;
    const id = req.params.id;
    const listaProductos = await File.read();
    const product = listaProductos.filter((product) => product.id == id);
    const index = listaProductos.indexOf(product[0]);
    await File.update(title, price, thumbnail, index);
    if (!product) {
      console.log("Producto no encontrado");
    } else {
      res.render("index.hbs", {
        listProductos: listaProductos,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const listaProductos = await File.read();
    const product = listaProductos.filter((product) => product.id == id);
    const index = listaProductos.indexOf(product[0]);
    const productDelete = await File.delete(product, index);
    if (!id) {
      console.log("error: Producto no encontrado");
    } else {
      res.render("index.hbs", {
        listProductos: listaProductos,
      });
    }
  } catch (error) {
      console.log(error)
  }
};
*/
