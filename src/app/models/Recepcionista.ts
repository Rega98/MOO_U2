import { Usuario } from './Usuario';
import { Cita } from './Cita';
export class Recepcionista extends Usuario {
    private _citaPrototype:Cita;

    constructor() {
        super();
        this._citaPrototype = new Cita();
    }
    
    public getNuevaCita():Cita {
        return this._citaPrototype.clonar();
    }

    public clonar():this {
        //TS tiene el método Object.create(), que sería el equivalente a la implemntación de
        //la interfaz cloneable en Java
        const clone = Object.create(this);
        return clone;
    }
}