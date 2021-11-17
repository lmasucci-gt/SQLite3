import dotenv from 'dotenv';
dotenv.config();

const options = {
    client: 'sqlite3',
    connection: {
        filename: './src/DB/Sqlite3/mydb.sqlite'
    },
    useNullAsDefault: true
  };

console.log('Conectando a la base de datos SQLite3')

export default options;