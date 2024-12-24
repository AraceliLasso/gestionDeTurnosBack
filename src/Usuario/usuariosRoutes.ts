import { Router } from "express";
import { borrarUsuarios, crearUsuarios, obtenerUsuarios } from "./usuariosController";


const router: Router = Router();


router.post("/usuarios", crearUsuarios)

router.get("/usuarios", obtenerUsuarios)
router.delete("/usuarios", borrarUsuarios)

export default router;