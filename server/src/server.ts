import express from "express";

const server = express();

// Routing
server.get("/", (req, res) => {

    const data = [
        {
            id: 1,
            name: "John Doe",
            age: 30
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 25
        },
        {
            id: 3,
            name: "Alice Johnson",
            age: 28
        }
    ]

    res.send(data);
});

export default server;