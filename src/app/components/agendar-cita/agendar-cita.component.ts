import { Component, OnInit } from '@angular/core';
import { Recepcionista } from '../../models/Recepcionista';
import { Medico } from '../../models/Medico';
import { Cita } from '../../models/Cita';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { ICita } from 'src/app/interfaces/ICita';
import { Misc } from 'src/app/models/Misc';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss']
})
export class AgendarCitaComponent implements OnInit {
  cita:Cita;
  listaMedicos:IUsuario[];
  esRecepcionista:boolean = false;
  fechaRegistro:Date;
  hora:Date;
  fechaAtencion:Date;

  /*Esto es del paciente, no se utilizó
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
  */

  constructor(private rutas: Router) { }

  ngOnInit(): void {
    if (Sesion.getInstancia(new Usuario()).getUsuario().id == 0) {
      Sesion.cerrarSesion();
      this.rutas.navigate(['']);
    } else {
      switch(Sesion.getInstancia(new Usuario()).getUsuario().tipo) {
        case 'Recepcionista':{
          this.esRecepcionista = true;
          let medico = new Medico();
          let recepcionista:Recepcionista = Sesion.getInstancia(new Usuario()).getUsuario() as Recepcionista;
          this.cita = recepcionista.getNuevaCita();
          this.listaMedicos = medico.listMedicos();
          break; 
        }
        case 'Medico':{
          let medico:Medico = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
          this.cita = medico.getNuevaCita();
          this.cita.medico = medico.id;
          break; 
        }
        default:{
          alert('Debe ser un Usuario del Tipo Medico o Recepcionista para acceder a esta función');
          this.redireccionaMenu();
        }
      }
    }
    /*this.pacintes = [
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

    this.dropdownItems = [
      {nombre:'Elda Gomez'}
    ]*/ 
  }

  asignaMedico(id:number):void {
    this.cita.id = id;
  }

  registrarCita():void {
    this.cita.fechaRegistro = Misc.formatearFecha(this.fechaRegistro.getDate(), this.fechaRegistro.getMonth()+1, this.fechaRegistro.getFullYear());
    this.cita.fechaAtencion = Misc.formatearFecha(this.fechaAtencion.getDate(), this.fechaAtencion.getMonth()+1, this.fechaAtencion.getFullYear());
    this.cita.horaAtencion = Misc.formatearHora(this.hora.getHours(), this.hora.getMinutes());
    this.cita.status = 'Pendiente';
    if(this.cita.save()) {
      alert("Se ha guardado la Cita exitosamente");
      this.redireccionaMenu();
    } else {
      alert("Ocurrió un error al intentar guradar la Cita");
    }
  }

  redireccionaMenu():void {
    //Pendiente el enrutamiento de los componentes
    this.rutas.navigate(['home']);
  }

  cancelarCita(){
    this.rutas.navigate(['home/pages/citas']);
  }

  /*openRegisterPaciente(){
    this.formPaciente = true;
  }*/

}
