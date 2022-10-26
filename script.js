let total1= 0;
let total2= 0;
let total3= 0;
const valorTotal = (a,b,c) => a + b + c

let bienvenida = prompt('Bienvenida a Polett - Nail Spa. \n\n¿Quieres conocer nuestros servicios? \nIngresa "Si" para continuar');

if (bienvenida == "si" || bienvenida == "Si" || bienvenida == "SI" || bienvenida == "sI"); {    
    let nombre = (prompt("Primero queremos conocerte. ¿Cómo es tu nombre?"));
    let continuar = Number(prompt("¡Hola "+nombre+"! Ahora, digita '1' para conocer nuestros servicios o digita '2' para salir"));
    while(continuar != 2) {
        let n = Number(prompt(nombre+" nos encanta tenerte aquí. Elige el servicio que deseas adquirir: \n1. Esmaltado tradicional manos: $20000 COP \n2. Esmaltado tradicional pies: $15000 COP \n3. Esmaltado semipermanente manos: $60000 COP \n4. Total \n5. Salir" ));
        if(n==1){
            let cantidad1 = Number(prompt("¡Ven con tus amigas! ¿Cuántos esmaltados tradicionales de manos deseas adquirir?"));
            total1 = 20000*cantidad1;
        }
        else if(n==2){
            let cantidad2 = Number(prompt("¡Ven con tus amigas! ¿Cuántos esmaltados tradicionales de pies deseas adquirir?"));
            total2 = 15000*cantidad2;
        }
        else if(n==3){
            let cantidad3 = Number(prompt("¡Ven con tus amigas! ¿Cuántos esmaltados semipermanentes de manos deseas adquirir?"));
            total3 = 60000*cantidad3;
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