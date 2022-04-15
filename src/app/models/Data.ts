import * as usuarios from "../../assets/demo/hospital/usuarios.json";
import * as citas from "../../assets/demo/hospital/citas.json";
import * as pacientes from "../../assets/demo/hospital/pacientes.json";
import * as consultas from "../../assets/demo/hospital/consultas.json";
import * as infoMedicos from "../../assets/demo/hospital/info-medico.json";
import { IUsuario } from "../interfaces/IUsuario";
import { ICita } from "../interfaces/ICita";
import { IPaciente } from "../interfaces/IPaciente";
import { IConsulta } from "../interfaces/IConsulta";
import { IMedico } from "../interfaces/IMedico";

export class Data {
    static listaUsuarios:IUsuario[] = Data.cargarUsuarios();
    static listaCitas:ICita[] = Data.cargarCitas();
    static listaPacientes:IPaciente[] = Data.cargarPacientes();
    static listaConsultas:IConsulta[] = Data.cargarConsultas();
    static listaInfoMedicos:IMedico[] = Data.cargarInfoMedicos();

    public static cargarUsuarios():IUsuario[] {
        let result = <IUsuario[]> JSON.parse(JSON.stringify(usuarios));
        let arrayUsr:IUsuario[] = [];
        for(let i=0; i<result.length; i++){
            arrayUsr.push(result[i]);
        }
        return arrayUsr;
    }

    public static cargarCitas():ICita[] {
        let result = <ICita[]> JSON.parse(JSON.stringify(citas));
        let arrayCitas:ICita[] = [];
        for(let i=0; i<result.length; i++){
            arrayCitas.push(result[i]);
        }
        return arrayCitas;
    }

    public static cargarPacientes():IPaciente[] {
        let result = <IPaciente[]> JSON.parse(JSON.stringify(pacientes));
        let arrayPacientes:IPaciente[] = [];
        for(let i=0; i<result.length; i++){
            arrayPacientes.push(result[i]);
        }
        return arrayPacientes;
    }

    public static cargarConsultas():IConsulta[] {
        let result = <IConsulta[]> JSON.parse(JSON.stringify(consultas));
        let arrayConsultas:IConsulta[] = [];
        for(let i=0; i<result.length; i++){
            arrayConsultas.push(result[i]);
        }
        return arrayConsultas;
    }

    public static cargarInfoMedicos():IMedico[] {
        let result = <IMedico[]> JSON.parse(JSON.stringify(infoMedicos));
        let arrayInfoMedicos:IMedico[] = [];
        for(let i=0; i<result.length; i++){
            arrayInfoMedicos.push(result[i]);
        }
        return arrayInfoMedicos;
    }
    
}