import express from "express";
import router from "./Usuario/usuariosRoutes";

const server = express();

server.use(express.json())
server.use(router);

export default server;