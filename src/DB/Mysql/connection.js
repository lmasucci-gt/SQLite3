import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const options = {
    client: 'mysql2',
    connection: {
      host : process.env.HOST,
      port : process.env.PORT,
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
  };

console.log('Conectando a la base de datos Mysql')

export default options;