import UsuarioDto from "./dto/UsuarioDto";
import IUsuario from "./interface/IUsuario";
import { v4 as uuidv4 } from 'uuid';

let usuarios: IUsuario[] = []

export const crearUsuariosService = async (usuarioData: UsuarioDto): Promise<IUsuario> => {
    //recibir datos del usuario
    //crear nuevo usuario
    const nuevoUsuario: IUsuario = {
        id: uuidv4(),
        nombre: usuarioData.nombre,
        email: usuarioData.email,
        active: usuarioData.active
    }
    usuarios.push(nuevoUsuario);
    //incluir el nuevo usuario dentro del arreglo
    //retornar el objeto creado
    return nuevoUsuario;
}

export const obtenerUsuariosService = async ():Promise<IUsuario[]> => {
    return usuarios;
}

export const borrarUsuariosService = async (id:string):Promise<void> => {
    usuarios = usuarios.filter((usuario:IUsuario)=>{
        return usuario.id !== id
    })
}