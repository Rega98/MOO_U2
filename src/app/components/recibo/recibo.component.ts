import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.scss']
})
export class ReciboComponent implements OnInit {
  cita:Cita;
  constructor() { }

  ngOnInit(): void {
    this.cita.id = 0//this.activatedRoute.snapshot.params.id;
    if(this.cita.search()) {
      if(this.cita.medico.search()) {
        if(this.cita.medico.searchInfoMedico()) {
          //Algo hay que hacer
        } else {
          alert("No se encontró la información del Médico");
        }
      } else {
        alert("No se encontró al Médico que atendió esta Cita");
      }
    } else {
      alert("No se encontró la Cita");
      this.redireccionaMenu();
    }
  }

  redireccionaMenu(): void {
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

  imprimirRecibo():void {
    //Algo para imprimir Recibo
  }

}
