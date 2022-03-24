export class Usuario {
    protected _id:number;
    protected _nombreUsuario:string;
    protected _contrasena:string;
    protected _nombre:string;
    protected _apellidoP:string;
    protected _apellidoM:string;
    protected _fechaNac:string;
    protected _email:string;
    protected _telCelular:string;
    protected _telFijo:string;
    protected _tipo:string;
    protected _status:number;

    constructor() {
        this._id = 0;
        this._nombreUsuario = '';
        this._contrasena = '';
        this._nombre = '';
        this._apellidoP = '';
        this._apellidoM = '';
        this._fechaNac = '';
        this._email = '';
        this._telCelular = '';
        this._telFijo = '';
        this._tipo = '';
        this._status = 0;
    }
    
    public list():any {
        //Retorna un json con la lista de usuarios
    }

    public search():boolean {
        let b = false;
        //Busca en la lista de usuarios el usuario con el id del objeto
        return b;
    }

    public save():boolean {
        let b = false;
        //Guarda en la lista de usuarios el nuevo usuario
        return b;
    }

    public update():boolean {
        let b = false;
        //Actualiza la info del usuario
        return b;
    }

    public delete():boolean {
        let b = false;
        //Elimina al usuario de la lista
        return b;
    }

    public validarUsuario():boolean {
        let b = false;
        //Revisa si existe un usuario con este nombre y contraseña
        return b;
    }
    
    get id(): number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }

    get nombreUsuario():string {
        return this._nombreUsuario;
    }

    set nombreUsuario(value:string) {
        this._nombreUsuario = value;
    }

    get contrasena():string {
        return this._contrasena;
    }

    set contrasena(value:string) {
        this._contrasena = value;
    }

    get nombre():string {
        return this._nombre;
    }

    set nombre(value:string) {
        this._nombre = value;
    }

    get apellidoP():string {
        return this._apellidoP;
    }

    set apellidoP(value:string) {
        this._apellidoP = value;
    }

    get apellidoM():string {
        return this._apellidoM;
    }

    set apellidoM(value:string) {
        this._apellidoM = value;
    }

    get fechaNac():string {
        return this._fechaNac;
    }

    set fechaNac(value:string) {
        this._fechaNac = value;
    }

    get email():string {
        return this._email;
    }

    set email(value:string) {
        this._email = value;
    }

    get telCelular():string {
        return this._telCelular;
    }

    set telCelular(value:string) {
        this._telCelular = value;
    }

    get telFijo():string {
        return this._telFijo;
    }

    set telFijo(value:string) {
        this._telFijo = value;
    }

    get tipo():string {
        return this._tipo;
    }

    set tipo(value:string) {
        this._tipo = value;
    }

    get status():number {
        return this._status;
    }

    set status(value:number) {
        this._status = value;
    }
}