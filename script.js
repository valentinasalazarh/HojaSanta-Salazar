let total1= 0;
let total2= 0;
let total3= 0;
const valorTotal = (a,b,c) => a + b + c

let bienvenidos = prompt('Bienvenidos a Hoja Santa, aquí encontrarás las mejores especias para tu cocina. \n\n¿Quieres conocer nuestros productos? \nIngresa "Si" para continuar');

if (bienvenidos == "si" || bienvenidos == "Si" || bienvenidos == "SI" || bienvenidos == "sI"); {    
    let nombre = (prompt("Primero queremos conocerte. ¿Cómo es tu nombre?"));
    let continuar = Number(prompt("¡Hola "+nombre+"! Ahora, digita '1' para conocer nuestros productos o digita '2' para salir"));
    while(continuar != 2) {
        let n = Number(prompt(nombre+" nos encanta tenerte aquí. Elige el productos que deseas comprar: \n1. Pimienta negra: $40000 COP \n2. Chile seco: $15000 COP \n3. Azafrán en polvo: $10000 COP \n4. Total \n5. Salir" ));
        if(n==1){
            let cantidad1 = Number(prompt("¿Cuántos tarritos de pimienta deseas adquirir?"));
            total1 = 40000*cantidad1;
        }
        else if(n==2){
            let cantidad2 = Number(prompt("¿Cuántos tarritos de Chile seco deseas adquirir?"));
            total2 = 15000*cantidad2;
        }
        else if(n==3){
            let cantidad3 = Number(prompt("¿Cuántos tarritos de Azafrán en polvo deseas adquirir?"));
            total3 = 10000*cantidad3;
        }
        else if(n==4){
            let total=valorTotal(total1,total2,total3);
            if(total=total){
                alert("Tu total es: $"+total+" COP");
            }
        }
        else if (n==5){
            break;
        }
    }
}


// let productos=["Chile", "Epazote", "Azafran", "Pimienta", "Romero"] // 5...0-4
// for(let i=0;i<productos.length;i++){
//     console.log(productos[i]);
// }
// let productoGrande=[];
// productoGrande[0]="Tamaño grande";
// console.log(productoGrande)