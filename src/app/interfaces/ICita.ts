import { Title } from '@angular/platform-browser';

export interface ICita {
    id: number,
    fechaRegistro: string,
    nombrePaciente: string,
    fechaAtencion: string,
    horaAtencon: string,
    observaciones: string,
    status: string,
    medicoAdignado: number
};