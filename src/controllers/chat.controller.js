//import archivo from '../models/archivoProductos.js' Lo guardo para persistir en txt
import { Chat } from "../models/chat.js";
import options from "../DB/Sqlite3/connection.js";
import knex from "knex";
const orm = knex(options);

export const getMensajesSQLite = async () => {
    try {
      let exists = await orm.schema.hasTable('mensajes')
      if(!exists) {
        return {email: 'Nada', time:'00:00', mensaje: 'Sin mensajes'};
      } else {
        console.log("exists 3", exists);
      const mensajes = await orm.from("mensajes").select("*");
      console.log('mensajes: ', mensajes);
      return mensajes;
      }
    } catch (e) {
      console.log("Error en select", e);
      return { msg: "Error en select ", e };
    } 
  };
  
  export const agregarMensajeSQLite = async (req, res) => {
    try {
      const msg = new Chat(
        req.body.email,
        req.body.mensaje
      );  
      const exists = await orm.schema.hasTable("mensajes");
      if (!exists) {
        const tableOk = await orm.schema.createTable("mensajes", (table) => {
            table.string("email"),
            table.dateTime("time"),
            table.string("mensaje");
        });
        if (tableOk) {
          await orm("mensajes").insert(msg);
          console.log("Registro insertado");
          return { msg: "Registro insertado" };
        }
      } else {
        await orm("mensajes").insert(msg);
        console.log("Registro insertado");
        return { msg: "Registro insertado" };
      }
    } catch (error) {
      console.log(error);
      return { msg: "Error en el insert ", error };
    } 
  };