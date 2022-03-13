class Medico extends Usuario {
    private _horarioAtencion:string = '';
    private _diasAtencion:string = '';
    private _tarifaConsulta:number = 0.0;
    private citaPrototype:Cita = new Cita();
    //private _consultaBuilder:ConsultaBuilder;

    public nuevaConsulta():any {
        //Devuleve un nuevo objeto del tipo consulta
    }
    
    public searchInfoMedico():boolean {
        let b = false;
        //Busca en la lista la informacion del Medico que corresponda al usuario
        return b;
    }

    public saveInfoMedico():boolean {
        let b = false;
        //Guarda en lla informacion del Medico que corresponda al usuario
        return b;
    }

    public updateInfoMedico():boolean {
        let b = false;
        //Actualiza la informacion del Medico que corresponda al usuario
        return b;
    }

    public deleteInfoMedico():boolean {
        let b = false;
        //Elimina la informacion del Medico que corresponda al usuario
        return b;
    }

    public getNuevaCita():any {
        //Devuleve un nuevo objeto de tipo cita
    }

    public listMedicos():any {
        //Busc en la lista de usuarios todos lo usuarios del tipo Medico
    }
    
    public listCitas():any {
        //Busca las citas agendadas para el medico actual
    }

    public clonar():any {
        //Clona la instancia de medico
    }

    get horaAtencion():string {
        return this._horarioAtencion;
    }

    set horaAtencion(value:string) {
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