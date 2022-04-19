import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Administracion } from 'src/app/models/Administracion';
import { Medico } from 'src/app/models/Medico';
import { Misc } from 'src/app/models/Misc';
import { Recepcionista } from 'src/app/models/Recepcionista';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import { IUsuario } from 'src/app/interfaces/IUsuario';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss'],
  providers: [MessageService]
})
export class RegistrarUsuarioComponent implements OnInit {
  fechaNacimiento:Date;
  esMedico:boolean = false;
  horaInicio:Date;
  horaFin:Date;
  dias:string[] = [];
  tarifaConsulta:number = 0.00;
  camposUsuario:IUsuario = {
    id: 0,
    nombreUsuario: '',
    contrasena: '',
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    fechaNac: '',
    email: '',
    telCelular: '',
    telFijo: '',
    tipo: '',
    status: 1
  }
  //tipoRegistro:string;
  user:Administracion;
  //nuevoMedico:Medico;
  //nuevoRecepcionista:Recepcionista;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private messageService: MessageService, private primengConfig: PrimeNGConfig) { 
    this.activatedRoute.params.subscribe((param: Params) =>{
      if(''+param.tipo == Misc.tipoMedico){
        this.esMedico = true;
      }
    });
  }

  ngOnInit(): void {
    //this.tipoRegistro = 'Pendiente'//this.activatedRoute.snapshot.params.tipo;
    //this.usr = Sesion.getInstancia(new Usuario()).getUsuario() as Administracion;
    if (Sesion.getInstancia(new Usuario()).getUsuario().id == 0) {
      Sesion.cerrarSesion();
      this.router.navigate(['']);
    } else {
      this.primengConfig.ripple = true;
      if (Sesion.getInstancia(new Usuario()).getUsuario().tipo == Misc.tipoAdministrador) {
        this.user = Sesion.getInstancia(new Usuario()).getUsuario() as Administracion;
      } else {
        alert("Error, intenta acceder a una funcionalidad exclusiva para el Administrador");
        this.redireccionaMenu();
      }
    }
    /*if(this.usr.id != 0){
      switch(this.tipoRegistro){
        case 'Medico':{
          this.nuevoMedico = this.usr.getNuevoMedico();
          this.muestraFormularioMedico();
          break;
        }
        case 'Recepcionista':{
          this.nuevoRecepcionista = this.usr.getNuevoRecepcionista();
          this.muestraFormularioRecepcionista();
          break;
        }
        default:{
          alert('No se especificó Nungun tipo de Usuario');
          this.redireccionar();
        }
      }
      
    }else{
      alert('No se ha iniciado Sesion');
    }*/
  }

  guardaMedico(){
    let nuevoMedico:Medico = this.user.getNuevoMedico();
    nuevoMedico.nombreUsuario = this.camposUsuario.nombreUsuario;
    nuevoMedico.contrasena = this.camposUsuario.contrasena;
    nuevoMedico.nombre = this.camposUsuario.nombre;
    nuevoMedico.apellidoP = this.camposUsuario.apellidoP;
    nuevoMedico.apellidoM = this.camposUsuario.apellidoM;
    nuevoMedico.fechaNac = Misc.formatearFecha(this.fechaNacimiento.getDate(), 
                          this.fechaNacimiento.getMonth()+1, this.fechaNacimiento.getFullYear());
    nuevoMedico.email = this.camposUsuario.email;
    nuevoMedico.telCelular = this.camposUsuario.telCelular;
    nuevoMedico.telFijo = this.camposUsuario.telFijo;
    nuevoMedico.tipo = Misc.tipoMedico;
    nuevoMedico.status = Misc.statusActivo;
    nuevoMedico.horarioAtencion = Misc.formatearHora(this.horaInicio.getHours(), this.horaInicio.getMinutes()) 
                                  + ' - ' + Misc.formatearHora(this.horaFin.getHours(), this.horaFin.getMinutes());
    nuevoMedico.diasAtencion = Misc.formatearDias(this.dias);
    nuevoMedico.tarifaConsulta = this.tarifaConsulta;
    //console.log(nuevoMedico);
    //console.log(Misc.formateaArrayDias(nuevoMedico.diasAtencion));
    if(nuevoMedico.save()){
      if(nuevoMedico.saveInfoMedico()){
        console.log(nuevoMedico);
        alert('Se ha guardado con exito el nuevo Usuario');
        this.redireccionaMenu();
      } else{
        alert('Ocurrió un error al intentar guardar el los datos del Médico');
      }
    } else {
      alert('Ocurrió un error al intentar guardar el nuevo Usuario');
    }
  }

  guardaRecepcionista(){
    let nuevoRecepcionista:Recepcionista = this.user.getNuevoRecepcionista();
    nuevoRecepcionista.nombreUsuario = this.camposUsuario.nombreUsuario;
    nuevoRecepcionista.contrasena = this.camposUsuario.contrasena;
    nuevoRecepcionista.nombre = this.camposUsuario.nombre;
    nuevoRecepcionista.apellidoP = this.camposUsuario.apellidoP;
    nuevoRecepcionista.apellidoM = this.camposUsuario.apellidoM;
    nuevoRecepcionista.fechaNac = Misc.formatearFecha(this.fechaNacimiento.getDate(), 
                                  this.fechaNacimiento.getMonth()+1, this.fechaNacimiento.getFullYear());
    nuevoRecepcionista.email = this.camposUsuario.email;
    nuevoRecepcionista.telCelular = this.camposUsuario.telCelular;
    nuevoRecepcionista.telFijo = this.camposUsuario.telFijo;
    nuevoRecepcionista.tipo = Misc.tipoRecepcionista;
    nuevoRecepcionista.status = Misc.statusActivo;
    //console.log(nuevoRecepcionista);
    if(nuevoRecepcionista.save()){
      alert('Se ha guardado con exito el nuevo Usuario');
      this.redireccionaMenu();
    } else {
      alert('Ocurrió un error al intentar guardar el nuevo Usuario');
    }
  }

  guardarUsuario(){
    if(this.esMedico){
      this.guardaMedico();
    } else {
      this.guardaRecepcionista();
    }
  }

  redireccionaMenu(){
    //Debe redireccionar al Menu
    this.router.navigate(['home/pages/listaPersonal']);
  }

}
