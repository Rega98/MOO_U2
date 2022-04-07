import * as usuarios from "../../assets/demo/hospital/usuarios.json";
import { IUsuario } from "../interfaces/IUsuario";

export class Data {
    static listaUsuarios:IUsuario[] = Data.cargarUsuarios();

    public static cargarUsuarios():IUsuario[] {
        let result = <IUsuario[]> JSON.parse(JSON.stringify(usuarios));
        let arrayUsr:IUsuario[] = [];
        for(let i=0; i<result.length; i++){
            arrayUsr.push(result[i]);
        }
        return arrayUsr;
    }
    
}