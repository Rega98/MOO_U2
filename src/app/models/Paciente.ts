class Paciente {
    private _id:number = 0;
    private _nombre:string = '';
    private _apellidoP:string = '';
    private _apellidoM:string = '';
    private _sexo:string = '';
    private _fechaNac:string = '';
    private _tipoSangre:string = '';
    private _alergias:string = '';
    private _telContacto:string = '';
    private _email:string = '';
    
    public list():any {
        //Retorna un json con la lista de Pacientes
    }

    public search():boolean {
        let b = false;
        //Busca en la lista de Pacientes el paciente con el id del objeto
        return b;
    }

    public save():boolean {
        let b = false;
        //Guarda en la lista de Pacientes el nuevo paciente
        return b;
    }

    public update():boolean {
        let b = false;
        //Actualiza la info del Paciente
        return b;
    }

    public delete():boolean {
        let b = false;
        //Elimina al Paciente de la lista
        return b;
    }

    get id(): number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }

    get nombre():string {
        return this._nombre;
    }

    set nombre(value:string) {
        this._nombre = value;
    }

    get apellidoP():string {
        return this._apellidoP;
    }

    set apellidoP(value:string) {
        this._apellidoP = value;
    }

    get apellidoM():string {
        return this._apellidoM;
    }

    set apellidoM(value:string) {
        this._apellidoM = value;
    }

    get sexo():string {
        return this._sexo;
    }

    set sexo(value:string) {
        this._sexo = value;
    }

    get fechaNac():string {
        return this._fechaNac;
    }

    set fechaNac(value:string) {
        this._fechaNac = value;
    }

    get tipoSangre():string {
        return this._tipoSangre;
    }

    set tipoSangre(value:string) {
        this._tipoSangre = value;
    }

    get alergias():string {
        return this._fechaNac;
    }

    set alergias(value:string) {
        this._alergias = value;
    }

    get telContacto():string {
        return this._telContacto;
    }

    set telContacto(value:string) {
        this._telContacto = value;
    }

    get email():string {
        return this._email;
    }

    set email(value:string) {
        this._email = value;
    }
}