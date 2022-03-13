class Administracion {
    private _medicoPrototype:Medico = new Medico();
    private _recepcionistaPrototype:Recepcionista = new Recepcionista();

    public getNuevoMedico():any {
        return this._medicoPrototype.clonar();
    }

    public getNuevoRecepcionista():any {
        return this._recepcionistaPrototype.clonar();
    }
}