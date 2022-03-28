import { Component, OnInit } from '@angular/core';
import { Recepcionista } from '../../models/Recepcionista';
import { Medico } from '../../models/Medico';
import { Cita } from '../../models/Cita';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss']
})
export class AgendarCitaComponent implements OnInit {
  cita:Cita;
  listaMedicos:any;
  constructor() { }

  ngOnInit(): void {
    if(Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Recepcionista') {
      let recepcionista:Recepcionista = Sesion.getInstancia(new Usuario()).getUsuario() as Recepcionista;
      this.cita = recepcionista.getNuevaCita();
      this.listaMedicos = this.cita.medico.listMedicos();
    } else if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Medico') {
      let medico:Medico = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
      this.cita = medico.getNuevaCita();
      this.cita.id = medico.id;
    }
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
    //this.router.navigate(['']);
  }

}
