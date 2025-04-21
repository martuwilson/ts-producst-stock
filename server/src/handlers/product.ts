import {Request, Response} from 'express';
import Product from '../models/Product.model';

export const createProduct = async (req : Request, res : Response) => {

    const {name, price, availability} = req.body;

    try {
        const product = await Product.create({
            name,
            price,
            availability
        });

        res.status(201).json({
            message: "Product created successfully",
            product
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({error: "Internal server error"});
    }
} 