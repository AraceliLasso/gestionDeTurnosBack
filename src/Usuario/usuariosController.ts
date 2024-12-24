import { Request, Response } from "express"
import { borrarUsuariosService, crearUsuariosService, obtenerUsuariosService } from "./usuariosService";
import IUsuario from "./interface/IUsuario";



export const crearUsuarios = async (req: Request, res: Response) => {
    const { nombre, email, active } = req.body;
    const nuevoUsuario: IUsuario = await crearUsuariosService({ nombre, email, active })
    res.status(201).json(nuevoUsuario)
}

export const obtenerUsuarios = async (req: Request, res:Response) => {
    const usuarios: IUsuario[] = await obtenerUsuariosService();
    res.status(200).json(usuarios)
}

export const borrarUsuarios = async (req:Request, res:Response) => {
    const {id} =req.body
    await borrarUsuariosService(id)
    res.status(200).json({message:"eliminado correctamente"})
}