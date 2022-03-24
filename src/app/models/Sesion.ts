import { Usuario } from './Usuario';
export class Sesion {
    private _usuario:Usuario;
    private static _instancia:Sesion = null;

    constructor(usuario:Usuario) {
        this._usuario = usuario;
    }

    public static getInstancia(usuario:Usuario):Sesion {
        if(this._instancia == null){
            this._instancia = new Sesion(usuario);
        } 
        return this._instancia;
    }

    public getUsuario():Usuario {
        return this._usuario;
    }

    public static cerrarSesion():void {
        this._instancia = null;
    }
}