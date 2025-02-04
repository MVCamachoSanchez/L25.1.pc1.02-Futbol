export default class Cl_Futbol{
    constructor(){
        this.cntGanados = 0;
        this.cntTotal = 0;
    }

    procesarJuegos(juego){
        if(juego.resultado == 1){
            this.cntGanados++
        }

    // Contar el total de juegos ganados 
    this.cntTotal++
    }

    porcentaje(){
        return (this.cntGanados * 100)/this.cntTotal;
    }
}