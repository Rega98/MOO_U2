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
        //Clona la instancia de medico
        const clone = Object.create(this);
        return clone;
    }
}