import { Request, Response } from "express";

import Product from "../models/Product.model";

const createProduct = async (req: Request, res: Response) => {

  const { name, price, availability } = req.body;

  try {
    const product = await Product.create({ name, price, availability });
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export { createProduct };