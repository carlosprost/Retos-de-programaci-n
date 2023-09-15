/*
 * Crea un pequeño juego que consista en adivinar palabras en un número máximo de intentos:
 * - El juego comienza proponiendo una palabra aleatoria incompleta
 *   - Por ejemplo "m_ur_d_v", y el número de intentos que le quedan
 * - El usuario puede introducir únicamente una letra o una palabra (de la misma longitud que
 *   la palabra a adivinar)
 *   - Si escribe una letra y acierta, se muestra esa letra en la palabra. Si falla, se resta
 *     uno al número de intentos
 *   - Si escribe una resolución y acierta, finaliza el juego, en caso contrario, se resta uno
 *     al número de intentos
 *   - Si el contador de intentos llega a 0, el jugador pierde
 * - La palabra debe ocultar de forma aleatoria letras, y nunca puede comenzar ocultando más del 60%
 * - Puedes utilizar las palabras que quieras y el número de intentos que consideres
 */

const palabras = [
  "gato",
  "perro",
  "lobo",
  "tortuga",
  "pajaro",
  "leon",
  "tigre",
  "elefante",
  "jirafa",
  "serpiente",
  "cocodrilo",
  "delfin",
  "ballena",
  "caballo",
  "burro",
  "cebra",
  "rinoceronte",
  "hipopotamo",
  "oso",
  "panda",
  "koala",
  "puma",
  "zorro",
  "mapache",
  "ardilla",
  "murcielago",
  "buho",
  "aguila",
  "mariposa",
  "abeja",
  "arana",
  "escorpion",
  "lagarto",
  "camaleon",
  "rana",
  "salamandra",
  "pez",
  "tiburon",
  "pulpo",
  "medusa",
  "corazon",
  "luna",
  "sol",
  "estrella",
  "nube",
  "arcoiris",
  "rayo",
  "trueno",
  "tormenta",
  "viento",
  "tornado",
  "huracan",
  "terremoto",
  "volcan",
  "montana",
  "playa",
  "oceano",
  "rio",
  "lago",
  "cascada",
  "bosque",
  "desierto",
  "selva",
  "cueva",
  "isla",
  "pais",
  "ciudad",
  "calle",
  "casa",
  "apartamento",
  "tienda",
  "restaurante",
  "escuela",
  "hospital",
  "parque",
  "zoo",
];

let palabra = "";
let encontrada = [];
let indiceEncontradas = [];
let oportunidades = 7;

juego();

function juego() {
  elegirPalabra();
  cambiarImagen();
  colocarOportunidades();
  generarTecladoJuego();
  generarLineasDEPalabra(palabra);
  pulsarTecla();
}

function elegirPalabra() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
}

function cambiarImagen() {
  let img = document.querySelector(".horca img");
  img.src = `./assets/${oportunidades}.png`;
}

function colocarOportunidades() {
  const oportunidadesDiv = document.querySelector(".oportunidades");
  oportunidadesDiv.innerHTML = oportunidades;
}

function restarOportunidades() {
  if (oportunidades > 0) {
    oportunidades--;
  }

  if (oportunidades == 0) {
    bloquearTeclado();
  }
  colocarOportunidades();
}

function generarTecladoJuego() {
  const letras = document.querySelector(".letras");
  const abc = "abcdefghijklmnñopqrstuvwxyz";
  for (let l of abc) {
    let letra = document.createElement("div");
    letra.innerHTML = l.toLocaleUpperCase();
    letras.appendChild(letra);
  }
}

function bloquearTeclado() {
  const letras = document.querySelector(".letras");
  letras.querySelectorAll("div").forEach((e) => e.classList.add("rojo"));
}

function generarLineasDEPalabra(palabra) {
  const lineas = document.querySelector(".lineas");
  for (let i = 0; i < palabra.length; i++) {
    let letra = document.createElement("div");
    lineas.appendChild(letra);
  }
}

function pulsarTecla() {
  let tecla = document.querySelectorAll(".letras div");
  tecla.forEach((element) => {
    element.addEventListener("click", () => {
      comprobarLetra(element.innerHTML);
    });
  });
}

function comprobarLetra(letra) {
  accionAdivinarONoAdivinar(
    obtenerLetrasDelArreglo(palabra.split(""), letra),
    obtenerIndiceDelArreglo(palabra.split(""), letra)
  );
}

function accionAdivinarONoAdivinar(letras, indices) {
  if (hayLetras(letras)) {
    adivinar(letras, indices);
  } else {
    noAdivinar();
  }
}

function adivinar(letras, indices) {
  proporcionarLetrasEIndice(letras, indices);
  colocarLetras(encontrada, indiceEncontradas);
  esGanador();
}

function noAdivinar() {
  restarOportunidades();
  cambiarImagen();
  esPerdedor();
}

function hayLetras(letras) {
  return letras.length > 0;
}

function proporcionarLetrasEIndice(letras, indices) {
  encontrada = encontrada.concat(letras);
  indiceEncontradas = indiceEncontradas.concat(indices);
}

function colocarLetras(arrLetras, arrIndex) {
  const letras = document.querySelectorAll(".lineas div");
  letras.forEach((e) => (e.innerHTML = ""));
  for (let i = 0; i < arrLetras.length; i++) {
    letras[arrIndex[i]].innerHTML += arrLetras[i];
  }
}

function obtenerLetrasDelArreglo(array, letra) {
  return array.filter((element) => element.toUpperCase() == letra);
}

function obtenerIndiceDelArreglo(array, letra) {
  return array
    .map((element, index) => index)
    .filter((index) => array[index].toUpperCase() == letra);
}

function esGanador() {
  const letras = document.querySelectorAll(".lineas div");
  let contador = 0;
  letras.forEach((e) => (e.innerHTML == "" ? contador++ : contador));
  if (contador == 0) {
    setTimeout(() => {
      alert("Ganaste");
      window.location.reload();
    }, 500);
  }
}

function esPerdedor() {
  if (oportunidades == 0) {
    setTimeout(() => {
      alert("Perdiste");
      window.location.reload();
    }, 500);
  }
}
