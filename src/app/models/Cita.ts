class Cita {
    private _id:number = 0;
    private _fechaRegistro:string = '';
    private _nombrePaciente:string = '';
    private _fechaAtencion:string = '';
    private _horaAtencon:string = '';
    private _observaciones:string = '';
    private _status:string = '';
    private _medico:Medico = new Medico();

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

    public getMedico():Medico {
        return this._medico;
    }

    public clonar():any {
        //Clona la instancia de cita
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