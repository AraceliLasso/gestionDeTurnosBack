import UsuarioDto from "./dto/UsuarioDto";
import IUsuario from "./interface/IUsuario"

let usuarios: IUsuario[] = []
let id: number = 1;
export const crearUsuariosService = async (usuarioData: UsuarioDto): Promise<IUsuario> => {
    //recibir datos del usuario
    //crear nuevo usuario
    const nuevoUsuario: IUsuario = {
        id,
        nombre: usuarioData.nombre,
        email: usuarioData.email,
        active: usuarioData.active
    }
    usuarios.push(nuevoUsuario);
    //incluir el nuevo usuario dentro del arreglo
    //retornar el objeto creado
    id++;
    return nuevoUsuario
}

export const obtenerUsuariosService = async ():Promise<IUsuario[]> => {
    return usuarios;
}

export const borrarUsuariosService = async (id:number):Promise<void> => {
    usuarios = usuarios.filter((usuario:IUsuario)=>{
        return usuario.id !== id
    })
}