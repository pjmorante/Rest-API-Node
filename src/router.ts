import { Router } from "express";

const router = Router();

//Routing

router.get('/', (req, res) => {
  res.send("Hello Mother...");
});

export default router;