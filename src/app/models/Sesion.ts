class Sesion {
    private _usuario:Usuario;
    private _instancia:any = null;

    constructor(usuario:Usuario) {
        this._usuario = usuario;
    }

    public getInstancia(usuario:Usuario):any {
        if(this._instancia == null){
            this._instancia = new Sesion(usuario);
        } 
        return this._instancia;
    }

    public getUsuario():Usuario {
        return this._usuario;
    }

    public cerrarSesion():void {
        this._instancia = null;
    }
}