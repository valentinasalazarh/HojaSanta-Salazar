//Productos
const productos = [
    //Especias grandes
    {
        id: "pimientaNegraL",
        titulo: "Pimienta Negra | L",
        imagen: "./images/productos/1-pimienta-negra-L.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "grandes",
        },
        precio: "40000",
        caracteristica: "50 gr."
    },
    {
        id: "pimientaRojaL",
        titulo: "Pimienta Roja | L",
        imagen: "./images/productos/2-pimienta-roja.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "grandes",
        },
        precio: "50000",
        caracteristica: "50 gr."
    },
    {
        id: "epazoteL",
        titulo: "Epazote | L",
        imagen: "./images/productos/3-epazote-L.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "grandes",
        },
        precio: "30000",
        caracteristica: "50 gr."
    },
    {
        id: "azafranPolvoL",
        titulo: "Azafrán en polvo | L",
        imagen: "./images/productos/4-azafran-polvo.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "grandes",
        },
        precio: "10000",
        caracteristica: "50 gr."
    },
    //Especias medianas
    {
        id: "epazoteM",
        titulo: "Epazote | M",
        imagen: "./images/productos/5-epazote-M.jpg",
        categoria: {
            nombre: "Especias medianas",
            id: "medianas",
        },
        precio: "20000",
        caracteristica: "14 gr."
    },
    {
        id: "chileSecoM",
        titulo: "Chile Seco | M",
        imagen: "./images/productos/6-chile-seco.jpg",
        categoria: {
            nombre: "Especias medianas",
            id: "medianas",
        },
        precio: "15000",
        caracteristica: "14 gr."
    },
    {
        id: "pimientaNegraM",
        titulo: "Pimienta Negra | M",
        imagen: "./images/productos/7-pimienta.negra-M.jpg",
        categoria: {
            nombre: "Especias medianas",
            id: "medianas",
        },
        precio: "20000",
        caracteristica: "14 gr."
    },
    //Accesorios
    {
        id: "bolsasEcologicas",
        titulo: "Bolsas Ecológicas | 3 u",
        imagen: "./images/productos/8-bolsas-eco.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: "100000",
        caracteristica: "3 uni."
    }
]

//DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

//Poner los productos en el HTML
function cargarProductos (productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <div class="detalles-1">
                    <h2 class="producto-titulo">${producto.titulo}</h2>
                    <p class="producto-caracteristica">${producto.caracteristica}</p>
                </div>
                <button class="add-to-cart">
                    <p class="producto-precio">$${producto.precio} COP</p>
                    <p class="producto-agregar" id="${producto.id}" ><strong>ADD TO CART</strong></p>
                </button>
            </div>
        `;

        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();

}

cargarProductos(productos);

//Activa los botones de categorías
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }
        else {
            cargarProductos(productos);
        }
    })
})

//Activar botones ADD TO CART
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

//Actualizar cantidad de productos en el carrito
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito()
}
else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }
    else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

//Actualizar número de cantidad del ícono del carrito
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}