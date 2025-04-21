import {Router} from "express";
import { createProduct } from "./handlers/product";

const router = Router();
// Define your routes here

router.get("/", (req, res) => {

    res.send("GET request to the homepage");
});

router.post("/", createProduct);

router.put("/", (req, res) => {
    res.send("PUT request to the homepage");
});

router.delete("/", (req, res) => {
    res.send("DELETE request to the homepage");
});

router.patch("/", (req, res) => {
    res.send("PATCH request to the homepage");
});

export default router;