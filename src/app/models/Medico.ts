import { Data } from "./Data";
import { IMedico } from "../interfaces/IMedico";
import { IUsuario } from "../interfaces/IUsuario";
import { ICita } from "../interfaces/ICita";

import { Usuario } from './Usuario';
import { Cita } from './Cita';
import { Consulta } from './Consulta';
import { ConsultaBuilder } from './ConsultaBuilder';

export class Medico extends Usuario {
    private _idInfoMedico:number;
    private _horarioAtencion:string;
    private _diasAtencion:string;
    private _tarifaConsulta:number;
    private _citaPrototype:Cita;
    private _consultaBuilder:ConsultaBuilder;

    constructor() {
        super();
        this._idInfoMedico = 0;
        this._horarioAtencion = '';
        this._diasAtencion = '';
        this._tarifaConsulta = 0.0;
        this._citaPrototype = new Cita();
    }
    
    public nuevaConsulta():Consulta {
        this._consultaBuilder = new ConsultaBuilder();
        this._consultaBuilder.build(this.id);
        return this._consultaBuilder.getResult();
    }
    
    public searchInfoMedico():boolean {
        let b = false;
        //Busca en la lista la informacion del Medico que corresponda al usuario
        let arr:IMedico[] = Data.listaInfoMedicos;
        for(let infoMedico of arr){
            if(this._id == infoMedico.idMedico) {
                this._idInfoMedico = infoMedico.idInfoMedico;
                this._horarioAtencion = infoMedico.horarioAtencion;
                this._diasAtencion = infoMedico.diasAtencion;
                this._tarifaConsulta = infoMedico.tarifaConsulta;
                b = true;
                break;
            }
        }
        return b;
    }

    public saveInfoMedico():boolean {
        let b = false;
        //Guarda en lla informacion del Medico que corresponda al usuario
        let arrInfoMedico:IMedico[] = Data.listaInfoMedicos;
        this._idInfoMedico = arrInfoMedico[arrInfoMedico.length-1].idInfoMedico + 1;
        let newInfoMedico:IMedico = {
            idInfoMedico: this._idInfoMedico,
            idMedico: this._id,
            horarioAtencion: this._horarioAtencion,
            diasAtencion: this._diasAtencion,
            tarifaConsulta: this._tarifaConsulta,
        };
        if(arrInfoMedico.push(newInfoMedico) != 0){
            b = true;
        }
        return b;
    }

    public updateInfoMedico():boolean {
        let b = false;
        //Actualiza la informacion del Medico que corresponda al usuario
        let arr:IMedico[] = Data.listaInfoMedicos;
        for(let infoMedico of arr){
            if(this._idInfoMedico == infoMedico.idInfoMedico) {
                infoMedico.idMedico = this._id;
                infoMedico.horarioAtencion = this._horarioAtencion;
                infoMedico.diasAtencion = this._diasAtencion;
                infoMedico.tarifaConsulta = this._tarifaConsulta;
                b = true;
                break;
            }
        }
        return b;
    }

    public deleteInfoMedico():boolean {
        let b = false;
        //Elimina la informacion del Medico que corresponda al usuario
        let newArr:IMedico[] = [];
        for(let obj of Data.listaInfoMedicos){
            if(obj.idInfoMedico != this._idInfoMedico){
                newArr.push(obj);
            }
        }
        Data.listaInfoMedicos = newArr;
        b = true;
        return b;
    }

    public getNuevaCita():Cita {
        return this._citaPrototype.clonar();
    }

    public listMedicos():IUsuario[] {
        //Busc en la lista de usuarios todos lo usuarios del tipo Medico
        let arrayMedicos:IUsuario[] = [];
        for(let obj of this.list()){
            if(obj.tipo == "Medico"){
                arrayMedicos.push(obj);
            }
        }
        return arrayMedicos;
    }
    
    public listCitas():ICita[] {
        //Busca las citas agendadas para el medico actual
        let arrayCitas:ICita[] = [];
        for(let obj of this._citaPrototype.list()){
            if(obj.medicoAsignado == this.id){
                arrayCitas.push(obj);
            }
        }
        return arrayCitas;
    }

    public clonar():this {
        //Aun está pendiente de pruebas
        const clone = Object.create(this);
        return clone;
    }

    get idInfoMedico():number {
        return this._idInfoMedico;
    }

    set idInfoMedico(value:number) {
        this._idInfoMedico = value;
    }

    get horarioAtencion():string {
        return this._horarioAtencion;
    }

    set horarioAtencion(value:string) {
        this._horarioAtencion = value;
    }

    get diasAtencion():string {
        return this._diasAtencion;
    }

    set diasAtencion(value:string) {
        this._diasAtencion = value;
    }

    get tarifaConsulta():number {
        return this._tarifaConsulta;
    }

    set tarifaConsulta(value:number) {
        this._tarifaConsulta = value;
    }
}