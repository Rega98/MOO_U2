import { Title } from '@angular/platform-browser';
import { Sesion } from '../models/Sesion';
import { Usuario } from '../models/Usuario';

export interface ISesionStarter {
    iniciarSesion(usuario:Usuario):boolean;
};