import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Consulta } from 'src/app/models/Consulta';
import { Medico } from 'src/app/models/Medico';
import { RegistrarConsultaFacade } from 'src/app/models/RegistrarConsultaFacade';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import { Misc } from '../../models/Misc';
import { Paciente } from '../../models/Paciente';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-registra-consulta',
  templateUrl: './registra-consulta.component.html',
  styleUrls: ['./registra-consulta.component.scss']
})
export class RegistraConsultaComponent implements OnInit {
  cita:Cita;
  usr:Medico;
  consulta:Consulta;
  paciente:Paciente;
  listaPacientes:any;
  nuevoPaciente:boolean;
  fechaRegistro:Date;

 registroConsulta: 'sinPaciente' | 'conPaciente' = 'sinPaciente';
  

 constructor(private router:Router, private activatedRoute: ActivatedRoute) {
  this.cita = new Cita();
  this.activatedRoute.params.subscribe((param: Params) =>{
    this.cita.id = parseInt(param.citaId) ;
    console.log(this.cita.id);
  });
 }

  ngOnInit(): void {
    this.registroConsulta = 'conPaciente';
    this.consulta = new Consulta();
    this.listarPacientes()
    if(Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Medico') {
      this.usr = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
      //this.cita = new Cita();
      //this.cita.id = 0;//this.activatedRoute.snapshot.params.id;
      if(this.cita.search()) {
        this.consulta = this.usr.nuevaConsulta();

      } else {
        alert("No se encontró la cita que se desea atender");
        this.redireccionaMenu();
      }
    } else {
      alert("No se hainiciado Sesión desde una cuenta de usuario Médico");
      this.redireccionaMenu();
    }
  }

  listarPacientes(): void {
    this.paciente = new Paciente();
    this.listaPacientes =  this.paciente.list();
    console.log('Hola pacientes',this.listaPacientes);
  }

  seleccionarPaciente(id:number): void {
    this.consulta.paciente.id = id;
    if(this.consulta.paciente.search()) {
      //Algo hay que hacer aqui
    } else {
      alert("Error, no se encontró el paciente seleccionado");
      this.consulta.paciente.id = 0;
    }
  }

  muestraFormularioPaciente(): void {
    //Muestra el formualrio Paciente
    this.nuevoPaciente = true;
    this.registroConsulta = 'conPaciente';

  }

  muestraFormularioNormal():void{
    this.registroConsulta = 'sinPaciente';
  }

  guardarConsulta(): void {
    this.consulta.fecha = Misc.formatearFecha(this.fechaRegistro.getDate(), this.fechaRegistro.getMonth()+1, this.fechaRegistro.getFullYear());
    let regConsulta:RegistrarConsultaFacade = new RegistrarConsultaFacade(this.consulta, this.cita);
    regConsulta.registrarConsulta(this.nuevoPaciente);
    this.redireccionaMenu();
  }
  /*
  guardarConsulta(): void {
    if(this.nuevoPaciente) {
      if(this.consulta.paciente.save()) {
        if(this.consulta.save()) {
          alert("Se ha guardado exitosamente la Consulta");
          this.actualizaCita();
        } else {
          alert("No se pudo registrar la Consulta nueva");
        }
      } else { 
        alert("No se pudo registrar el nuevo Paciente");
      }
    } else {
      if(this.consulta.save()) {
        alert("Se ha guardado exitosamente la Consulta");
        this.actualizaCita();
      } else {
        alert("No se pudo registrar la Consulta nueva");
      }
    }
  }

  actualizaCita(): void {
    this.cita.status = 'Atendida';
    if(this.cita.update()){
      alert("Se ha actualizado el estatus de la Cita");
    } else{
      alert("Ocurrió un error al intentar actualizar el estatus de la Cita")
    }
    this.redireccionaMenu();
  }
  */
  redireccionaMenu(): void{
    //Pendiente el enrutamiento de los componentes
    this.router.navigate(['home/pages/citas']);
  }
  
  cancelar(){
    this.router.navigate(['home/pages/citas']);
  }

}
