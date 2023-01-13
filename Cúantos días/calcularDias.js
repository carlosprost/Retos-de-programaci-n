const form = document.querySelector('#calcularDias')

const fechaUno = document.querySelector('#fechaUno')
const fechaDos = document.querySelector('#fechaDos')


const dias = document.querySelector('#diasDeDiferencia')


function cuantosDias(fecha1, fecha2){



    let uno = fecha1.split('/')
    let dos = fecha2.split('/')

    let año1 = parseInt(uno[2]) 
    let mes1 = parseInt(uno[1])
    let dia1 = parseInt(uno[0])

    let fechaReal1 = new Date(`${mes1}/${dia1}/${año1}`)
    console.log(fechaReal1);

    let año2 = parseInt(dos[2])
    let mes2 = parseInt(dos[1])
    let dia2 = parseInt(dos[0])

    let fechaReal2 = new Date(`${mes2}/${dia2}/${año2}`)
    console.log(fechaReal2);
    
    
    console.log(Math.abs(fechaReal1 - fechaReal2) / (1000 * 3600 * 24));
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    cuantosDias(fechaUno.value, fechaDos.value)
    
})