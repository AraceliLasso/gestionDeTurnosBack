import { Request, Response } from "express"
import ITurno from "./interface/ITurno";
import { crearTurnoService, obtenerTurnosService } from "./turnosService";

export const obtenerTurnos = async (req: Request, res: Response) => {
    const turnos: ITurno[] = await obtenerTurnosService();
    res.status(200).json(turnos)
}
export const obtenerDetalleDeTurno = async (req: Request, res: Response) => {

}
export const obtenerTurnosUsuario = async (req: Request, res: Response) => {

}
export const crearTurno = async (req: Request, res: Response) => {
    const { fecha, estado, especialidad, profesional, paciente, medio } = req.body;
    const nuevoTurno: ITurno = await crearTurnoService({ fecha, estado, especialidad, profesional, paciente, medio })
    res.status(201).json(nuevoTurno);

}
export const cancelarTurno = async (req: Request, res: Response) => {

}
