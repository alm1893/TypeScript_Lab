"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, cp, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    set calle(value) {
        this._calle = (value);
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = (value);
    }
    get piso() {
        return this._piso;
    }
    set piso(value) {
        this._piso = (value);
    }
    get letra() {
        return this._letra;
    }
    set letra(value) {
        this._letra = (value);
    }
    get cp() {
        return this._cp;
    }
    set cp(value) {
        this._cp = (value);
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(value) {
        this._poblacion = (value);
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(value) {
        this._provincia = (value);
    }
    Literal() {
        return this._calle + ", " + this._numero + ", " + this._piso + ", " + this._letra + ", " + this._cp + ", " + this._poblacion + ", " + this._provincia;
    }
}
exports.Direccion = Direccion;
