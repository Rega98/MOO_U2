import { Medico } from './Medico';
export class Cita {
    private _id:number;
    private _fechaRegistro:string;
    private _nombrePaciente:string;
    private _fechaAtencion:string;
    private _horaAtencon:string;
    private _observaciones:string;
    private _status:string;
    private _medico:Medico;

    constructor() {
        this._id = 0;
        this._fechaRegistro = '';
        this._nombrePaciente = '';
        this._fechaAtencion = '';
        this._horaAtencon = '';
        this._observaciones = '';
        this._status = '';
        this._medico = new Medico();
    }
    
    public list():any {
        //Retorna un json con la lista de usuarios
    }

    public search():boolean {
        let b = false;
        //Busca en la lista de citas la cita con el id del objeto
        return b;
    }

    public save():boolean {
        let b = false;
        //Guarda en la lista de citas la nueva cita
        return b;
    }

    public update():boolean {
        let b = false;
        //Actualiza la info de la cita
        return b;
    }

    public delete():boolean {
        let b = false;
        //Elimina a la cita de la lista
        return b;
    }

    get medico():Medico {
        return this._medico;
    }

    set medico(object:Medico) {
        this._medico = object;
    }

    public clonar():this {
        //Aun está pendiente de pruebas
        const clone = Object.create(this);
        clone.medico = Object.create(this.medico);
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