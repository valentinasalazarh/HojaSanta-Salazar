let n;
let valortotal1 = 0;
let valortotal2 = 0;
const valortotal = (a,b) => a + b
const descuento = (a,b) => a * b
const resta = (a,b) => a - b    

let opcion1 = Number(prompt("Bienvenida a Polett -Bienestar y Belleza- \n 1- Ingresar al carrito de servicios \n 2- Salir"))
while (opcion1 != 2){
    opcion1 = Number(prompt("1- Agregar productos/Consultar total \n 2- Salir"))
    if(opcion1 == 1){
        n = Number(prompt("elige los productos que quieres agregar: \n 1- Aretes de corazón: 18000 COP \n 2- Cadena en acero: 20000 COP \n 3- Total" ));
        if (n == 1){
            let cant1 = Number(prompt("¿Cuántos aretes quieres agregar"));
                valortotal1 = 10000*cant1;
        }
        else if (n == 2){
            let cant2 = Number(prompt("¿Cuántas cadenas quieres agregar"));
                valortotal2 = 20000*cant2;
        }
        else if (n == 3){
            let Total = valortotal(valortotal1, valortotal2);
            if (Total >= 200000){
                let Descuento = resta(Total,descuento(Total,0.05));
                alert("Valor total con descuento: "+ Descuento);
            } else if(Total < 200000){
                alert("Valor total: "+ Total);
            }
        }
    }  
   
} 