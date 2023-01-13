const textoIn = document.querySelector('#texto')
const btnCifrar = document.querySelector('#codificar')
const opciones = document.querySelectorAll('[name=cipher]')

const resultadoEnPantalla = document.querySelector('#cifrado')


btnCifrar.addEventListener('click', ()=>{
    opciones.forEach(r => {
        if(r.checked){
            seleccionCifradoHacker(r.value, textoIn.value)
        }
    })
})

function seleccionCifradoHacker(op, msg){
    switch (op) {
        case 'basic':
            cipherBasic(msg)   
            break;
        case 'advance':
            cipherAdvance(msg)   
            break;
    }
}


function cipherBasic(msg){
    let leet = {
        'a' : '4',
        'e' : '3',
        'i' : '1',
        'o' : '0',
        'u' : '(_)'
    }
    let codigo = ''
    
    for( let l of msg){
        if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u'){
            codigo += leet[l]
        }else{
            codigo += l
        }
    }
    

    mostrarEnPantalla(codigo)     
}

function cipherAdvance(msg){
    let leet = {
        'a' : '4',
        'b' : '|3',
        'c' : '[',
        'd' : ')',
        'e' : '3',
        'f' : '|=',
        'g' : '&',
        'h' : '#',
        'i' : '1',
        'j' : ',_/',
        'k' : '>|',
        'l' : '1',
        'm' : '/\"/\"',
        'n' : '^/',
        'ñ' : '^~/',
        'o' : '0',
        'p' : '|*',
        'q' : '(_,)',
        'r' : '|2',
        's' : '5',
        't' : '7',
        'u' : '(_)',
        'v' : '\/',
        'w' : '\/\/',
        'x' : '><',
        'y' : 'j',
        'z' : '2'
    }

    let codificado = msg.toLowerCase().split(' ').map( a => a.split('').map(b => leet[b]).join('')).join(' ')

    mostrarEnPantalla(codificado)
     
}

function mostrarEnPantalla(texto){
    let p = document.createElement('p')
    p.className = 'salida-texto-hacker'
    p.innerText = texto

    resultadoEnPantalla.appendChild(p)

}