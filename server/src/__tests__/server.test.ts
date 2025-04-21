import request from "supertest";
import server from "../server";

describe("GET /api", () => {
    it("should return a json response",
        async () => {
            const response = await request(server).get("/api");
            console.log(response);
        }
    )
});