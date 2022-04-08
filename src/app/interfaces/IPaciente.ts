import { Title } from '@angular/platform-browser';

export interface IPaciente {
    id: number,
    nombre: string,
	apellidoP: string,
    apellidoM: string,
    sexo: string,
    fechaNac: string,
    tipoSangre: string,
    alergias: string,
    telContacto: string,
    email: string
};