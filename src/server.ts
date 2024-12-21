import express from "express";
import router from "./Usuario/routes";

const server = express();

server.use(express.json())
server.use(router);

export default server;