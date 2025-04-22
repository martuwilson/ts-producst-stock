import express from "express";
import productsRouter from "./router";
import db from "./config/db";
import colors from "colors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const server = express();

// Read data from the request body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Connect to the database
async function connectToDatabase() {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.bgGreen("Database connection has been established successfully."));
    } catch (error) {
        console.error("Error connecting to the database:", error);
        console.log(colors.bgRed("Database connection failed"));
    }
}
connectToDatabase();

// Routing
server.use('/api/products', productsRouter);

// Swagger docs
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default server;