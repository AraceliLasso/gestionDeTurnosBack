import express from "express";
import router from "./Usuario/usuariosRoutes";
import path from "path";


const server = express();

server.use(express.json())
server.use(router);

export default server;