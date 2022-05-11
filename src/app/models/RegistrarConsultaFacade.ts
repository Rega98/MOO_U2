import { Cita } from "./Cita";
import { Consulta } from "./Consulta";
import { Paciente } from "./Paciente";

export class RegistrarConsultaFacade {
    //Dado que el proceso de registro de consulta puede considerarse complejo, pues el proceso
    //que se sigue varia en funcion de si se requiere registrar o no un nuevo paciente, el 
    //patrón Facade permite ocultar esta complejidad al usuario, simplificandolo en un solo método
    protected _consulta:Consulta;
    protected _cita:Cita;

    constructor(consulta:Consulta, cita:Cita){
        this._consulta = consulta;
        this._cita = cita;
    }

    public registrarConsulta(nuevoPaciente:boolean){
        if(nuevoPaciente) {
            if(this._consulta.paciente.save()) {
                alert("Se ha guardado exitosamente los datos del Paciente");
              if(this._consulta.save()) {
                alert("Se ha guardado exitosamente la Consulta");
                this.actualizaCita();
              } else {
                alert("No se pudo registrar la Consulta nueva");
              }
            } else { 
              alert("No se pudo registrar el nuevo Paciente");
            }
        } else {
            if(this._consulta.save()) {
              alert("Se ha guardado exitosamente la Consulta");
              this.actualizaCita();
            } else {
              alert("No se pudo registrar la Consulta nueva");
            }
          }
    }

    private actualizaCita(): void {
        this._cita.status = 'Atendida';
        if(this._cita.update()){
          alert("Se ha actualizado el estatus de la Cita");
        } else{
          alert("Ocurrió un error al intentar actualizar el estatus de la Cita")
        }
  }

}