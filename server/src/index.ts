import dotenv from "dotenv";
dotenv.config();
import server from "./server";
import colors from "colors";


server.listen(4001, () => {
  console.log(colors.cyan.bold("Server is running on port 4001"));
});