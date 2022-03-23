"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFav, sexo, direccion, mail, telefono, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFav = colorFav;
        this._sexo = sexo;
        this._direccion = direccion;
        this._mail = mail;
        this._telefono = telefono;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get dni() {
        return this._dni;
    }
    set dni(value) {
        this._dni = value;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set cumpleaños(value) {
        this._cumpleaños = value;
    }
    get colorFav() {
        return this._colorFav;
    }
    set colorFav(value) {
        this._colorFav = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(value) {
        this._direccion = value;
    }
    get mail() {
        return this._mail;
    }
    set mail(value) {
        this._mail = value;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(value) {
        this._telefono = value;
    }
    get notas() {
        return this._notas;
    }
    set notas(value) {
        this._notas = value;
    }
    LiteralP() {
        return this._nombre + " " + this._apellidos + ", " + this._edad + ", " + this._dni + ", " + this._cumpleaños + ", " + this._colorFav + ", " + this._sexo + ", " + this._direccion.Literal() + ", " + this._mail.Literal() + ", " + this._telefono.Literal() + ", " + this._notas;
    }
}
exports.Persona = Persona;
