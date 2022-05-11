import { Consulta } from './Consulta';
//Clase encargada de generar objetos del tipo consulta, quitando la carga de trabajo
//al controlador
export class ConsultaBuilder {
    private _consulta:Consulta;

    constructor() {
        //Genera una consulta en blanco
        this._consulta = new Consulta();
    }
    
    public build(idMedico:number) {
        //Realiza las tareas necesarias para preparar su construcción
        this._consulta.medico.id = idMedico;
    }

    public getResult():Consulta {
        //Regresa el objeto generado
        return this._consulta;
    }
}