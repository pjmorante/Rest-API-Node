import express from 'express';

const server = express();

//Routing

server.get('/', (req, res) => {
  res.send("Hello Mother...");
})

export default server;