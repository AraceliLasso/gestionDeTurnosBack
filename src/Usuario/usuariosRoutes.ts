import { Router } from "express";
import { borrarUsuarios, crearUsuarios, obtenerUsuarios } from "./usuariosController";
import auth from "../middlewares/autenticacion";


const router: Router = Router();


router.post("/usuarios", crearUsuarios)

router.get("/usuarios", auth, obtenerUsuarios)
router.delete("/usuarios", borrarUsuarios)

export default router;