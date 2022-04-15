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
import { RegistrarConsultaFacade } from 'src/app/models/RegistrarConsultaFacade';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let cita:Cita = new Cita();
    cita.id = 1;
    cita.search();
    let medico = new Medico();
    medico.id = cita.medico;
    let nuevaConsulta:Consulta = new Medico().nuevaConsulta();
    nuevaConsulta.fecha = 'hoy';
    nuevaConsulta.sintomas = 'muchos sintomas';
    nuevaConsulta.peso = 1.0;
    nuevaConsulta.temperatura = 2.0;
    nuevaConsulta.frecuenciaCardiaca = 3.0;
    nuevaConsulta.estatura = 4.0;
    nuevaConsulta.descripcionAnalisisMedico = 'analisis';
    nuevaConsulta.diagnostico = 'diagnostico';
    nuevaConsulta.tratamiento = 'tratamiento';
    //nuevaConsulta.paciente.id = 1;
    nuevaConsulta.paciente.nombre = "paciente";
    nuevaConsulta.paciente.apellidoP = "apellido P";
    nuevaConsulta.paciente.apellidoM = "apellido M";
    nuevaConsulta.paciente.sexo = "Masculino";
    nuevaConsulta.paciente.fechaNac = "hoy";
    nuevaConsulta.paciente.tipoSangre = "A+";
    nuevaConsulta.paciente.alergias = "Ninguna";
    nuevaConsulta.paciente.telContacto = "telefono";
    nuevaConsulta.paciente.email = "email";
    
    let regConsulta:RegistrarConsultaFacade = new RegistrarConsultaFacade(nuevaConsulta, cita);
    //regConsulta.registrarConsulta(false);
    regConsulta.registrarConsulta(true);
    console.log(Data.listaCitas);
    console.log(Data.listaConsultas);
    console.log(Data.listaPacientes);
  }

}
