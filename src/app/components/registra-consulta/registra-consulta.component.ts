import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Consulta } from 'src/app/models/Consulta';
import { Medico } from 'src/app/models/Medico';
import { RegistrarConsultaFacade } from 'src/app/models/RegistrarConsultaFacade';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-registra-consulta',
  templateUrl: './registra-consulta.component.html',
  styleUrls: ['./registra-consulta.component.scss']
})
export class RegistraConsultaComponent implements OnInit {
  cita:Cita;
  usr:Medico;
  consulta:Consulta;
  listaPacientes:any;
  nuevoPaciente:boolean;

  
  pacintes:any;
  selectedPaciente:any;
  date:Date;
  dropdownItems:any;
  selectedMeed:any;
  formPaciente: boolean;
  nombre:any;
  sexo: string;
  selectedCategory: any;
  categories: any[] = [{name: 'Masculino', key: 'M'}, {name: 'Femenino', key: 'F'}];
  registroConsulta: 'sinPaciente' | 'conPaciente' = 'sinPaciente';
  

  constructor() { }

  ngOnInit(): void {
    this.registroConsulta = 'conPaciente'
   /* if(Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Medico') {
      this.usr = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
      this.cita = new Cita();
      this.cita.id = 0;//this.activatedRoute.snapshot.params.id;
      if(this.cita.search()) {
        this.consulta = this.usr.nuevaConsulta();
      } else {
        alert("No se encontró la cita que se desea atender");
        this.redireccionaMenu();
      }
    } else {
      alert("No se hainiciado Sesión desde una cuenta de usuario Médico");
      this.redireccionaMenu();
    }*/


      this.pacintes = [
      {
        nombre: 'Adolfo Meza',
        id:'123133'
      },
      {
        nombre: 'Uriel Reyes',
        id:'123134'
      },
      {
        nombre: 'Lisset Rosete',
        id:'123135'
      },
      {
        nombre: 'Rodolfo Elias',
        id:'123136'
      }
    ]
  }

  listarPacientes(): void {
    //this.nuevoPaciente = false;
    this.listaPacientes = this.consulta.paciente.list();
  }

  seleccionarPaciente(id:number): void {
    this.consulta.paciente.id = id;
    if(this.consulta.paciente.search()) {
      //Algo hay que hacer aqui
    } else {
      alert("Error, no se encontró el Médico seleccionado");
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
    //this.router.navigate(['']);
  }

}
