document.addEventListener('keydown', function(event) {
    console.log(event.key);
    presionarTecla(event.key)
});

function presionarTecla(event) {
    let tecla = document.querySelector(`#btn-${event}`)
    tecla.classList.add('active')
    setTimeout(() => {
        tecla.classList.remove('active')
    }, 300);

}