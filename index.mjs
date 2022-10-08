import http from "http";
import { doOnError, doOnIcoming } from "./error.mjs";
import dotenvLoad from "dotenv-load";

dotenvLoad();

const port = process.env.PORT;
const host = process.env.LOCAL_HOST;

const server = http.createServer();
server.on("request", doOnIcoming);
server.on("clientError", doOnError);
server.listen(port);
console.log(`Server started at http://${host}:${port}`);
