import { Data } from "./Data";
import { IPaciente } from "../interfaces/IPaciente";
import { IConsulta } from "../interfaces/IConsulta";

export class Paciente {
    private _id:number;
    private _nombre:string;
    private _apellidoP:string;
    private _apellidoM:string;
    private _sexo:string;
    private _fechaNac:string;
    private _tipoSangre:string;
    private _alergias:string;
    private _telContacto:string;
    private _email:string;
    
    constructor() {
        this._id = 0;
        this._nombre = '';
        this._apellidoP = '';
        this._apellidoM = '';
        this._sexo = '';
        this._fechaNac = '';
        this._tipoSangre = '';
        this._alergias = '';
        this._telContacto = '';
        this._email = '';
    }
    
    public list():IPaciente[] {
        //Retorna un json con la lista de Pacientes
        return Data.listaPacientes;
    }

    public search():boolean {
        let b = false;
        //Busca en la lista de Pacientes el paciente con el id del objeto
        let arr:IPaciente[] = this.list();
        for(let paciente of arr){
            if(this._id == paciente.id) {
                this._id = paciente.id;
                this._nombre = paciente.nombre;
                this._apellidoP = paciente.apellidoP;
                this._apellidoM = paciente.apellidoM;
                this._sexo = paciente.sexo;
                this._fechaNac = paciente.fechaNac;
                this._tipoSangre = paciente.tipoSangre;
                this._alergias = paciente.alergias;
                this._telContacto = paciente.telContacto;
                this._email = paciente.email;
                b = true;
                break;
            }
        }
        return b;
    }

    public save():boolean {
        let b = false;
        //Guarda en la lista de Pacientes el nuevo paciente
        let arrPacientes:IPaciente[] = this.list();
        this._id = arrPacientes[arrPacientes.length-1].id + 1;
        let newPaciente:IPaciente = {
            id: this._id,
            nombre: this._nombre,
            apellidoP: this._apellidoP,
            apellidoM:this._apellidoM,
            sexo:this._sexo,
            fechaNac:this._fechaNac,
            tipoSangre:this._tipoSangre,
            alergias:this._alergias,
            telContacto:this._telContacto,
            email:this._email
        };
        if(arrPacientes.push(newPaciente) != 0){
            b = true;
            //console.log(this.list());
        }
        return b;
    }

    public update():boolean {
        let b = false;
        //Actualiza la info del Paciente
        let arr:IPaciente[] = this.list();
        for(let paciente of arr){
            if(this._id == paciente.id) {
                paciente.nombre = this._nombre;
                paciente.apellidoP = this._apellidoP;
                paciente.apellidoM = this._apellidoM;
                paciente.sexo = this._sexo;
                paciente.fechaNac = this._fechaNac;
                paciente.tipoSangre = this._tipoSangre;
                paciente.alergias = this._alergias;
                paciente.telContacto = this._telContacto;
                paciente.email = this._email;
                b = true;
                break;
            }
        }
        return b;
    }

    public delete():boolean {
        let b = false;
        //Elimina al Paciente de la lista
        let newArr:IPaciente[] = [];
        for(let obj of this.list()){
            if(obj.id != this._id){
                newArr.push(obj);
            }
        }
        Data.listaPacientes = newArr;
        b = true;
        return b;
    }

    listHistorial():IConsulta[] {
        //Retorna un json con la lista de Consultas en donde aparece el paciente
        let arrayConsultas:IConsulta[] = [];
        for(let obj of Data.listaConsultas){
            if(obj.paciente == this._id){
                arrayConsultas.push(obj);
            }
        }
        return arrayConsultas;
    }

    get id(): number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
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

    get sexo():string {
        return this._sexo;
    }

    set sexo(value:string) {
        this._sexo = value;
    }

    get fechaNac():string {
        return this._fechaNac;
    }

    set fechaNac(value:string) {
        this._fechaNac = value;
    }

    get tipoSangre():string {
        return this._tipoSangre;
    }

    set tipoSangre(value:string) {
        this._tipoSangre = value;
    }

    get alergias():string {
        return this._alergias;
    }

    set alergias(value:string) {
        this._alergias = value;
    }

    get telContacto():string {
        return this._telContacto;
    }

    set telContacto(value:string) {
        this._telContacto = value;
    }

    get email():string {
        return this._email;
    }

    set email(value:string) {
        this._email = value;
    }
}