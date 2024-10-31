import server from "./server";

const PORT = 4000;

server.listen(4000, () => {
  console.log(`REST API running on port ${PORT}`);
})