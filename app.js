import Express from "express";
import { errorHandlerMiddleware } from "./src/middlewares/errorHandler.js";
import productosRouter from "./src/routes/productos.routes.js";

const app = Express();

app.use(Express.static("src/public"));

app.use(Express.json());
app.use("/productos", productosRouter);
app.use(errorHandlerMiddleware);

export default app;
