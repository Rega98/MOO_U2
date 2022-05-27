import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {
  listaPacientes:any;
  constructor(private rutas:Router) { }

  ngOnInit(): void {
    let paciente:Paciente = new Paciente();
    this.listaPacientes = paciente.list();
  }

  irAHistorial(user){
    console.log(user);
    this.rutas.navigate(['home/pages/historialPaciente/'+user]);
  }

}
