import { Component, OnInit } from '@angular/core';
import { Administracion } from '../../models/Administracion';
import { Sesion } from '../../models/Sesion';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';
import { Misc } from 'src/app/models/Misc';

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
    if (Sesion.getInstancia(new Usuario()).getUsuario().id == 0) {
      Sesion.cerrarSesion();
      this.router.navigate(['']);
    } else {
      if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == Misc.tipoAdministrador) {
        this.user = Sesion.getInstancia(new Usuario()).getUsuario() as Administracion;
        this.userList = this.user.list();
      } else {
        alert("Error, intenta acceder a una funcionalidad exclusiva para el Administrador");
        this.redireccionaMenu();
      }
    }
  }

  redireccionaMenu(){
    //Pendiente el enrutamiento de los componentes
    this.router.navigate(['home']);
  }

  User:any;

  irABajaPersonal(user){
    //Pendiente el enrutamiento de los componentes
    this.User = user.id;
    this.router.navigate(['home/pages/bajaPersonal/' + this.User]);
  }

}
