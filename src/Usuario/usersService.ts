import UserDto from "./dto/UserDto";
import IUser from "./interface/IUser"

const users: IUser[] = []
let id: number = 1;
export const createUserService = async (userData: UserDto): Promise<IUser> => {
    //recibir datos del usuario
    //crear nuevo usuario
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser);
    //incluir el nuevo usuario dentro del arreglo
    //retornar el objeto creado
    id++;
    return newUser
}

export const getUserService = async () => { }

export const deleteUserService = async () => { }