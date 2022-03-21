"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
class Agenda {
    constructor() {
        this._contactos = new Array();
    }
    add(pers) {
        this._contactos.push(pers);
    }
    delete(pers) {
        let index = this.buscar(pers.dni);
        this._contactos.splice(index, 1);
    }
    cambiar(DNI, DIR, MAIL, TLF) {
        let index = this.buscar(DNI);
        console.log("El indice es " + index);
        if (index == -1) {
            console.log("La persona que busca no existe en esta agenda");
        }
        else {
            this._contactos[index].direccion = DIR;
            this._contactos[index].mail = MAIL;
            this._contactos[index].telefono = TLF;
        }
    }
    show() {
        for (let pers of this._contactos) {
            console.log(pers.LiteralP());
        }
    }
    buscar(DNI) {
        let index = 0;
        let posi = -1;
        for (let pers of this._contactos) {
            if (pers.dni === DNI) {
                posi = index;
            }
            index = index + 1;
        }
        return posi;
    }
}
exports.Agenda = Agenda;
