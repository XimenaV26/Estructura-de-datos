export default class Tablero{
    constructor(){
        this.tablero = new Array(100)
    }
    dibujarTablero(){
        for(let i = 0 ; i <= 100; i++){
            this.tablero[i] = i

            //Escaleras
            switch (this.tablero[i]){
                case 2:
                    this.tablero[i] = 38
                    break
                case 7:
                    this.tablero[i] = 14
                    break
                case 8:
                    this.tablero[i] = 31
                    break
                case 15:
                    this.tablero[i] = 26
                    break
                case 21:
                    this.tablero[i] = 42
                    break
                case 28:
                    this.tablero[i] = 84
                    break
                case 36:
                    this.tablero[i] = 44
                    break
                case 51:
                    this.tablero[i] = 67
                    break
                case 71:
                    this.tablero[i] = 91
                    break
                case 78:
                    this.tablero[i] = 98
                    break
                case 87:
                    this.tablero[i] = 94
                    break
            }
            //Serpientes
            switch (this.tablero[i]){
                case 16:
                    this.tablero[i] = 6
                    break
                case 46:
                    this.tablero[i] = 25
                    break
                case 49:
                    this.tablero[i] = 11
                    break
                case 62:
                    this.tablero[i] = 19
                    break
                case 64:
                    this.tablero[i] = 60
                    break
                case 74:
                    this.tablero[i] = 54
                    break
                case 89:
                    this.tablero[i] = 68
                    break
                case 92:
                    this.tablero[i] = 88
                    break
                case 95:
                    this.tablero[i] = 75
                    break
                case 99:
                    this.tablero[i] = 80
                    break
                
            }
        }

        console.log(this.tablero)
    }

    casilla(posicion){
        return this.tablero[posicion]
    }
    
}
