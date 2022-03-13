class Consulta {
    private _id:number = 0;
    private _fecha:string = '';
    private _sintomas:string = '';
    private _peso:number = 0.0;
    private _temperatura:number = 0.0;
    private _frecuanciaCardiaca:number = 0.0;
    private _estatura:number = 0.0;
    private _descripcionAnalisisMedico:string = '';
    private _diagnostico:string = '';
    private _tratamiento:string = '';
    private _paciente:Paciente = new Paciente();
    private _medico:Medico = new Medico();

    public getPaciente():Paciente {
        return this._paciente;
    }
    
    public getMedico():Medico {
        return this._medico;
    }

    public list():any {
        //Retorna un json con la lista de Consultas del medico actual
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