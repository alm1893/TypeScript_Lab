import { Persona } from "./Persona"; 
import {Agenda} from "./Agenda";
import {Direccion} from "./Direccion";
import {Telefono} from "./Telefono";
import {Mail} from "./Mail";
let agenda= new Agenda();
let dirA= new Direccion("Azucena",1,8,"B",28730,"Buitrago de Lozoya", "Madrid");
let mailA= new Mail("Gmail","juanito@gmail.com");
let tlfA= new Telefono("movil",623578125);
let Pa= new Persona("Juan","Perez",22,"45783204M","18/02/2000","azul","Masculino",dirA,mailA,tlfA,"nada");
let dirB= new Direccion("Benito Perez Galdos",4,3,"A",36549,"Hobbiton","La comarca");
let mailB= new Mail("hotmail","Ananita@hotmail.com");
let tlfB= new Telefono("Fijo",953276416);
let Pb= new Persona("Ana","Gonzalez",42,"23157896M","4/02/1980","verde","Femenino",dirB,mailB,tlfB,"le gusta la salsa");
let dirC= new Direccion("Igualdad",5,0,"No tiene",41700,"Dos Hermanas","Sevilla");
let mailC= new Mail("yahoo","consuelo_45@yahoo.com");
let tlfC= new Telefono("movil",632178546);
let Pc= new Persona("Consuelo","Delgado",56,"76321486J","23/06/1966","Verde","Femenino",dirC,mailC,tlfC,"Profesora");

console.log("------------------Comienzo del programa------------------");

agenda.add(Pa);
agenda.add(Pb);
agenda.add(Pc);
agenda.show();

console.log("------------------");

let dirN= new Direccion("Calamidad",3,7,"C",45600,"Talavera de la Reina","Madrid");
let mailN= new Mail("Hotmail","JuanCambiaDeMail@Hotmail.com");
let tlfN= new Telefono("Fijo",917834028);
agenda.cambiar("5X",dirN,mailN,tlfN);
console.log("------------------");
agenda.cambiar("45783204M",dirN,mailN,tlfN);
console.log("------------------");
agenda.show();
console.log("------------------");
agenda.delete(Pb);
agenda.show();