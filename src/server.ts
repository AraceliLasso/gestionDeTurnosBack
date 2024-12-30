import express from "express";
import routerUsuario from "./Usuario/usuariosRoutes";
import routerTurno from "./Turno/turnosRoutes";


const server = express();

server.use(express.json())
server.use(routerUsuario);
server.use(routerTurno);

export default server;