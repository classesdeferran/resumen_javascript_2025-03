
// Obtener el nodo con id "cabriolet"
// const cabriolet = document.getElementById('cabriolet')
const cabriolet = document.querySelector('#cabriolet')

cabriolet.addEventListener("click", () => {
    let dias = prompt("¿Días de alquiler?")
    let precio = cabriolet.querySelector('ul li:last-child').textContent
    precio = precio.split('€')[0]
    alert(precio)
} )