import { Medico } from './Medico';
import { Paciente } from './Paciente';
export class Consulta {
    private _id:number;
    private _fecha:string ;
    private _sintomas:string;
    private _peso:number;
    private _temperatura:number;
    private _frecuanciaCardiaca:number;
    private _estatura:number;
    private _descripcionAnalisisMedico:string;
    private _diagnostico:string;
    private _tratamiento:string;
    private _paciente:Paciente;
    private _medico:Medico;

    constructor() {
        this._id = 0;
        this._fecha = '';
        this._sintomas = '';
        this._peso = 0.0;
        this._temperatura = 0.0;
        this._frecuanciaCardiaca = 0.0;
        this._estatura = 0.0;
        this._descripcionAnalisisMedico = '';
        this._diagnostico = '';
        this._tratamiento = '';
        this._paciente = new Paciente();
        this._medico = new Medico();
    }
    
    get paciente():Paciente {
        return this._paciente;
    }

    set paciente(object:Paciente) {
        this._paciente = object;
    }
    
    get medico():Medico {
        return this._medico;
    }

    set medico(object:Medico) {
        this._medico = object;
    }

    public list():any {
        //Retorna un json con la lista de Consultas
    }

    public search():boolean {
        let b = false;
        //Busca en la lista de citas la Consultas con el id del objeto
        return b;
    }

    public save():boolean {
        let b = false;
        //Guarda en la lista de Consultas la nueva consulta
        return b;
    }

    public update():boolean {
        let b = false;
        //Actualiza la info de la Caonsulta
        return b;
    }

    public delete():boolean {
        let b = false;
        //Elimina a la Consulta de la lista
        return b;
    }

    get id():number {
        return this._id;
    }
    
    set id(value:number) {
        this._id = value;
    }

    get fecha():string {
        return this._fecha;
    }
    
    set fecha(value:string) {
        this._fecha = value;
    }

    get sintomas():string {
        return this._sintomas;
    }
    
    set sintomas(value:string) {
        this._sintomas = value;
    }

    get peso():number {
        return this._peso;
    }
    
    set peso(value:number) {
        this._peso = value;
    }

    get temperatura():number {
        return this._temperatura;
    }
    
    set temperatura(value:number) {
        this._temperatura = value;
    }

    get frecuenciaCardiaca():number {
        return this._frecuanciaCardiaca;
    }
    
    set frecuenciaCardiaca(value:number) {
        this._frecuanciaCardiaca = value;
    }

    get estatura():number {
        return this._estatura;
    }
    
    set estatura(value:number) {
        this._estatura = value;
    }

    get descripcionAnalisisMedico():string {
        return this._descripcionAnalisisMedico;
    }
    
    set descripcionAnalisisMedico(value:string) {
        this._descripcionAnalisisMedico = value;
    }

    get diagnostico():string {
        return this._diagnostico;
    }
    
    set diagnostico(value:string) {
        this._diagnostico = value;
    }

    get tratamiento():string {
        return this._tratamiento;
    }
    
    set tratamiento(value:string) {
        this._tratamiento = value;
    }
}