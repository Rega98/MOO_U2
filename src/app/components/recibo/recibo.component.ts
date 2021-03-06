import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Medico } from 'src/app/models/Medico';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Misc } from 'src/app/models/Misc';
import { Sesion } from 'src/app/models/Sesion';
import { Usuario } from 'src/app/models/Usuario';
import pdfMake from 'pdfmake/build/pdfMake'
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.scss']
})
export class ReciboComponent implements OnInit {
  cita: Cita;
  medico: Medico;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.cita = new Cita();
    this.activatedRoute.params.subscribe((param: Params) => {
      this.cita.id = parseInt(param.citaId)
      console.log(this.cita.id);
    });
  }

  ngOnInit(): void {
    if (Sesion.getInstancia(new Usuario()).getUsuario().id == 0) {
      Sesion.cerrarSesion();
      this.router.navigate(['']);
    } else {
      if (Sesion.getInstancia(new Usuario()).getUsuario().tipo != Misc.tipoAdministrador) {
        //this.primengConfig.ripple = true;
        if (this.cita.search()) {
          console.log(this.cita);
          this.medico = new Medico();
          this.medico.id = this.cita.medico;
          console.log(this.medico);
          if (!this.medico.search()) {
            alert("No se encontró la información del Médico");
          }
          this.medico.searchInfoMedico();
          //this.medico.tarifaConsulta
          //console.log(this.medico.tarifaConsulta);
        } else {
          alert("No se encontró la información de la Cita");
          this.redireccionaMenu();
        }
      } else {
        alert("Esta acción solo está permitida para usuarios del tipo Medico o Recepcionista");
      }
    }
  }

  redireccionaMenu(): void {
    this.router.navigate(['home/pages/citas']);
  }

  imprimirRecibo(): void {
    const pdfxd: any = {
      content: [
        {
          text: 'ID de la cita: ' + this.cita.id
        },
        {
          text: 'Fecha de la cita: ' + this.cita.fechaRegistro
        },
        {
          text: 'Medico: ' + this.medico.nombre + ' ' + this.medico.apellidoP + ' ' + this.medico.apellidoM
        },
        {
          text: 'Monto total: ' + this.medico.tarifaConsulta
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfxd);
    pdf.open();
  }

}
