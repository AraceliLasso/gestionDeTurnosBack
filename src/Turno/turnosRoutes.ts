import { Router } from "express";
import { cancelarTurno, crearTurno, obtenerDetalleDeTurno, obtenerTurnos, obtenerTurnosUsuario } from "./turnosController";


const routerTurno: Router = Router();



//* GET /turnos => Obtener el listado de todos los turnos de todos los usuarios.
routerTurno.get("/turnos", obtenerTurnos)

// GET /turnos => Obtener el detalle de un turno específico.
routerTurno.get("/turno/detalle", obtenerDetalleDeTurno)

//GET /turnos => Obtener listado de turnos por id de usuario
routerTurno.get("/turnos/usuarioId", obtenerTurnosUsuario)

//* POST /turnos/schedule => Agendar un nuevo turno.
routerTurno.post("/turno", crearTurno)

//* PUT /turnos/cancel => Cambiar el estatus de un turno a “cancelled”.
routerTurno.put("/turno/cancelar", cancelarTurno)

export default routerTurno;

