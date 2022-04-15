import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import { Usuario } from '../../models/Usuario';
import { Sesion } from '../../models/Sesion';
import { Administracion } from '../../models/Administracion';
import { Medico } from '../../models/Medico';
import { Recepcionista } from '../../models/Recepcionista';
import { Router } from '@angular/router';
import { ISesionStarter } from 'src/app/interfaces/ISesionStarter';
import { SesionStarterProxy } from 'src/app/models/SesionStarterProxy';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit, OnDestroy {

  valCheck: string[] = ['remember'];

  password: string;
  
  config: AppConfig;
  
  subscription: Subscription;

  constructor(public configService: ConfigService,
    private rutas:Router){ }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  iniciarSesion(): void {
    let usr:Usuario = new Usuario();
    usr.nombreUsuario = ''; //Se espera utilizar los campos de la vista
    usr.contrasena = ''; //Se espera utilizar los campos de la vista
    let sesionStarter:ISesionStarter = new SesionStarterProxy();
    if(sesionStarter.iniciarSesion(usr)){
      this.redireccionaMenu();
    } else {
      alert("No se pudo inicar Sesion");
    }
  }

  /*
  iniciarSesion(): void {
    let usr:Usuario = new Usuario();
    usr.nombreUsuario = ''; //Se espera utilizar los campos de la vista
    usr.contrasena = ''; //Se espera utilizar los campos de la vista
    
    if(usr.validarUsuario){
      switch(usr.tipo){
        case 'Administracion':{
          let admin:Administracion = new Administracion();
          admin.id = usr.id;
          if(admin.search()){
            this.guardarSesion(admin);
            this.redireccionaMenu();
          }
          break; 
        }
        case 'Medico':{
          let medico:Medico = new Medico();
          medico.id = usr.id;
          if(medico.search()){
            this.guardarSesion(medico);
            this.redireccionaMenu();
          }
          break;
        }
        case 'Recepcionista':{
          let recepcion:Recepcionista = new Recepcionista();
          recepcion.id = usr.id;
          if(recepcion.search()){
            this.guardarSesion(recepcion);
            this.redireccionaMenu();
          }
          break;
        }
        default:{
          alert('No se reconoce el tipo de usuario');
        }
      }
    } else {
      alert('No se encontró el usuario especificado');
    }
  }

  guardarSesion(usr:Usuario) {
    Sesion.getInstancia(usr);
  }
  */
  redireccionaMenu(){
    //Pendiente el enrutamiento de los componentes
    this.rutas.navigate(['home']);
  }
}
