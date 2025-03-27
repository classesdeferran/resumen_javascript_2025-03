import texto from './12_texto.js'

console.log(texto);

const btnTexto = document.getElementById('btnTexto')
const divTexto = document.getElementById('divTexto')

btnTexto.addEventListener('click', () => {

    fetch('12_texto.txt')
    .then(data => data.text())
    .then(data => {
        console.log(data);
        divTexto.textContent = data
    })
    .catch( error => {
        console.log("Error:", error);
    })
    .finally( () => {
        console.log("Programa finalizado");
    })
})

const btnDatos = document.getElementById('btnDatos')
const divDatos = document.getElementById('divDatos')

btnDatos.addEventListener('click', () => {
    fetch('12_datos.json')
    .then(data => {
        // console.log(data)
        return data.json()})
    .then( res => {
        console.table(res)
    })
    .catch(error => console.error("Error", error))
    .finally(() => console.log("Finalizado"))
})
