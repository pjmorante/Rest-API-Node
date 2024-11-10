import express from 'express';
import router from './router';
import db from './config/db';

//Database connection

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log('Conexion exitosa');
  } catch (error) {
    console.log(error);
  }
}

connectDB();

const server = express();

//Leer datos de formularios
server.use(express.json());

server.use('/api/products', router);

export default server;