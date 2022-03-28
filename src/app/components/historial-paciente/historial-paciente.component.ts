import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.scss']
})
export class HistorialPacienteComponent implements OnInit {
  consultas:any;
  paciente:Paciente;

  constructor() { }

  ngOnInit(): void {
    this.paciente.id = 0;//this.activatedRoute.snapshot.params.id;
    if(this.paciente.search()) {
      this.consultas = this.paciente.listHistorial();
    } else {
      alert("No se econtró el Paciente seleccionado");
      this.redireccionaMenu();
    }
  }

  redireccionaMenu(): void {
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

}
