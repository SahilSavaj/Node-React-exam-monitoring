var mysql= require('mysql');
require('dotenv').config();
  
module.exports.getClient = async () => {
  const config = {
    host: process.env.PG_HOST, 
    port:  parseInt(process.env.PG_PORT,10),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    options:{
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false ,// This line will fix new error
        encrypt: false,
        trustedServerCertificate: false,
      },

    // server:process.env.PG_HOST

  };
  let client=await mysql.createConnection(config);
  return client;
};