export class Misc {
    
    static tipoAdministrador:string = 'Administrador';
    static tipoRecepcionista:string = 'Recepcionista';
    static tipoMedico:string = 'Medico'

    static statusPendiente:string = 'Pendiente';
    static statusAtendida:string = 'Atendida';
    static statusCancelada:string = 'Cancelada';

    static statusActivo:number = 1;
    static statusInactivo:number = 0;
    
    static formatearDias(dias:string[]):string {
        let listaDias = '';
        for(let i=0; i<dias.length; i++){
            if(i == dias.length-1){
                listaDias += dias[i];
            } else {
                listaDias += dias[i] + ', ';
            }
        }
        return listaDias;
    }

    static formateaArrayDias(dias:string):string[] {
        let arrayDias:string[] = dias.split(', ');
        return arrayDias;
    }
    
    static formatearFecha(dia:number, mes:number, anio:number):string {
        let fecha = '';
        fecha += anio + '-';
        if(mes < 10){
            fecha += '0'+mes + '-';
        } else {
            fecha += mes + '-';
        }
        if(dia < 10){
            fecha += '0'+dia;
        } else {
            fecha += dia;
        }
        return fecha;
    }

    static formatearHora(hora:number, minutos:number):string {
        let horario = '';
        let horaF:number;
        let time:string = ' a.m';
        if(hora > 11) {
            time = ' p.m';
        }
        if(hora > 12){
            horaF = hora - 12;
        } else {
            horaF = hora;
        }
        if(horaF < 10) {
            horario += '0' + horaF + ':';
        } else {
            horario += horaF + ':';
        }
        if(minutos < 10) {
            horario += '0' + minutos;
        } else {
            horario += minutos;
        }
        horario += time;
        return horario;
    }

}