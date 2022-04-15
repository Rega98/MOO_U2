import { ISesionStarter } from "../interfaces/ISesionStarter";
import { Sesion } from "./Sesion";
import { Usuario } from "./Usuario";

export class SesionStarter implements ISesionStarter {
    
    public iniciarSesion(usuario: Usuario): boolean {
        let sesion:Sesion = Sesion.getInstancia(usuario);
        if(sesion.getUsuario().id != usuario.id){
            alert("Ya existe una sesion iniciada");
            return false;
        } else {
            return true;
        }
    }
    
}