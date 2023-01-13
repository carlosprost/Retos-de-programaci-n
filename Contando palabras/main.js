function contarPalabras(txt){
    let arr = txt.trim().split(' ')
    let count = 0

    arr.forEach(e => {
        count++
    });

    return count

}


console.log(contarPalabras('Cuando yo era joven, me gustaba el deporte, ahora que estoy viejo soy re vago'))