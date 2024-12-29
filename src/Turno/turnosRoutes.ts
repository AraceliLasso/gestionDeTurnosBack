import { Router } from "express";
import { cancelarTurno, crearTurno, obtenerDetalleDeTurno, obtenerTurnos, obtenerTurnosUsuario } from "./turnosController";


const router: Router = Router();



// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
router.get("/turnos", obtenerTurnos)

// GET /appointments => Obtener el detalle de un turno específico.
router.get("/turno/detalle", obtenerDetalleDeTurno)

//GET /turnos => Obtener listado de turnos por id de usuario
router.get("/turnos/usuarioId", obtenerTurnosUsuario)

// POST /appointments/schedule => Agendar un nuevo turno.
router.post("/turno", crearTurno)

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
router.put("/turno/cancelar", cancelarTurno)

