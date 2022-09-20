let productos = []

const selecTag = document.getElementById('lista')

const cocaCola = {
    id: 1,
    nombre: 'Coca Cola',
    precio: 250,
}
productos.push(cocaCola)

const fanta = {
    id: 2,
    nombre: 'Fanta',
    precio: 200,
}
productos.push(fanta)
const pasoToros = {
    id: 3,
    nombre: 'Paso de los Toros',
    precio: 180,
}
productos.push(pasoToros)
const schweppes = {
    id: 4,
    nombre: 'schweppes',
    precio: 280,
}
productos.push(schweppes)

productos.forEach(productos=>{
    const option = document.createElement("option")
    option.innerText = `${productos.nombre}: ${productos.precio}`
    selecTag.append(option)

})

let carrito = []

const boton = document.createElement('button')
boton.innerText = 'Seguir comprando'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'Terminar compra'
document.body.append(boton2)

boton.onclick = () => {
    const productoSeleccionado = productos[selecTag.selectedIndex]
    carrito.push(productoSeleccionado)

    const p = document.createElement('p')
    p.innerText = `Ud a seleccionado ${productoSeleccionado}`
    document.body.append(p)
}

boton2.onclick = ()=>{
let totalCompra = 0
carrito.forEach((prod)=>{
    totalCompra = totalCompra + prod.precio
})

const p = document.createElement('p')
p.innerText = `El precio total a pagar es ${totalCompra}`
document.body.append(p)
}
