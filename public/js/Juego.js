class Juego {
    constructor() {
        this.jugadorX = new Jugador('✖️', 'Jugador1');
        this.jugadorO = new Jugador('🔴', 'Jugador2');
        this.tablero = new Tablero();
        this.jugadorActual = this.jugadorX;
        this.juegoTerminado = false;
        this.botones = document.querySelectorAll('.celda');
    }

    manejarClicCelda(indiceCelda) {
        if (this.esCeldaValida(indiceCelda)) {
            this.realizarJugada(indiceCelda);
            this.verificarEstadoJuego();
        }
    }

    esCeldaValida(indiceCelda) {
        return !this.juegoTerminado && !this.tablero.celdas[indiceCelda];
    }

    realizarJugada(indiceCelda) {
        if (this.tablero.realizarMovimiento(this.jugadorActual.simbolo, indiceCelda)) {
            this.botones[indiceCelda].textContent = this.jugadorActual.simbolo;
        }
    }

    verificarEstadoJuego() {
        if (this.tablero.hayGanador(this.jugadorActual.simbolo)) {
            this.finalizarJuego(`¡Jugador ${this.jugadorActual.simbolo} gana!`,true);
        } else if (this.tablero.esEmpate()) {
            this.finalizarJuego("¡Empate!",false);
        } else {
            this.cambiarJugador();
        }
    }

    finalizarJuego(mensaje,condicion) {
        alert(mensaje);
        if (condicion) {
            this.registrarGanador(this.jugadorActual);
        }
        this.juegoTerminado = true;
    }

    cambiarJugador() {
        this.jugadorActual = this.jugadorActual === this.jugadorX ? this.jugadorO : this.jugadorX;
    }

    reiniciarJuego() {
        this.tablero.reiniciar();
        this.jugadorActual = this.jugadorX;
        this.juegoTerminado = false;
        this.botones.forEach(boton => boton.textContent = '');
    }

    //registrarGanador() {
        //var data = {
        //    name: this.jugadorActual.getNombre() 
        //};

        //var xhr = new XMLHttpRequest();
        //xhr.open("POST", "/api/actualizar-puntuacion", true);
        //xhr.setRequestHeader("Content-Type", "application/json");

        //xhr.send(JSON.stringify(data));
    //}

    
    
    // registrarGanador(nombreJugador) {
    //     fetch('/api/registrar-ganador', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ nombre: nombreJugador})
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // }

    registrarGanador() {
        var data = {
            nombre: this.jugadorActual.getNombre() 
        };
    
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/registrar-ganador", true);
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
    
        xhr.send(JSON.stringify(data));
    }
    
    
}

const juego = new Juego();
