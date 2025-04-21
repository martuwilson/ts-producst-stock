import { Router } from "express";
import { getProducts, getProductById, createProduct } from "./handlers/product";
import { body } from "express-validator";
import { handleInputError, validateProductId } from "./middlewares";

const router = Router();


router.get("/", getProducts);
router.get("/:id" , validateProductId, handleInputError, getProductById);

router.post("/", 
    body("name").notEmpty().withMessage("Name cannot be empty"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be a positive number"),
    handleInputError,
    createProduct);


export default router;