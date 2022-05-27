import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { Router, ActivatedRoute, Params } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfMake'
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Medico } from '../../models/Medico';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.scss']
})
export class HistorialPacienteComponent implements OnInit {
  consultas: any;
  paciente: Paciente;
  Medico:Medico;
  modal1: boolean = false;

  descripcionAnalisisMedico: any;
  diagnostico: any;
  estatura: any;
  fecha: any;
  frecuanciaCardiaca: any;
  id: any;
  medico: any;
  pacientes: any;
  peso: any;
  sintomas: any;
  temperatura: any;
  tratamiento: any;


  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    this.paciente = new Paciente();
    this.activateRoute.params.subscribe((param: Params) => {
      this.paciente.id = parseInt(param.pacienteId);
      console.log(this.paciente.id);
    });
  }

  ngOnInit(): void {

    //this.paciente.id = 1;//this.activatedRoute.snapshot.params.id;
    if (this.paciente.search()) {
      this.consultas = this.paciente.listHistorial();
      console.log(this.consultas);
    } else {
      alert("No se econtró el Paciente seleccionado");
      this.redireccionaMenu();
    }
  }

  redireccionaMenu(): void {
    //Pendiente el enrutamiento de los componentes
    this.router.navigate(['home/pages/listaPacientes']);
  }

  verRegistro(paciente) {
    this.modal1 = true;
    this.descripcionAnalisisMedico = paciente.descripcionAnalisisMedico;
    this.diagnostico = paciente.diagnostico;
    this.estatura = paciente.estatura;
    this.fecha = paciente.fecha;
    this.frecuanciaCardiaca = paciente.frecuanciaCardiaca;
    this.id = paciente.id;
    this.medico = paciente.medico;
    this.pacientes = paciente.paciente;
    this.peso = paciente.peso;
    this.sintomas = paciente.sintomas;
    this.temperatura = paciente.temperatura;
    this.tratamiento = paciente.tratamiento;
    
  }


  imprimirRecibo(): void {
    const pdfxd: any = {
      content: [
        {
          text: 'Id Consulta: ' + this.id
        },
        {
          text: 'Fecha de Consulta: ' + this.fecha
        },
        {
          text: 'Paciente: ' + this.pacientes
        },
        {
          text: 'Peso: ' + this.peso
        },
        {
          text: 'Estatura: ' + this.estatura
        },
        {
          text: 'Frecuencia Cardiaca: ' + this.frecuanciaCardiaca
        },
        {
          text: 'Temperatura: ' + this.temperatura
        },
        {
          text: 'Sintomas: ' + this.sintomas
        },
        {
          text: 'Medico: ' + this.medico
        },
        {
          text: 'Analisis Practicados: ' + this.descripcionAnalisisMedico
        },
        {
          text: 'Diagnostico: ' + this.diagnostico
        },
        {
          text: 'Tratamiento: ' + this.tratamiento
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfxd);
    pdf.open();
  }

  cerrar(){
    this.modal1 = false;
  }

}

