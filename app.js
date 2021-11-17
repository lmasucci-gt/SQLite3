import Express from "express";
import cors from 'cors';
import { errorHandlerMiddleware } from "./src/middlewares/errorHandler.js";
import productosRouter from "./src/routes/productos.routes.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { getMensajesSQLite, agregarMensajeSQLite } from './src/controllers/chat.controller.js'
import moment from 'moment';

const app = Express();
const corsOptions = { origin: '*'};
const server = createServer(app);
const io = new Server(server);

app.use(Express.static("src/public"));
app.use(Express.json());
app.use(cors(corsOptions));
app.use("/productos", productosRouter);
app.use(errorHandlerMiddleware);



server.listen(3000, () => {
	console.log("Server WebSockets listening on port 3000");
  });

io.on("connection", (socket) => {
  console.log("Usuario conectado");
  let mensajes = getMensajesSQLite();
  socket.emit("chat", mensajes);
  socket.on("newMensaje", ({email, mensaje}) => {
    let msg = {
      email: email,
      time: `${moment().format("L")} ${moment().format("LTS")}`,
      mensaje: mensaje
    }    
    agregarMensajeSQLite(msg);
    io.sockets.emit("newChat", msg);
    });
})

export default app;
