import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Medico } from 'src/app/models/Medico';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss'],
  providers: [MessageService]
})
export class CancelarCitaComponent implements OnInit {
  cita:Cita = new Cita();
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    let idCita:number = 0//this.activatedRoute.snapshot.params.id;
    this.cita.id = idCita;
    if(this.cita.search()) {
      let medico = new Medico();
      medico.id = this.cita.medico;
      if(medico.search()) {
        if(medico.searchInfoMedico()) {
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
