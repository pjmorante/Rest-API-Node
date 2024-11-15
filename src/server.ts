import express from 'express';
import router from './router';
import db from './config/db';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';

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

const corsOptions : CorsOptions = {
  origin: function(origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true)
    } else {
      callback(new Error('Error de Cors'));
    }
  }
}
server.use(cors(corsOptions));

//Leer datos de formularios
server.use(express.json());

server.use(morgan('dev'));

server.use('/api/products', router);

export default server;