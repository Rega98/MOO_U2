import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let usuario = new Usuario();
    //let arreglo:IUsuario[] = usuario.list();
    //for(let obj of arreglo){
    //  console.log(obj);
    //}
    //console.log(arreglo);
    //usuario.id = 3;
    //usuario.search();
    //console.log(usuario);
    //console.log(usuario.list());
    //usuario.save();
    //console.log(usuario.list());
    //usuario.nombreUsuario = "NuevoUsuario";
    //usuario.contrasena = "1234";
    //usuario.nombre = "Nuevo";
    //usuario.apellidoP = "Usuario";
    //usuario.apellidoM = "7";
    //usuario.fechaNac = "Algun dia";
    //usuario.email = "Algun email";
    //usuario.telCelular = "Algun Cel";
    //usuario.telFijo = "Algun Tel";
    //usuario.tipo = "Administrador";
    //usuario.status = 1;
    //usuario.update();
    //console.log(usuario.list());
    //usuario.delete();
    //console.log(usuario.list());
    usuario.nombreUsuario = "UsuarioAdmin";
    usuario.contrasena = "Abc123";
    if(usuario.validarUsuario()){
      console.log(usuario);
    }
  }

}
