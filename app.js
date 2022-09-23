class cliente {
    constructor(nombre, telefono, direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

let button = document.getElementById ("enviarInfo");
button.addEventListener("click", cargarCliente);


function cargarCliente () {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nuevoCliente = new cliente (nombre, telefono, direccion);
    let enJSON = JSON.stringify(nuevoCliente);
    localStorage.setItem("cliente", enJSON);
    mostrarCliente (enJSON);

}

function mostrarCliente (c){
    let cliente = JSON.parse(c);
    let formulario = document.getElementById("formulario");
    formulario.innerHTML = "";
    let nuevoContenido = document.createElement ("div");
    nuevoContenido.innerHTML = `<h1> Bienvenido ${cliente.nombre}. Haga click en el boton para continuar su compra </h1> <button id="continuar"> Continue comprando </button>`;
    formulario.appendChild(nuevoContenido);
    let continuar = document.getElementById ("continuar");
    continuar.addEventListener("click", conti);
    function conti(){
        formulario.innerHTML= "";
        }
    }



let productos =[
    {
    id: 1,
    nombre: "producto 1",
    precio: 500,
    imagen: "link",
    },
    {
    id: 2,
    nombre: "producto 2",
    precio: 100,
    imagen: "link",
    },
    {
    id: 3,
    nombre: "producto 3",
    precio: 400,
    imagen: "link",
    },
    {
    id: 4,
    nombre: "producto 4",
    precio: 1000,
    imagen: "link",
    }
]

const cardsProductos = () =>{
    let contenedor= document.getElementById ("contenedor");
    productos.forEach((producto, indice)=>{
        let card = document.createElement ("div");
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: $${producto.precio}</p>
        <a href="#" class="btn btn-primary" onClick="agregarAlcarrito(${indice})">Agregar al carrito</a> 
        </div>`
        contenedor.appendChild(card);
    });
};

cardsProductos();
let carrito = [];
let carritoModal = document.getElementById ("carrito");

const agregarAlcarrito = (indice) =>{
    alert("Se agrego el producto al carrito");
    /* Recorro el array carrito comparando el id de sus elementos con el id del producto seleccionado, de esta forma, puedo saber si el prod seleccionado esta o no esta en el carrito. En caso de no estarlo, findIndex retorna -1 */
    const indiceCarrito = carrito.findIndex((elemento) =>{
        return elemento.id === productos[indice].id;
    });
    /* si indiceCarrito es estrictamente igual a -1 quiere decir que el producto seleccionado no estaba dentro del carritob  */
    if (indiceCarrito === -1){
        productoAgregar = productos[indice];
        productoAgregar.cant = 1;
        carrito.push(productoAgregar);
        crearCarrito(indice);
    }else {
        carrito[indiceCarrito].cant += 1;
        crearCarrito(indice);
    }
}



const crearCarrito = (indice)=>{
    let total = 0;
    carritoModal.innerHTML = "";
    carrito.forEach((producto)=>{
        total += producto.precio * producto.cant;
        let subtotal = producto.precio * producto.cant;
        const item = document.createElement("div");
        item.innerHTML = `<img src="${producto.imagen}" class="carrito-img-left" alt="...">
        <div class="carrito-body">
        <h5 class="carrito-title">${producto.nombre}</h5>
        <p class="carrito-text">Precio: $${producto.precio}</p>
        <p class ="carrito-cantidad">Cantidad: ${producto.cant}</p>
        <p>Subtotal: $${subtotal}</p>
        <a href="#" class="btn btn-primary" onClick="eliminarDelCarrito(${indice})">Elimnar producto</a>
        </div>`;
        carritoModal.appendChild(item);
    })
    const mostrarTotal = document.createElement("div");
    mostrarTotal.classList.add("total")
    mostrarTotal.innerHTML = `<p> Total: $${total}</p>`
    carritoModal.appendChild(mostrarTotal);
}

/*
const eliminarDelCarrito = (index) =>{
    const item = carrito.find((producto) => producto.id === index);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    console.log(indice);
}
*/
console.log(carrito)




/* //SECCION DESCUENTOS Y FORMAS DE PAGO

let formasDePago = document.getElementById("formasDePago")

let formasPago = [
    {
    Descripcion: "efectivo con 15% de descuento",
    cant: 1
    },
    {
    Descripcion: "3 cuotas sin interes",
    cant: 3
    },
    {
    Descripcion: "6 cuotas sin interes",
    cant: 6
    },
    {
    Descripcion: "12 cuotas con 30% de interes",
    cant: 12
    },
    {
    Descripcion: "18 cuotas con 60% de interes",
    cant: 18
    }
];

const opcionesPago = () =>{
    formasPago.forEach ((forma) => {
        const selector = document.createElement ("div")
        selector.innerHTML = `<a id>${forma.Descripcion}</a>`
        switch (forma.cant){
            case 1:
                selector.innerHTML= `<p>Total a pagar: $${total - (0.15 * total)}</p>`;
                break;
            case 3:
                selector.innerHTML = `<p>Cada cuota seria de $${total / 3}</p>`;
                break;
            case 6:
                selector.innerHTML = `<p>Cada cuota seria de $${total / 6}</p>`;
                break;
            case 12:
                selector.innerHTML = `<p>Sobre un total de $${total + (total * 0.3)} cada cuota seria de $${(total+(total * 0.3))/12}</p>`;
                break;
            case 18:
                selector.innerHTML = `<p>Sobre un total de $${total + (total * 0.6)} cada cuota seria de $${(total+(total * 0.6))/18}</p>`;
                break;
        }
    })
    formasDePago.appendChild(selector);
}

*/

