/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

const contraseñaGenerada = document.querySelector('.contraseña')
const cantChar = document.querySelectorAll('[name=cant]')
const checkBox = document.querySelectorAll('[name=item]')

const btnGenerarContraseña = document.querySelector('#generar')

btnGenerarContraseña.addEventListener('click', ()=>{
    let caracteres = cantidadDeCaracteres()
    let checkBox = checkboxchecked()
    let contraseña = generarContraseña(caracteres, checkBox)

    contraseñaGenerada.innerText = contraseña

})

function cantidadDeCaracteres(){
    let caracteres = 0
    cantChar.forEach(r => {
        if(r.checked){
            caracteres = r.id
        }
    })

    return caracteres
}

function checkboxchecked(){
    let chkbox = []

    checkBox.forEach(chk =>{
        if(chk.checked){
            chkbox.push(chk.id)
        }
    })

    return chkbox
}

function generarContraseña(cantidadDeCaracteres, opcionesDeGenerado){

    let contraseña = []


    for(let i= 0; i < cantidadDeCaracteres; i++){
        if(esConMayus(opcionesDeGenerado) && esConNum(opcionesDeGenerado) && esConSym(opcionesDeGenerado)){
            switch(random(4)){
                case 1:
                    contraseña.push(generarCaracterMayus())
                    break
                case 2:
                    contraseña.push(generarCaracterNumber())
                    break
                case 3:
                    contraseña.push(generarCaracterSymbol())
                    break
                default:
                    contraseña.push(generarCaracter())
                    break
            }
        }else if(esConMayus(opcionesDeGenerado) && esConNum(opcionesDeGenerado)){
            switch(random(3)){
                case 1:
                    contraseña.push(generarCaracterMayus())
                    break
                case 2:
                    contraseña.push(generarCaracterNumber())
                    break
                default:
                    contraseña.push(generarCaracter())
                    break
            }
    
        }else if(esConMayus(opcionesDeGenerado) && esConSym(opcionesDeGenerado)){

            switch(random(3)){
                case 1:
                    contraseña.push(generarCaracterMayus())
                    break
                case 2:
                    contraseña.push(generarCaracterSymbol())
                    break
                default:
                    contraseña.push(generarCaracter())
                    break
            }
    
        }else if(esConNum(opcionesDeGenerado) && esConSym(opcionesDeGenerado)){

            switch(random(3)){
                case 1:
                    contraseña.push(generarCaracterSymbol())
                    break
                case 2:
                    contraseña.push(generarCaracterNumber())
                    break
                default:
                    contraseña.push(generarCaracter())
                    break
            }
    
        }else if(esConMayus(opcionesDeGenerado)){
            switch(random(2)){
                case 1:
                    contraseña.push(generarCaracterMayus())
                    break
                default:
                    contraseña.push(generarCaracter())
                    break
            }
    
        }else if(esConNum(opcionesDeGenerado)){

            switch(random(2)){
                case 1:
                    contraseña.push(generarCaracterNumber())
                    break
                default:
                    contraseña.push(generarCaracter())
                    break
            }
    
        }else if(esConSym(opcionesDeGenerado)){

            switch(random(2)){
                case 1:
                    contraseña.push(generarCaracterSymbol())
                    break
                default:
                    contraseña.push(generarCaracter())
                    break
            }
    
        }else{
            contraseña.push(generarCaracter())
        }
    }

    return contraseña.join('')
}

function generarCaracter(){
    let caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    return caracteres[random(caracteres.length)]
}

function generarCaracterMayus(){
    let caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return caracteres[random(caracteres.length)]
}

function generarCaracterNumber(){
    let caracteres = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    return caracteres[random(caracteres.length)]
}

function generarCaracterSymbol(){
    let caracteres = ['@', '!', '_', '-', '&', '$', '=', '.', '%', '#', '~', '?', '¿', '*']

    return caracteres[random(caracteres.length)]
}

function esConMayus(op){
    return op.some(o => o == 'mayus')
}

function esConNum(op){
    return op.some(o => o == 'num')
}

function esConSym(op){
    return op.some(o => o == 'symbol')
}

function random(cantidad){
    let random = Math.floor(Math.random() * cantidad) + 1
    return random
}
