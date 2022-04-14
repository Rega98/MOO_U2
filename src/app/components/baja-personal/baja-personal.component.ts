import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Router,ActivatedRoute, Params } from '@angular/router';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-baja-personal',
  templateUrl: './baja-personal.component.html',
  styleUrls: ['./baja-personal.component.scss'],
  providers: [MessageService]
})
export class BajaPersonalComponent implements OnInit {
  idUsuario:number;
  header:any;
  usrBaja:Usuario = new Usuario();
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private messageService: MessageService, private primengConfig: PrimeNGConfig) { 
    this.activatedRoute.params.subscribe((param: Params) =>{
      this.idUsuario = parseInt(param.user) ;
      console.log(this.idUsuario);
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    //this.idUsuario = this.activatedRoute.snapshot.params.id;
    this.usrBaja.id = this.idUsuario;
    if(this.usrBaja.search()) {
      //Algo deberíamos hacer aqí
      console.log(this.usrBaja.search());
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Información',
        detail: 'Almacenamiento correcto',
        life: 3000
      });
      //alert("No se encontró el usuario seleccionado");
      console.log('No se encontró el usuario seleccionado');
    }

    this.header = 'Personal tipo: Administrador'
  }

  darBaja(status:number): void {
    this.usrBaja.status = status;
    if(this.usrBaja.update()) {
      this.messageService.add({
        severity: 'success',
        summary: 'Información',
        detail: 'Se ha actualizado la información del usuario',
        life: 3000
      });

      //alert("Se ha actualizado la información del usuario");
      //this.redireccionaMenu();
    } else {

      this.messageService.add({severity:'error', summary: 'Error', detail: 'Ocurrió un error al intentar actualizar la información del usuario'});
      //alert("Ocurrió un error al intentar actualizar la información del usuario");
    }
  }

  redireccionaMenu(): void {
    //Pendiente el enrutamiento de los componentes
    this.router.navigate(['home/pages/listaPersonal']);
  }

  cancelar(){
    this.router.navigate(['home/pages/listaPersonal']);
  }

}
