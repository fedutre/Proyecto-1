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
boton.innerText = 'Elegir producto'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'Finalizar compra'
document.body.append(boton2)

boton.onclick = () => {
    let productoSeleccionado = productos[selecTag.selectedIndex]
    carrito.push(productoSeleccionado)
}

const contenedorCarrito = document.getElementById("carrito")

function renderizarCarrito(){
    contenedorCarrito.innerHTML = ""
    carrito.forEach((elemento)=>{
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML +=  ` <p>${elemento.nombre}</p>
                            <p>PRECIO: $${elemento.precio}</p>`
        contenedorCarrito.appendChild(div)
    })
    let totalPrecio = carrito.reduce((acumulador,elemento)=>acumulador+elemento.precio,0)
    console.log(totalPrecio)

    boton.innerHTML = `<p>Precio final $${totalPrecio + 0}</p>`
}
boton2.addEventListener("click",renderizarCarrito)
