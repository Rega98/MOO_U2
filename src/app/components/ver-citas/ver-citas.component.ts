import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Medico } from 'src/app/models/Medico';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import {Router} from '@angular/router';
import 'src/assets/demo/hospital/citas.json'
import { Misc } from 'src/app/models/Misc';


@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss']
})

export class VerCitasComponent implements OnInit {
  citas: any;
  esMedico:boolean = false;
  //citaCancel:any;
  constructor(private rutas: Router) { }

  ngOnInit(): void {
    if (Sesion.getInstancia(new Usuario()).getUsuario().id == 0) {
      Sesion.cerrarSesion();
      this.rutas.navigate(['']);
    } else {
      switch(Sesion.getInstancia(new Usuario()).getUsuario().tipo) {
        case Misc.tipoRecepcionista:{
          let cita: Cita = new Cita();
          this.citas = cita.list();
          break; 
        }
        case Misc.tipoMedico:{
          this.esMedico = true;
          let medico: Medico = Sesion.getInstancia(new Usuario()).getUsuario() as Medico;
          this.citas = medico.listCitas();
          break; 
        }
        default:{
          alert('Debe ser un Usuario del Tipo Medico o Recepcionista para acceder a esta función');
          this.redireccionaMenu();
        }
      }
    }
    /*if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == 'Recepcionista') {
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
    */
  }

  estaPendiente(status:string):boolean {
    if(status == Misc.statusPendiente){
      return true;
    } else {
      return false;
    }
  }

  cancel(citaId){    
    //this.citaCancel = product;
    //this.rutas.navigate(['home/pages/cancelarCita/'+this.citaCancel]);
    this.rutas.navigate(['home/pages/cancelarCita/'+citaId]);
  }

  recibo(citaId){    
    console.log('id',citaId);
    this.rutas.navigate(['home/pages/recibo/'+citaId]); 
  }

  Agregar(){

    this.rutas.navigate(['home/pages/agregarcita']);

    //alert('Por el momento esta accion no esta disponible');

  }

  redireccionaMenu():void {
    //Pendiente el enrutamiento de los componentes
    this.rutas.navigate(['home']);
  }

}
