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

server.use('/', router);

export default server;