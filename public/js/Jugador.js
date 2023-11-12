class Jugador {
    constructor(simbolo, nombre) {
        this.simbolo = simbolo;
        this.nombre = nombre || 'Jugador';
    }

    getNombre() {
        return this.nombre;
    }
}
