import { Usuario } from './Usuario';
import { Medico } from './Medico';
import { Recepcionista } from './Recepcionista';
export class Administracion extends Usuario {
    private _medicoPrototype:Medico;
    private _recepcionistaPrototype:Recepcionista;

    constructor() {
        super();
        this._medicoPrototype = new Medico();
        this._recepcionistaPrototype = new Recepcionista();
    }
    
    public getNuevoMedico():Medico {
        return this._medicoPrototype.clonar();
    }

    public getNuevoRecepcionista():Recepcionista {
        return this._recepcionistaPrototype.clonar();
    }
}