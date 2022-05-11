import { ISesionStarter } from "../interfaces/ISesionStarter";
import { Sesion } from "./Sesion";
import { Usuario } from "./Usuario";

export class SesionStarter implements ISesionStarter {
    //Implementación del método de la interfaz ISesionStarter
    //Una vez validades las credenciales en el proxy, aqí se inicia sesión directamente
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