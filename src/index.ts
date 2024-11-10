import server from "./server";

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`REST API running on port ${PORT}`);
});