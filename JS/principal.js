/** Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es
perder, hacer un programa que indique el porcentaje de juegos que ganaste.
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1
la salida requerida presenta el siguiente formato:
Ganaste el 66.67% de los juegos */

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