import { Title } from '@angular/platform-browser';

export interface IConsulta {
    id: number,
    fecha: string,
	sintomas: string,
    peso: number,
    temperatura: number,
    frecuenciaCardiaca: number,
    estatura: number,
    descripcionAnalisisMedico: string,
    diagnostico: string,
    tratamiento: string,
    paciente: number,
    medico: number
};