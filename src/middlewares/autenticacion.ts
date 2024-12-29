import { Request, Response, NextFunction } from "express";


//*un middleware para verificar si un usuario tiene autorizacion o no para acceder a cierto contenido de la API

const auth = (req:Request, res:Response, next:NextFunction) =>{
    console.log(req.headers);
    const {token} = req.headers
    console.log(token);
    

    if(token=== "autenticado") next()
        else res.status(400).json({message:"Error, falta autenticacion"})
    
    
}
export default auth;


// También vamos a enviar en esta función un token para saber que el usuario está autenticado y
// que tiene permiso para acceder a la información devuelta por el método GET.
// Esta información se envía a través de algo llamado "headers" de la petición.