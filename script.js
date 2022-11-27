//Productos
const productos = [
    //Especias grandes
    {
        id: "pimientaNegraL",
        titulo: "Pimienta Negra | L",
        imagen: "./images/productos/1-pimienta-negra-L.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "especiasGrandes",
        },
        precio: "40000"
    },
    {
        id: "pimientaRojaL",
        titulo: "Pimienta Roja | L",
        imagen: "./images/productos/2-pimienta-roja.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "especiasGrandes",
        },
        precio: "50000"
    },
    {
        id: "epazoteL",
        titulo: "Epazote | L",
        imagen: "./images/productos/3-epazote-L.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "especiasGrandes",
        },
        precio: "30000"
    },
    {
        id: "azafranPolvoL",
        titulo: "Azafrán en polvo | L",
        imagen: "./images/productos/4-azafran-polvo.jpg",
        categoria: {
            nombre: "Especias grandes",
            id: "especiasGrandes",
        },
        precio: "10000"
    },
    //Especias medianas
    {
        id: "epazoteM",
        titulo: "Epazote | M",
        imagen: "./images/productos/5-epazote-M.jpg",
        categoria: {
            nombre: "Especias medianas",
            id: "especiasMedianas",
        },
        precio: "20000"
    },
    {
        id: "chileSecoM",
        titulo: "Chile Seco | M",
        imagen: "./images/productos/6-chile-seco.jpg",
        categoria: {
            nombre: "Especias medianas",
            id: "especiasMedianas",
        },
        precio: "15000"
    },
    {
        id: "pimientaNegraM",
        titulo: "Pimienta Negra | M",
        imagen: "./images/productos/7-pimienta.negra-M.jpg",
        categoria: {
            nombre: "Especias medianas",
            id: "especiasMedianas",
        },
        precio: "20000"
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
        precio: "100000"
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos () {
    
}









// //Nota mental: Usar comillas invertidas para concatenar

// function nuevoUsuario1() { 
// let nuevoUsuario = prompt('¡Hola! Bienvenidos a Hoja Santa. \nAquí encontrarás las mejores especias para tu cocina. \nQueremos conocerte, por favor ingresa tu nombre: ')
//     if((nuevoUsuario == '') || (nuevoUsuario == ' ')) {
//         alert('Debes ingresar un nombre para poder continuar')
//     }
//     else {
//         alert(`Amamos las especias y amamos conocerte ${nuevoUsuario}`)
//     }
// }
// nuevoUsuario1();

// class Producto {
//     constructor(id, name, price, stock){
//         this.id = id
//         this.name = name
//         this.price = price
//         this.stock = stock
//     }
// }

// const producto1 = new Producto (1,'Epazote', 30000, 2)
// const producto2 = new Producto (2,'Azafrán en polvo', 10000, 2)
// const producto3 = new Producto (3,'Pimienta Negra', 40000, 6)
// const producto4 = new Producto (4,'Chile seco', 15000, 0)

// const PRODUCTOS=[producto1,producto2,producto3,producto4];
// let carro = [];
// let total = 0;

// let condition = 1;

// while(condition == 1){ 

// let compra = parseInt(prompt('Elige el productos que deseas comprar: \n1. Epazote: $30000 COP \n2. Azafrán en polvo: $10000 COP \n3. Pimienta negra: $40000 COP \n4. Chile seco: $15000 COP'))

// switch(compra){

//     case 1:
//         if(producto1.stock > 0 ){
//             carro.push(producto1);
//             total += producto1.price
//             producto1.stock -= 1;
//             alert(`Compraste ${producto1.name} quedó ${producto1.stock} en stock`)
//         }
//         else{
//             alert("No hay stock. Intenta mañana.")
//         }
//         break;
//     case 2:
//         if(producto2.stock > 0 ){
//             carro.push(producto2);
//             total += producto2.price
//             producto2.stock -= 1;
//             alert(`Compraste ${producto2.name} quedó ${producto2.stock} en stock`)
//         }
//         else{
//             alert("No hay stock. Intenta mañana.")
//         }
//         break;
//     case 3:
//         if(producto3.stock > 0 ){

//             carro.push(producto3);
//             total += producto3.price
//             producto3.stock -= 1;
//             alert(`Compraste ${producto3.name} quedó ${producto3.stock} de stock`)
//         }
//         else{
//             alert("No hay stock. Intenta mañana.")
//         }
//         break;
//     case 4:
//         if(producto4.stock > 0 ){

//             carro.push(producto4);
//             total += producto4.price
//             producto4.stock -= 1;
//             alert(`Compraste ${producto4.name} quedó ${producto4.stock} de stock`)
//         }
//         else{
//             alert("No hay stock. Intenta mañana.")
//         }
//         break;
//     }
//     condition = prompt('¿Quieres seguir comprando? \n1. Si \n2. No')

//     if(condition!=1){
//     alert(`Tu compra ha sido realizada con éxito😁, el total del monto es: $${carro.map(el => el.price).reduce(
//         (previousValue, currentValue) => previousValue + currentValue, 0)}`)
//     }
// }