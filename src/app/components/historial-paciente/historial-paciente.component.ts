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
   /* this.paciente.id = 1
    //this.paciente.id = 1;//this.activatedRoute.snapshot.params.id;
    if(this.paciente.search()) {
      this.consultas = this.paciente.listHistorial();
      console.log(this.consultas);
    } else {
      alert("No se econtró el Paciente seleccionado");
      this.redireccionaMenu();
    }*/
  }

  redireccionaMenu(): void {
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

}


/*"id": 1,
"fecha": "2022-04-08",
"sintomas": "Dolor abdominal, Fiebre",
  "peso": "75",
  "temperatura": "38",
  "frecuanciaCardiaca": "123",
  "estatura": "167",
  "descripcionAnalisisMedico": "Se realizó presión sobre el abdomen para identificar el origen del dolor",
  "diagnostico": "Infección en el intestino",
  "tratamiento": "Biometacin 25mg 1 tableta cada 8 hrs, Ciproflox 50mg 1 tableta cada 12 hrs, Evitar comer carnes rojas",
  "paciente": 1,
  "medico": 4*/
