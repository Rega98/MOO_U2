import { Component, OnInit } from '@angular/core';
import { Administracion } from '../../models/Administracion';
import { Sesion } from '../../models/Sesion';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.scss']
})
export class ListaPersonalComponent implements OnInit {
  user: Administracion;
  userList:any
  constructor() { }

  ngOnInit(): void {
   this.user = Sesion.getInstancia(new Usuario()).getUsuario() as Administracion;
   if(this.user.tipo == 'Administracion') {
    this.userList = this.user.list();
   } else {
    alert("Error, intenta acceder a una funcionalidad exclusiva para la Administracion");
    this.redireccionaMenu();
   }
  }

  redireccionaMenu(){
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

  irABajaPersonal(){
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

}
