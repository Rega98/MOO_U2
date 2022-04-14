import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { IPaciente } from 'src/app/interfaces/IPaciente';
import { Paciente } from 'src/app/models/Paciente';
import { Usuario } from 'src/app/models/Usuario';
import { Medico } from 'src/app/models/Medico';
import { Data } from 'src/app/models/Data';
import { Cita } from 'src/app/models/Cita';
import { ICita } from 'src/app/interfaces/ICita';
import { Consulta } from 'src/app/models/Consulta';
import { IConsulta } from 'src/app/interfaces/IConsulta';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let paciente = new Paciente();
    paciente.id = 3;
    let historial:IConsulta[] = paciente.listHistorial();
    console.log(historial);

    //List Test
    //let arreglo:IConsulta[] = consulta.list();
    //for(let obj of arreglo){
    //  console.log(obj);
    //}
    //console.log(arreglo);

    //Search Test
    //consulta.id = 3;
    //consulta.search();
    //console.log(consulta);

    //Save Test
    //console.log(paciente.list());
    //consulta.save();
    //console.log(consulta.list());

    //Update Test
    //paciente.save();
    //console.log(paciente.list());
    //consulta.fecha = 'nueva fecha';
    //consulta.sintomas = 'nuevo Paciente';
    //consulta.peso = 10;
    //consulta.temperatura = 10;
    //consulta.frecuenciaCardiaca = 10;
    //consulta.estatura = 10;
    //consulta.descripcionAnalisisMedico = 'observaciones';
    //consulta.diagnostico = 'observaciones';
    //consulta.tratamiento = 'Pendiente';
    //consulta.paciente.id = 1;
    //consulta.medico.id = 3;
    //consulta.update();
    //console.log(consulta.list());

    //Delete Test
    //paciente.save();
    //consulta.delete();
    //console.log(consulta.list());
    //console.log(Data.listaInfoMedicos);
    
    //Login test
    //usuario.nombreUsuario = "UsuarioAdmin";
    //usuario.contrasena = "Abc123";
    //if(usuario.validarUsuario()){
    //  console.log(usuario);
    //}
  }

}
