import { Router } from "express";
import { getProductosMongo } from "../controllers/Mongo/productos.controller";
/* IMPORTS PARA PERSISTENCIA EN TXT
import {
	getProductos,
	agregarProducto,
	actualizarProducto,
	borrarProducto,
} from "../controllers/productos.controller.js";
*/

/* IMPORTS PARA PERSISTENCIA EN MYSQL 
import {
	getProductosMysql,
	agregarProductoMysql,
	actualizarProductoMysql,
	borrarProductoMysql,
} from "../controllers/productos.controller.js";
*/

const productosRouter = Router();

productosRouter.get('/', getProductosMongo);

/*ROUTER PARA PERSISTENCIA EN MYSQL
productosRouter.get("/", getProductosMysql);
productosRouter.post("/", agregarProductoMysql);
productosRouter.put("/:id", actualizarProductoMysql);
productosRouter.delete("/:id", borrarProductoMysql);
*/

/* ROUTER PARA PERSISTENCIA EN TXT
productosRouter.get("/", getProductos);
productosRouter.post("/", agregarProducto);
productosRouter.put("/:id", actualizarProducto);
productosRouter.delete("/:id", borrarProducto);
*/
export default productosRouter;