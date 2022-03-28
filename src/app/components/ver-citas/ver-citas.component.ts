import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Medico } from 'src/app/models/Medico';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss']
})
export class VerCitasComponent implements OnInit {
  citas:any;
  constructor() { }

  ngOnInit(): void {
    if(Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Recepcionista') {
      let cita:Cita = new Cita();
      this.citas = cita.list();
    } else if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Medico') {
      let medico:Medico = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
      this.citas = medico.listCitas();
    } else {
      alert("No se reconoce el tipo de Usuario");
    }
  }

}
