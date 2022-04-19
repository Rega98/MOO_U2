import { Data } from "./Data";
import { IUsuario } from "../interfaces/IUsuario";

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
    
    public list():IUsuario[] {
        //Retorna un json con la lista de usuarios
        return Data.listaUsuarios;
    }

    public search():boolean {
        //Busca en la lista de usuarios el usuario con el id del objeto
        let b = false;
        let arr:IUsuario[] = this.list();
        for(let usuario of arr){
            if(this._id == usuario.id) {
                this._id = usuario.id;
                this._nombreUsuario = usuario.nombreUsuario;
                this._contrasena = usuario.contrasena;
                this._nombre = usuario.nombre;
                this._apellidoP = usuario.apellidoP;
                this._apellidoM = usuario.apellidoM;
                this._fechaNac = usuario.fechaNac;
                this._email = usuario.email;
                this._telCelular = usuario.telCelular;
                this._telFijo = usuario.telFijo;
                this._tipo = usuario.tipo;
                this._status = usuario.status;
                b = true;
                break;
            }
        }
        return b;
    }

    public save():boolean {
        //Guarda en la lista de usuarios el nuevo usuario
        let b = false;
        let arrUsuarios:IUsuario[] = this.list();
        this._id = arrUsuarios[arrUsuarios.length-1].id + 1;
        //console.log(Data.listaUsuarios);
        let newUsr:IUsuario = {
            //id: arrUsuarios[arrUsuarios.length-1].id + 1,
            id: this._id,
            nombreUsuario: this._nombreUsuario,
            contrasena: this._contrasena,
            nombre:this._nombre,
            apellidoP:this._apellidoP,
            apellidoM:this._apellidoM,
            fechaNac:this._fechaNac,
            email:this._email,
            telCelular:this._telCelular,
            telFijo:this._telFijo,
            tipo:this._tipo,
            status:this._status
        };
        if(arrUsuarios.push(newUsr) != 0){
            b = true;
            //console.log(Data.listaUsuarios);
        }
        return b;
    }

    public update():boolean {
        let b = false;
        //Actualiza la info del usuario
        let arr:IUsuario[] = this.list();
        for(let usuario of arr){
            if(this._id == usuario.id) {
                usuario.nombreUsuario = this._nombreUsuario;
                usuario.contrasena = this._contrasena;
                usuario.nombre = this._nombre;
                usuario.apellidoP = this._apellidoP;
                usuario.apellidoM = this._apellidoM;
                usuario.fechaNac = this._fechaNac;
                usuario.email = this._email;
                usuario.telCelular = this._telCelular;
                usuario.telFijo = this._telFijo;
                usuario.tipo = this._tipo;
                usuario.status = this._status;
                b = true;
                break;
            }
        }
        return b;
    }

    public delete():boolean {
        let b = false;
        //Elimina al usuario de la lista
        let newArr:IUsuario[] = [];
        for(let obj of this.list()){
            if(obj.id != this._id){
                newArr.push(obj);
            }
        }
        Data.listaUsuarios = newArr;
        b = true;
        //console.log(this.list());
        return b;
    }

    public validarUsuario():boolean {
        let b = false;
        //Revisa si existe un usuario con este nombre y contraseña
        let arr:IUsuario[] = this.list();
        for(let usuario of arr){
            if(this._nombreUsuario == usuario.nombreUsuario && this._contrasena == usuario.contrasena) {
                this._id = usuario.id;
                this._nombreUsuario = usuario.nombreUsuario;
                this._contrasena = usuario.contrasena;
                this._nombre = usuario.nombre;
                this._apellidoP = usuario.apellidoP;
                this._apellidoM = usuario.apellidoM;
                this._fechaNac = usuario.fechaNac;
                this._email = usuario.email;
                this._telCelular = usuario.telCelular;
                this._telFijo = usuario.telFijo;
                this._tipo = usuario.tipo;
                this._status = usuario.status;
                b = true;
                break;
            }
        }
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