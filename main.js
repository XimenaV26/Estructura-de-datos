import Dado from "./dado.js"
import Tablero from "./tablero.js"
import Jugador from "./jugador.js"

export default class Juego{
    constructor(){

    }

    iniciarJuego(){
        let tablero1 = new Tablero ()
        tablero1.dibujarTablero()

        let dado = new Dado ()

        let jugador1 = new Jugador ("azul")
        let jugador2 = new Jugador ("verde")
        let i = 0

        while(i < 100){
            jugador1.avanza()
            if(jugador1.posicion >= 100){
                console.log(`El jugador ${jugador1.colorFicha} ganó!!`)
                break
            }
            jugador1.posicion = tablero1.casilla(jugador1.posicion)

            jugador2.avanza()     

            if(jugador2.posicion >= 100){
                console.log(`El jugador ${jugador2.colorFicha} ganó!!`)
                break
            }
            jugador2.posicion = tablero1.casilla(jugador2.posicion)
            
            i++
        }

    }
}

let juego = new Juego()
juego.iniciarJuego()
