function comprobarCarrera(movimientosDelAtleta, pistaDeObstaculos) {
  let pista = pistaDeObstaculos.split("");

  let movimientos = movimientosDelAtleta.map((m) => {
    if (m === "RUN") {
      return "_";
    } else if (m === "JUMP") {
      return "|";
    }
  });

  return movimientos.join("") === pista.join("");
}

console.log(comprobarCarrera(["RUN", "JUMP", "RUN"], "_|_"));
console.log(comprobarCarrera(["RUN", "JUMP", "RUN"], "_||"));
console.log(
  comprobarCarrera(["RUN", "JUMP", "RUN", "JUMP", "JUMP", "RUN"], "_|_||_")
);
