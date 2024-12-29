import TurnoDto from "./dto/TurnoDto";
import ITurno from "./interface/ITurno";
import { v4 as uuidv4 } from 'uuid';

let turnos: ITurno[] = []

export const obtenerTurnosService = async (): Promise<ITurno[]> => {
    return turnos;
}

export const crearTurnoService = async (turnoData: TurnoDto): Promise<ITurno> => {
    //recibir datos del turno
    //crear nuevo turno
    const nuevoTurno:ITurno ={
        id:uuidv4(),
        fecha:turnoData.fecha,
        estado:turnoData.estado,
        especialidad:turnoData.especialidad,
        profesional:turnoData.profesional,
        paciente:turnoData.paciente,
        medio:turnoData.medio
    }
    turnos.push(nuevoTurno)
     //incluir el nuevo turno dentro del arreglo
    //retornar el objeto creado
    return nuevoTurno;
}