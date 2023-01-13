function calcularPoligono(poligono, base, altura){
    let resultado = 0
    if(poligono.toLowerCase() === 'triangulo'){
        resultado = base * altura / 2
    }else{
        resultado = base * altura
    }

    
    return resultado
}

console.log(calcularPoligono('cuadrado', 2, 2));
console.log(calcularPoligono('rectangulo', 10, 15));
console.log(calcularPoligono('triangulo', 10, 15));