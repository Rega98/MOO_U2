class ConsultaBuilder {
    private _consulta:Consulta;

    constructor() {
        this._consulta = new Consulta();
    }
    
    public build(idMedico:number) {
        this._consulta.medico.id = idMedico;
    }

    public getResult():Consulta {
        return this._consulta;
    }
}