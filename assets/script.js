var puntajeHumano = 0;
puntajeHumano = parseInt(puntajeHumano);
var puntajeIa = 0;
puntajeIa = parseInt(puntajeIa);
const cantJuegos = prompt("¿Cuántas veces desea jugar?", "");
var jugadaHumano;
var jugadaIa;
const jugadaRandom = Math.floor(Math.random() * 3) + 1;
var ganador;

function genJugadaIa(jugadaRandom, jugadaIa){
    if (jugadaRandom === 1){
        jugadaIa = "Piedra";
    }else if (jugadaRandom === 2){
        jugadaIa = "Papel";
    }else if (jugadaRandom === 3){
        jugadaIa = "Tijera";
    }
    return jugadaIa;
}

function genGanador(jugadaHumano, jugadaIa){
    if (jugadaHumano === jugadaIa){
        ganador = "Empate";
    }else if (jugadaHumano === "Tijera" && jugadaIa === "Papel" || jugadaHumano === "Papel" && jugadaIa === "Piedra" || jugadaHumano === "Piedra" && jugadaIa === "Tijera"){
        ganador = "Usuario"
    }else if (jugadaHumano === "Tijera" && jugadaIa === "Piedra" || jugadaHumano === "Papel" && jugadaIa === "Tijera" || jugadaHumano === "Piedra" && jugadaIa === "Papel"){
        ganador = "Máquina"
    }
    return ganador;
}

for (let juego = 1; juego <= cantJuegos; juego++) {
    jugadaHumano = prompt("Ingresa una de las siguientes opciones: Piedra, Papel o Tijera");
    jugadaIa = genJugadaIa(jugadaRandom, jugadaIa);
    ganador = genGanador(jugadaHumano, jugadaIa)

    if (ganador === "Usuario"){
        puntajeHumano += 1;
    }else if (ganador === "Máquina"){
        puntajeIa += 1;
    }

    if (ganador === "Empate"){
        $("#resultado").append(`
            <h3>Juego N°${juego} - Usuario elige: ${jugadaHumano} / Máquina elige: ${jugadaIa} - Empate <br></h3>
        `);
    }else{
        $("#resultado").append(`
            <h3>Juego N°${juego} - Usuario elige: ${jugadaHumano} / Máquina elige: ${jugadaIa} - Gana: ${ganador} <br></h3>
        `);
    }

    $("#puntos-humano").html(puntajeHumano);
    $("#puntos-ia").html(puntajeIa);

}

if (puntajeHumano > puntajeIa){
    $("#resultado-final").append(`
        <h2>¡Felicidades, haz ganado la partida!</h2>
    `);
}else if (puntajeHumano === puntajeIa){
    $("#resultado-final").append(`
        <h2>La partida ha terminado en empate</h2>
    `);
}else{
    $("#resultado-final").append(`
        <h2>Haz perdido contra la máquina</h2>
    `);
}