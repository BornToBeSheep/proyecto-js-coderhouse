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
    mostrarCliente (nuevoCliente);

}

function mostrarCliente (cliente){
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
        <a href="#" class="btn btn-primary" onClick="agregarAlcarrito()">Agregar al carrito</a>
        </div>`
        contenedor.appendChild(card);
    });
};

cardsProductos();

const agregarAlcarrito = () =>{
    alert("Se agrego el producto al carrito")
}