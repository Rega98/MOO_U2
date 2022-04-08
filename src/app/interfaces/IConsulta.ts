import { Title } from '@angular/platform-browser';

export interface IConsulta {
    id: number,
    fecha: string,
	sintomas: string,
    peso: string,
    temperatura: string,
    frecuanciaCardiaca: string,
    estatura: string,
    descripcionAnalisisMedico: string,
    diagnostico: string,
    tratamiento: string,
    paciente: number,
    medico: number
};