import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from the products route");
});
router.post("/", createProduct);


export default router;