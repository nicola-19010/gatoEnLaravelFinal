<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Gato</title>
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
</head>
<body>
    <div id="juego">
        <table>
            <tr>
                <td><button class="celda" onclick="juego.manejarClicCelda(0)"></button></td>
                <td><button class="celda" onclick="juego.manejarClicCelda(1)"></button></td>
                <td><button class="celda" onclick="juego.manejarClicCelda(2)"></button></td>
            </tr>
            <tr>
                <td><button class="celda" onclick="juego.manejarClicCelda(3)"></button></td>
                <td><button class="celda" onclick="juego.manejarClicCelda(4)"></button></td>
                <td><button class="celda" onclick="juego.manejarClicCelda(5)"></button></td>
            </tr>
            <tr>
                <td><button class="celda" onclick="juego.manejarClicCelda(6)"></button></td>
                <td><button class="celda" onclick="juego.manejarClicCelda(7)"></button></td>
                <td><button class="celda" onclick="juego.manejarClicCelda(8)"></button></td>
            </tr>
        </table>
    </div>
    <div id="controles-juego">
        <button class="btn" id="boton-reiniciar" onclick="juego.reiniciarJuego()">Reiniciar Juego</button>        
    </div>

    <script src="{{ asset('js/Jugador.js') }}"></script>
    <script src="{{ asset('js/Tablero.js') }}"></script>
    <script src="{{ asset('js/Juego.js') }}"></script>
    
    
</body>
</html>
