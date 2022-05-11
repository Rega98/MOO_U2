import { Usuario } from './Usuario';
import { Medico } from './Medico';
import { Recepcionista } from './Recepcionista';
export class Administracion extends Usuario {
    //Implementación del patró prototype.
    //La creación de usuarios será recurrente para el administrador, por lo que utilizar
    //proptotipos reducirá las veces que se instancia un nuevo objeto para los usuarios
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