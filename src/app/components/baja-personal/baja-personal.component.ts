import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-baja-personal',
  templateUrl: './baja-personal.component.html',
  styleUrls: ['./baja-personal.component.scss']
})
export class BajaPersonalComponent implements OnInit {
  idUsuario:number;
  usrBaja:Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
    this.idUsuario = 0;//this.activatedRoute.snapshot.params.id;
    this.usrBaja.id = this.idUsuario;
    if(this.usrBaja.search()) {
      //Algo deberíamos hacer aqí
    } else {
      alert("No se encontró el usuario seleccionado");
    }
  }

  darBaja(status:number): void {
    this.usrBaja.status = status;
    if(this.usrBaja.update()) {
      alert("Se ha actualizado la información del usuario");
      this.redireccionaMenu();
    } else {
      alert("Ocurrió un error al intentar actualizar la información del usuario");
    }
  }

  redireccionaMenu(): void {
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

}
