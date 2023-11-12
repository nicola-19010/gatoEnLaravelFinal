class Tablero {
    constructor() {
        this.celdas = new Array(9).fill(null);
    }

    realizarMovimiento(simbolo, indice) {
        if (!this.celdas[indice]) {
            this.celdas[indice] = simbolo;
            return true;
        }
        return false;
    }

    hayGanador(simbolo) {
        const combinacionesGanadoras = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return combinacionesGanadoras.some(combinacion => {
            return combinacion.every(indice => this.celdas[indice] === simbolo);
        });
    }

    esEmpate() {
        return this.celdas.every(celda => celda !== null);
    }

    reiniciar() {
        this.celdas.fill(null);
    }
}
