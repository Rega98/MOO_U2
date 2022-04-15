import { Component, OnInit } from '@angular/core';
import { Recepcionista } from '../../models/Recepcionista';
import { Medico } from '../../models/Medico';
import { Cita } from '../../models/Cita';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss']
})
export class AgendarCitaComponent implements OnInit {
  cita:Cita;
  listaMedicos:any;
  date:Date;
  pacintes:any;
  selectedPaciente:any;
  date2:Date;
  date3:Date;
  date4:Date;
  dropdownItems:any;
  selectedMeed:any;
  constructor(private rutas: Router) { }

  ngOnInit(): void {
    if(Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Recepcionista') {
      let medico = new Medico();
      let recepcionista:Recepcionista = Sesion.getInstancia(new Usuario()).getUsuario() as Recepcionista;
      this.cita = recepcionista.getNuevaCita();
      this.listaMedicos = medico.listMedicos();
    } else if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Medico') {
      let medico:Medico = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
      this.cita = medico.getNuevaCita();
      this.cita.id = medico.id;
    }

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

    this.dropdownItems = [
      {nombre:'Elda Gomez'}
    ]
  }

  asignaMedico(id:number):void {
    this.cita.id = id;
  }

  registrarCita():void {
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

}
