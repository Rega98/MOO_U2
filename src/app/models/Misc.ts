export class Misc {
    
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