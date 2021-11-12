const options ={
    client: 'mysql',
    connection: {
      host : process.env.HOST,
      port : process.env.PORT,
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
  };

console.log('Conectando a la base de datos')

export default options;