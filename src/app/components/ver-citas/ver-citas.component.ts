import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Medico } from 'src/app/models/Medico';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import {Router} from '@angular/router';
import 'src/assets/demo/hospital/citas.json'


@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss']
})

export class VerCitasComponent implements OnInit {
  citas: any;
  citaCancel:any;
  constructor(private rutas: Router) { }

  ngOnInit(): void {
    if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Recepcionista') {
      let cita: Cita = new Cita();
      this.citas = cita.list();
    } else if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Medico') {
      let medico: Medico = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
      this.citas = medico.listCitas();
    } else {
      alert("No se reconoce el tipo de Usuario");
    }

    let cita: Cita = new Cita();
    this.citas = cita.list();

  }

  cancel(product){    
    this.citaCancel = product;
    this.rutas.navigate(['home/pages/cancelarCita/'+this.citaCancel]);
  }

  Agregar(){

    this.rutas.navigate(['home/pages/agregarcita']);

    alert('Por el momento esta accion no esta disponible')

  }

}
