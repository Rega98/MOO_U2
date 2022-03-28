import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {
  listaPacientes:any;
  constructor() { }

  ngOnInit(): void {
    let paciente:Paciente = new Paciente();
    this.listaPacientes = paciente.list();
  }

}
