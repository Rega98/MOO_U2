import { ISesionStarter } from "../interfaces/ISesionStarter";
import { Administracion } from "./Administracion";
import { Medico } from "./Medico";
import { Recepcionista } from "./Recepcionista";
import { SesionStarter } from "./SesionStarter";
import { Usuario } from "./Usuario";

export class SesionStarterProxy implements ISesionStarter {
    private _sesionStarter:SesionStarter;

    constructor(){
        this._sesionStarter = new SesionStarter();
    }
    
    public iniciarSesion(usuario: Usuario): boolean {
        let sesion:boolean = false;
        if(usuario.validarUsuario()){
            switch(usuario.tipo){
                case 'Administrador':{
                    let admin:Administracion = new Administracion();
                    admin.id = usuario.id;
                    if(admin.search()){
                        sesion = this._sesionStarter.iniciarSesion(admin);
                    }
                    break; 
                }
                case 'Medico':{
                    let medico:Medico = new Medico();
                    medico.id = usuario.id;
                    if(medico.search()){
                        sesion = this._sesionStarter.iniciarSesion(medico);
                    }
                    break;
                }
                case 'Recepcionista':{
                    let recepcion:Recepcionista = new Recepcionista();
                    recepcion.id = usuario.id;
                    if(recepcion.search()){
                        sesion = this._sesionStarter.iniciarSesion(recepcion);
                    }
                    break;
                }
                default:{
                    alert('No se reconoce el tipo de usuario');
                }
            }
        } else {
            alert('No se encontró el usuario especificado');
        }
        return sesion;
    }
    
}