import { Data } from "./Data";
import { ICita } from "../interfaces/ICita";
import { Medico } from './Medico';

export class Cita {
    private _id:number;
    private _fechaRegistro:string;
    private _nombrePaciente:string;
    private _fechaAtencion:string;
    private _horaAtencon:string;
    private _observaciones:string;
    private _status:string;
    private _medico:number;
    //private _medico:Medico;

    constructor() {
        this._id = 0;
        this._fechaRegistro = '';
        this._nombrePaciente = '';
        this._fechaAtencion = '';
        this._horaAtencon = '';
        this._observaciones = '';
        this._status = '';
        this._medico = 0;
        //this._medico = new Medico();
    }
    
    public list():ICita[] {
        //Retorna un json con la lista de usuarios
        return Data.listaCitas;
    }

    public search():boolean {
        let b = false;
        //Busca en la lista de citas la cita con el id del objeto
        let arr:ICita[] = this.list();
        for(let cita of arr){
            if(this._id == cita.id) {
                this._id = cita.id;
                this._fechaRegistro = cita.fechaRegistro;
                this._nombrePaciente = cita.nombrePaciente;
                this._fechaAtencion = cita.fechaAtencion;
                this._horaAtencon = cita.horaAtencon;
                this._observaciones = cita.observaciones;
                this._status = cita.status;
                this._medico = cita.medicoAsignado;
                //this._medico.id = cita.medicoAsignado;
                b = true;
                break;
            }
        }
        return b;
    }

    public save():boolean {
        let b = false;
        //Guarda en la lista de citas la nueva cita
        let arrCitas:ICita[] = this.list();
        this._id = arrCitas[arrCitas.length-1].id + 1;
        let newCita:ICita = {
            id: this._id,
            fechaRegistro: this._fechaRegistro,
            nombrePaciente: this._nombrePaciente,
            fechaAtencion:this._fechaAtencion,
            horaAtencon:this._horaAtencon,
            observaciones:this._observaciones,
            status:this._status,
            medicoAsignado:this._medico
            //medicoAsignado:this._medico.id
        };
        if(arrCitas.push(newCita) != 0){
            b = true;
        }
        return b;
    }

    public update():boolean {
        let b = false;
        //Actualiza la info de la cita
        let arr:ICita[] = this.list();
        for(let cita of arr){
            if(this._id == cita.id) {
                cita.fechaRegistro = this._fechaRegistro;
                cita.nombrePaciente = this._nombrePaciente;
                cita.fechaAtencion = this._fechaAtencion;
                cita.horaAtencon = this._horaAtencon;
                cita.observaciones = this._observaciones;
                cita.status = this._status;
                cita.medicoAsignado = this._medico;
                //cita.medicoAsignado = this._medico.id;
                b = true;
                break;
            }
        }
        return b;
    }

    public delete():boolean {
        let b = false;
        //Elimina a la cita de la lista
        let newArr:ICita[] = [];
        for(let obj of this.list()){
            if(obj.id != this._id){
                newArr.push(obj);
            }
        }
        Data.listaCitas = newArr;
        b = true;
        return b;
    }

    get medico():number {
        return this._medico;
    }

    set medico(object:number) {
        this._medico = object;
    }

    public clonar():this {
        //Aun está pendiente de pruebas
        const clone = Object.create(this);
        //clone.medico = Object.create(this.medico);
        return clone;
    }

    set id(value:number) {
        this._id = value;
    }

    get id():number {
        return this._id;
    }

    set fechaRegistro(value:string) {
        this._fechaRegistro = value;
    }

    get fechaRegistro():string {
        return this._fechaRegistro;
    }

    set nombrePaciente(value:string) {
        this._nombrePaciente = value;
    }

    get nombrePaciente():string {
        return this._nombrePaciente;
    }

    set fechaAtencion(value:string) {
        this._fechaAtencion = value;
    }

    get fechaAtencion():string {
        return this._fechaAtencion;
    }

    set horaAtencion(value:string) {
        this._horaAtencon = value;
    }

    get horaAtencion():string {
        return this._horaAtencon;
    }

    set observaciones(value:string) {
        this._observaciones = value;
    }

    get observaciones():string {
        return this._observaciones;
    }

    set status(value:string) {
        this._status = value;
    }

    get status():string {
        return this._status;
    }
}