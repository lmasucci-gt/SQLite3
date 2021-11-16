import app from "./app.js";
import server from './app.js'

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.listen(3000, () => {
	console.log("Server WebSockets listening on port 3000");
  });

