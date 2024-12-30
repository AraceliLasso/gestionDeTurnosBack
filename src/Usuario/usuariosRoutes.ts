import { Router } from "express";
import { borrarUsuarios, crearUsuarios, obtenerUsuarios } from "./usuariosController";
import auth from "../middlewares/autenticacion";


const routerUsuario: Router = Router();

routerUsuario.get("/usuarios", auth, obtenerUsuarios)

routerUsuario.post("/usuarios", crearUsuarios)

routerUsuario.delete("/usuarios", borrarUsuarios)


// GET /users => Obtener el listado de todos los usuarios.

// GET /users/:id => Obtener el detalle de un usuario específico.

// POST /users/register => Registro de un nuevo usuario.

// POST /users/login => Login del usuario a la aplicación.

export default routerUsuario;