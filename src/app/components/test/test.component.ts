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
    let arreglo:Usuario[] = usuario.list();
    console.log(arreglo);
  }

}
