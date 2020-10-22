import Dado from "./dado.js"

export default class Jugador{
    constructor(colorFicha){
        this.colorFicha = colorFicha
        this.posicion = 0
        this.dado = new Dado()
    }

    avanza(){
        let avance = this.dado.lanzar()
        this.posicion = this.posicion + avance
        if(this.posicion > 100){
            this.posicion = 100
        }

        console.log(`La ficha ${this.colorFicha} va en la casilla ${this.posicion}.`)
    }

    posicion(){
        return this.posicion
    }

}
