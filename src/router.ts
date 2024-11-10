import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

//Routing

router.get('/', (req, res) => {
  res.send("Hello Mother...");
});

router.post('/', createProduct);

export default router;