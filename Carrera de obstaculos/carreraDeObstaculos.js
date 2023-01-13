function comprobarCarrera(movimientosDelAtleta, pistaDeObstaculos){
    let pista = pistaDeObstaculos.split('')
    
    let movimientos = movimientosDelAtleta.map(m => {
        if(m === 'RUN'){
            return '_'
        }else if(m === 'JUMP'){
            return '|'
        }
    })
    if(movimientos.length !== pista.length){
        throw Error
    }
    for(let i = 0; i < movimientos.length; i++){
        if(movimientos[i] === '_' && movimientos[i] !== pista[i]){
            pista[i] = 'X'
        }else if (movimientos[i] === '|' && movimientos[i] !== pista[i]){
            pista[i] = '/'
        }
    }

    return movimientos.join('') === pista.join('')
}

console.log(comprobarCarrera(['RUN', 'JUMP', 'RUN'], '_|_'))
console.log(comprobarCarrera(['RUN', 'JUMP', 'RUN'], '_||'))
console.log(comprobarCarrera(['RUN', 'JUMP', 'RUN', 'JUMP', 'JUMP', 'RUN'], '_|_||_'))
