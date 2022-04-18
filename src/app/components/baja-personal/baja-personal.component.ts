import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Router,ActivatedRoute, Params } from '@angular/router';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Misc } from 'src/app/models/Misc';
import { Sesion } from 'src/app/models/Sesion';

@Component({
  selector: 'app-baja-personal',
  templateUrl: './baja-personal.component.html',
  styleUrls: ['./baja-personal.component.scss'],
  providers: [MessageService]
})
export class BajaPersonalComponent implements OnInit {
  usrBaja:Usuario;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private messageService: MessageService, private primengConfig: PrimeNGConfig) { 
    this.activatedRoute.params.subscribe((param: Params) =>{
      this.usrBaja = new Usuario();
      this.usrBaja.id = parseInt(param.userId) ;
      console.log(this.usrBaja.id);
    });
  }

  ngOnInit(): void {
    if (Sesion.getInstancia(new Usuario()).getUsuario().id == 0) {
      Sesion.cerrarSesion();
      this.router.navigate(['']);
    } else {
      if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == Misc.tipoAdministrador) {
        this.primengConfig.ripple = true;
        //this.idUsuario = this.activatedRoute.snapshot.params.id;
        //this.usrBaja.id = this.idUsuario;
        if(!this.usrBaja.search()) {
          this.messageService.add({
            severity: 'success',
            summary: 'Información',
            detail: 'Almacenamiento correcto',
            life: 3000
          });
          //alert("No se encontró el usuario seleccionado");
          console.log('No se encontró el usuario seleccionado');
          this.redireccionaMenu();
        }
      } else {
        alert("Error, intenta acceder a una funcionalidad exclusiva para el Administrador");
        this.redireccionaMenu();
      }
    }
  }

  darBaja(): void {
    this.usrBaja.status = Misc.statusInactivo;
    if(this.usrBaja.update()) {
      this.messageService.add({
        severity: 'success',
        summary: 'Información',
        detail: 'Se ha actualizado la información del usuario',
        life: 3000
      });
      //alert("Se ha actualizado la información del usuario");
      this.redireccionaMenu();
    } else {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Ocurrió un error al intentar actualizar la información del usuario'});
      //alert("Ocurrió un error al intentar actualizar la información del usuario");
    }
  }

  redireccionaMenu(): void {
    //Pendiente el enrutamiento de los componentes
    this.router.navigate(['home/pages/listaPersonal']);
  }
}
