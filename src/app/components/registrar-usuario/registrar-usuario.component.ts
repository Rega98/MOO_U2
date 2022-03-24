import { Component, OnInit } from '@angular/core';
import { Administracion } from 'src/app/models/Administracion';
import { Medico } from 'src/app/models/Medico';
import { Recepcionista } from 'src/app/models/Recepcionista';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {
  tipoRegistro:string;
  usr:Administracion;
  nuevoMedico:Medico;
  nuevoRecepcionista:Recepcionista;
  constructor() { }

  ngOnInit(): void {
    this.tipoRegistro = 'Pendiente'//this.activatedRoute.snapshot.params.tipo;
    this.usr = Sesion.getInstancia(new Usuario()).getUsuario() as Administracion;
    if(this.usr.id != 0){
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
    }
  }

  muestraFormularioMedico(){
    //Debe mostrar el forumario de Medico
  }

  muestraFormularioRecepcionista(){
    //Debe mostrar el forumario de Recepcionista
  }

  guardaMedico(){
    if(this.nuevoMedico.save()){
      if(this.nuevoMedico.saveInfoMedico()){
        alert('Se ha guardado con exito el nuevo Usuario');
        this.redireccionar();
      } else{
        alert('Ocurrió un error al intentar guardar el los datos del Médico');
      }
    } else {
      alert('Ocurrió un error al intentar guardar el nuevo Usuario');
    }
    
  }

  guardaRecepcionista(){
    if(this.nuevoRecepcionista.save()){
      alert('Se ha guardado con exito el nuevo Usuario');
      this.redireccionar();
    } else {
      alert('Ocurrió un error al intentar guardar el nuevo Usuario');
    }
  }

  redireccionar(){
    //Debe redireccionar al Menu
    //this.router.navigate(['']);
  }

}
