const form = document.querySelector('#factorialForm')
const numero = document.querySelector('#numero')

const resultado = document.querySelector('#resultado')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let numeroFactorial = parseInt(numero.value)

    let numeroFactorizados = []
    let result = `${numeroFactorial}! = `
    for(let i = numeroFactorial; i > 0; i--){
        //numeroFactorizados.push(i)
        if(i == numeroFactorial){
            result += `${i}`
        }else{
            result += `*${i}`
        }
    }
    result += ` = ${factorial(numeroFactorial)}`

    resultado.innerText = result  
})


function factorial(numero){
    let resultado = 0
    if(numero === 0){
        resultado = 1
    }else if (numero > 0){
        resultado = numero * factorial(numero - 1)
    }

    return resultado
}