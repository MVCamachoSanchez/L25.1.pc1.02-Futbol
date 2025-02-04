export default class Cl_Juego{
    constructor(resultado){
        this.resultado = resultado;
    }

    set resultado(resul){
        this._resultado = resul;
    }

    get resultado(){
        return this._resultado;
    }
}