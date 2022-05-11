import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/Sesion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    Sesion.cerrarSesion();
    this.router.navigate(['']);
  }

}
