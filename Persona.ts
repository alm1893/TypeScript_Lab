import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";
export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: string;
    private _colorFav: string;
    private _sexo: string;
    private _direccion: Direccion;
    private _mail: Mail;
    private _telefono: Telefono;
    private _notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: string, colorFav: string, sexo: string, direccion: Direccion, mail: Mail, telefono: Telefono, notas: string) {
        this._nombre= nombre;
        this._apellidos= apellidos;
        this._edad= edad;
        this._dni= dni;
        this._cumpleaños= cumpleaños;
        this._colorFav= colorFav;
        this._sexo= sexo;
        this._direccion= direccion;
        this._mail= mail;
        this._telefono= telefono;
        this._notas= notas;
    }
    public get nombre() : string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre= value;
    }
    public get apellidos() : string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos= value;
    }
    public get edad() : number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad= value;
    }
    public get dni() : string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni= value;
    }
    public get cumpleaños() : string {
        return this._cumpleaños;
    }
    public set cumpleaños(value: string) {
        this._cumpleaños= value;
    }
    public get colorFav() : string {
        return this._colorFav;
    }
    public set colorFav(value: string) {
        this._colorFav= value;
    }
    public get sexo() : string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo= value;
    }
    public get direccion() : Direccion {
        return this._direccion;
    }
    public set direccion(value: Direccion) {
        this._direccion= value;
    }
    public get mail() : Mail {
        return this._mail;
    }
    public set mail(value: Mail) {
        this._mail= value;
    }
    public get telefono() : Telefono {
        return this._telefono;
    }
    public set telefono(value: Telefono) {
        this._telefono= value;
    }
    public get notas() : string {
        return this._notas;
    }
    public set notas(value: string) {
        this._notas= value;
    }
    public LiteralP(): string{
        return this._nombre+" "+ this._apellidos+", "+ this._edad+", "+ this._dni+", "+ this._cumpleaños+", "+ this._colorFav+", "+ this._sexo+", "+ this._direccion.Literal()+", "+ this._mail.Literal()+", "+ this._telefono.Literal()+", "+ this._notas;
    }
}

