import express from "express";
import productsRouter from "./router";
import db from "./config/db";
const server = express();

//Connect to the database
async function connectToDatabase() {
    try {
        await db.authenticate();
        db.sync();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        console.log("We have an error");
    }
}

connectToDatabase();

// Routing
server.use('/api/products', productsRouter);

export default server;