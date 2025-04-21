import { Router } from "express";
import { createProduct } from "./handlers/product";
import { body } from "express-validator";
import { handleInputError } from "./middlewares";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from the products route");
});
router.post("/", 
    body("name").notEmpty().withMessage("Name cannot be empty"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be a positive number"),
    handleInputError,
    createProduct);


export default router;