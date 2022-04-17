import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Medico } from 'src/app/models/Medico';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Misc } from 'src/app/models/Misc';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss'],
  providers: [MessageService]
})
export class CancelarCitaComponent implements OnInit {
  cita:Cita;
  medico:Medico;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    this.cita = new Cita();
    this.activatedRoute.params.subscribe((param: Params) =>{
      this.cita.id = parseInt(param.citaId) ;
      console.log(this.cita.id);
    });
   }

  ngOnInit(): void {
    if (Sesion.getInstancia(new Usuario()).getUsuario().id == 0) {
      Sesion.cerrarSesion();
      this.router.navigate(['']);
    } else {
      if(Sesion.getInstancia(new Usuario()).getUsuario().tipo != Misc.tipoAdministrador) {
        this.primengConfig.ripple = true;
        if(this.cita.search()) {
          this.medico = new Medico();
          this.medico.id = this.cita.medico;
          if(!this.medico.search()) {
            alert("No se encontró la información del Médico");
          }
        } else {
          alert("No se encontró la información de la Cita");
          this.redireccionaMenu();
        }
      } else {
        alert("Esta acción solo está permitida para usuarios del tipo Medico o Recepcionista");
      }
    }
  }

  cancelarCita(): void {
    this.cita.status = Misc.statusCancelada;
    if(this.cita.update()) {
      alert("Se ha cancelado la Cita");
      this.redireccionaMenu();
    } else {
      alert("Ocurrió un error al actualizar los datos");
    }
  }

  redireccionaMenu(): void{
    this.router.navigate(['home/pages/citas']);
  }

}
