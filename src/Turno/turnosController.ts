import { Request, Response } from "express"
import ITurno from "./interface/ITurno";
import { borrarTurnosService, crearTurnoService, obtenerTurnosService } from "./turnosService";
import { validationResult } from "express-validator";
export const obtenerTurnos = async (req: Request, res: Response) => {
    const turnos: ITurno[] = await obtenerTurnosService();
    res.status(200).json(turnos)
}
export const obtenerDetalleDeTurno = async (req: Request, res: Response) => {

}
export const obtenerTurnosUsuario = async (req: Request, res: Response) => {

}
export const crearTurno = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fecha, estado, especialidad, profesional, paciente, medio } = req.body;

    try {
        const nuevoTurno = await crearTurnoService({ 
            fecha: new Date(fecha), 
            estado, 
            especialidad, 
            profesional, 
            paciente, 
            medio 
        });

        res.status(201).json(nuevoTurno);
    } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "Error desconocido" });
        }
      }
      
};
export const cancelarTurno = async (req:Request, res:Response) => {
    const {id} =req.body
    await borrarTurnosService(id)
    res.status(200).json({message:"eliminado correctamente"})
}
