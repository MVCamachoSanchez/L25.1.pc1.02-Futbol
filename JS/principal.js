import Cl_Futbol from "./Cl_Futbol.js";
import Cl_Juego from "./Cl_Juego.js";

let juego1 = new Cl_Juego(1);
let juego2 = new Cl_Juego(1);
let juego3 = new Cl_Juego(0);
let juego4 = new Cl_Juego(1);
let juego5 = new Cl_Juego(0);
let juego6 = new Cl_Juego(1);
let juego7 = new Cl_Juego(1);

let futbol = new Cl_Futbol();

futbol.procesarJuegos(juego1);
futbol.procesarJuegos(juego2);
futbol.procesarJuegos(juego3);
futbol.procesarJuegos(juego4);
futbol.procesarJuegos(juego5);
futbol.procesarJuegos(juego6);
futbol.procesarJuegos(juego7);


let salida = document.getElementById("salida")
salida.innerHTML = `
Ganaste el: ${futbol.porcentaje().toFixed(2)}% de los juegos`