import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';

@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss']
})
export class CancelarCitaComponent implements OnInit {
  cita:Cita = new Cita();
  constructor() { }

  ngOnInit(): void {
    let idCita:number = 0//this.activatedRoute.snapshot.params.id;
    this.cita.id = idCita;
    if(this.cita.search()) {
      if(this.cita.medico.search()) {
        if(this.cita.medico.searchInfoMedico()) {
          //Algo hay que hacer aquí
        } else {
          alert("Algunos datos del médico no se pudieron cargar");
        }
      } else {
        alert("No se encontró la información del Médico");
      }
    } else {
      alert("No se encontró la información de la Cita");
      this.redireccionaMenu();
    }
  }

  cancelarCita(): void {
    this.cita.status = 'Cancelada';
    if(this.cita.update()) {
      alert("Se ha cancelado la Cita");
      this.redireccionaMenu();
    } else {
      alert("Ocurrió un error al actualizar los datos");
    }
  }

  redireccionaMenu(): void{
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

}
