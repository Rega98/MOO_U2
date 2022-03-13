class Medico extends Usuario {
    private _horarioAtencion:string;
    private _diasAtencion:string;
    private _tarifaConsulta:number;
    private _citaPrototype:Cita;
    private _consultaBuilder:any;

    constructor() {
        super();
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

    public getNuevaCita():Cita {
        return this._citaPrototype.clonar();
    }

    public listMedicos():any {
        //Busc en la lista de usuarios todos lo usuarios del tipo Medico
    }
    
    public listCitas():any {
        //Busca las citas agendadas para el medico actual
    }

    public clonar():this {
        //Aun está pendiente de pruebas
        const clone = Object.create(this);
        return clone;
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