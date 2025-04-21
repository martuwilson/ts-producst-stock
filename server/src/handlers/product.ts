import { Request, Response } from "express";

import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
           order: [["price", "DESC"]],
           attributes: {
            exclude: ["createdAt", "updatedAt"],
           }
        });
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getProductById = async (req: Request, res: Response):Promise<void> => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const createProduct = async (req: Request, res: Response) => {

  const { name, price, availability } = req.body;

  try {
    const product = await Product.create({ name, price, availability });
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};