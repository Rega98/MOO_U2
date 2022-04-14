import { Component, OnInit } from '@angular/core';
import { Administracion } from '../../models/Administracion';
import { Sesion } from '../../models/Sesion';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.scss']
})
export class ListaPersonalComponent implements OnInit {
  user: Administracion;
  userList:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
   this.user = Sesion.getInstancia(new Usuario()).getUsuario() as Administracion;
   if(this.user.tipo == 'Administracion') {
    this.userList = this.user.list();
   } else {
    alert("Error, intenta acceder a una funcionalidad exclusiva para la Administracion");
    this.redireccionaMenu();
   }
   this.userList = this.user.list();
   console.log(this.userList);
  }

  redireccionaMenu(){
    //Pendiente el enrutamiento de los componentes
    //this.router.navigate(['']);
  }

  User:any;

  irABajaPersonal(user){
    //Pendiente el enrutamiento de los componentes
    this.User = user.id;
    this.router.navigate(['home/pages/bajaPersonal/' + this.User]);
  }

}
