import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import {Persona} from "./Persona";
import { Telefono } from "./Telefono";
export class Agenda {
    private _contactos: Persona[];
    constructor(){
        this._contactos= new Array<Persona>();
    }
    public add(pers:Persona) {
        this._contactos.push(pers);
    }
    public delete(pers:Persona) {
        let index= this.buscar(pers.dni);
        this._contactos.splice(index,1);
    }
    public cambiar(DNI:string,DIR:Direccion,MAIL:Mail,TLF:Telefono) {
        let index= this.buscar(DNI);
        console.log("El indice es " + index);

        if(index == -1){
            console.log("La persona que busca no existe en esta agenda");
        } else {
            this._contactos[index].direccion= DIR;
            this._contactos[index].mail= MAIL;
            this._contactos[index].telefono= TLF;
        }
    }
    public show(){
        for( let pers of this._contactos) {
            console.log (pers.LiteralP());
        }
    }
    public buscar(DNI:string):number{
        let index = 0;
        let posi = -1;
        for( let pers of this._contactos){
            if(pers.dni === DNI){
                posi = index;
            }
            index = index + 1;
        }
        return posi;
    }
}


