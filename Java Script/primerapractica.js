

/* ----------------------------------------------------------------------------------------------------------------------------------------------

Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.



                                      EJERCICIO 1
*/




// document.getElementById("formulario").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  
//     // Obtiene el valor ingresado por el usuario
//     var name = document.getElementById("nombre").value;
  
//     // Realiza el proceso deseado con el nombre
//     var mensaje = "¡El día está, " + name + "!";
  
//     // Muestra una alerta con el mensaje

//     if (name != "juan"){
//         alert(mensaje);

//     } else {
//         alert("Que onda Juan ... ¿Todo bien?")
//     }
    
//   });






/* ----------------------------------------------------------------------------------------------------------------------------------------------

Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio



                                      EJERCICIO 2





document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();


    var area = Number(document.getElementById("radio").value);
    var decimales = 2;


    var mensaje = "El area es: "+ (Math.PI*area**2).toFixed(decimales) + "Cm²\nEl perimetro es: "+(2*Math.PI*area).toFixed(decimales)+"Cm²" ;


    alert(mensaje);

}); */




/* ----------------------------------------------------------------------------------------------------------------------------------------------

Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo.



                                      EJERCICIO 3





document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();


    var edad = Number(document.getElementById("edad").value);


    if(edad < 18) {
        alert("Usted es menor de edad");

    } else {
        alert("Usted es mayor de edad");
    }
    
    

}); */





/* ----------------------------------------------------------------------------------------------------------------------------------------------

Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.



                                      EJERCICIO 4 




document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();


    var sn = document.getElementById("sn").value.toUpperCase();


    if(sn != "N" && sn != "S"){ 
        alert("INCORRECTO");

    } else {
        alert("CORRECTO");
    }



}); */



/* ----------------------------------------------------------------------------------------------------------------------------------------------

Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.


                                     EJERCICIO 5 




 document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();


    function calcular() {

    

        var operacion = Number(document.getElementById("operacion").value);
        

        var n1 = Number((document.getElementById("n1")).value);
        var n2 = Number((document.getElementById("n2")).value);
        var resultado;
    
            switch (operacion) {

        case 1:

           resultado = `La suma entre ${n1} y ${n2} equivale a ${n1 + n2}`;
            break;

        case 2:

            resultado = (`La resta entre ${n1} y ${n2} equivale a ${n1 - n2}`);
            break;

        case 3:

            resultado = (`La multiplicacion entre ${n1} y ${n2} equivale a ${n1 * n2}`);
            break;

        case 4:

           resultado = ("La division es: " + n1 / n2);
            break;

    }


    var modalbody = document.getElementById('modalbody');
    modalbody.textContent = resultado;
    var myModal = new bootstrap.Modal(document.getElementById('modal'));

        
     myModal.show();

    }


    calcular();
}); 


// opción alternativa, sin boostrap 


// document.getElementById("formulario").addEventListener("submit", function (event) {
//     event.preventDefault();
  
//     function calcular() {
//       var operacion = Number(document.getElementById("operacion").value);
//       var n1 = Number(document.getElementById("n1").value);
//       var n2 = Number(document.getElementById("n2").value);
//       var resultado;
  
//       switch (operacion) {
//         case 1:
//           resultado = `La suma entre ${n1} y ${n2} equivale a ${n1 + n2}`;
//           break;
//         case 2:
//           resultado = `La resta entre ${n1} y ${n2} equivale a ${n1 - n2}`;
//           break;
//         case 3:
//           resultado = `La multiplicacion entre ${n1} y ${n2} equivale a ${n1 * n2}`;
//           break;
//         case 4:
//           resultado = `La division es: ${n1 / n2}`;
//           break;
//       }
  
//       var modalbody = document.getElementById("modalbody");
//       modalbody.textContent = resultado;
//       var modal = document.getElementById("modal");
//       modal.style.display = "block";
//     }
  
//     calcular();
//   });
  
//   document.getElementById("closeBtn").addEventListener("click", function () {
//     var modal = document.getElementById("modal");
//     modal.style.display = "none";
// }); */


/* ----------------------------------------------------------------------------------------------------------------------------------------------

Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

EJERCICIO 6 







document.getElementById("formulario").addEventListener("submit", function(event){
event.preventDefault();


var num = Number(document.getElementById("numero").value);
var respuesta;


if (num % 2 == 0 && num != 0) {
   respuesta = "Es par";
  
} else if (num == 0) {
    respuesta = "Es no binario";
 
} else {
    respuesta = "Es impar";

}


var res = document.getElementById("respuesta");

res.innerHTML = respuesta;

}); */


/* ----------------------------------------------------------------------------------------------------------------------------------------------

Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.


//                                      EJERCICIO 7 */




// const form = document.querySelector("#formulario");
// const input = document.querySelector("#numero");
// const titulo = document.querySelector("#titulo");
// const respuesta = document.querySelector("#respuesta");
// const identificar = document.querySelector("#identificar");
// const sumar = document.querySelector("#sumar");

// sumar.style.cursor = "not-allowed";
// sumar.disabled = true;

// let numero; // Variable para almacenar el número ingresado por el usuario

// identificar.addEventListener("click", (event) => {
//   event.preventDefault();

//   // Obtener el valor del número
//   numero = Number(input.value);

//   // Si el número es menor a 1, vaciar el campo de texto y mostrar un mensaje de error
//   if (numero < 1) {
//     input.value = ""; 
//     titulo.innerHTML = '<h1> ERROR - Ingrese un número mayor a 0 </h1>';
//   } else {
//     // Vaciar el campo de texto y mostrar el número
//     input.value = "";
//     // respuesta.innerHTML = numero;  por si necesitamos ver el valor del número 

//     identificar.disabled = true;
//     identificar.style.cursor = "not-allowed";
//     sumar.style.cursor = "pointer";
//     sumar.disabled = false;

//     titulo.innerHTML = '<h1> Ahora ingrese número que sumaremos, hasta que iguale el número anterior </h1>';
//   }
// });


// let sumanumero = 0;

// sumar.addEventListener("click", (event) => {
//     event.preventDefault();
//     let nuevoNumero = Number(input.value);

//     if (nuevoNumero < 0) {
//         respuesta.innerHTML = '<h1> ERROR - Ingrese un número mayor o igual a 0 </h1>';
//         return;
//     }

//     sumanumero += nuevoNumero;
//     input.value = "";

//     if (sumanumero >= numero) {
//         respuesta.innerHTML = 'El número ' + sumanumero + ' es mayor o igual a ' + numero;
//         setTimeout(() => {
//             location.reload(); // Refrescar la página después de unos segundos
//         }, 3000);
//     } else {
//         respuesta.innerHTML = 'La suma actual es ' + sumanumero + '. Siga sumando...';
//        
//     }
// });



/* ----------------------------------------------------------------------------------------------------------------------------------------------

Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.


//                                      EJERCICIO 8 


let numero = document.querySelector("#numero");
let identificar = document.querySelector("#identificar");
let respuesta = document.querySelector("#respuesta");
var suma = 0;
var nummay = 0;
var nummen = 0;
var cont = 0;



identificar.addEventListener("click", (event) => {
    event.preventDefault();


    var n1 = Number(numero.value); 



    suma += n1;

    if (cont == 0){

        nummen = n1;
    }

    cont ++;

    if (n1 > nummay){

        nummay = n1;
    }

    if (n1 < nummen && n1 != 0){

        nummen = n1;

    }


   if (n1 != 0) {

      numero.value = "";
      respuesta.innerHTML = 'La suma actual es de ' +suma;
    
   } else {
    identificar.style.display = "none";
    numero.value = "";
    numero.setAttribute('readonly', 'true');
    respuesta.innerHTML = 'El promedio es: ' +(suma/cont) +'<br>El número mayor es: '+nummay+' <br> El número menor es: '+nummen;
    setTimeout(() => {
                    location.reload(); // Refrescar la página después de unos segundos
                }, 9000);
   }


});  */



/* ----------------------------------------------------------------------------------------------------------------------------------------------

Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().


//                                      EJERCICIO 9 */

let frase = document.querySelector("#frase");
let identificar = document.querySelector("#identificar");
let respuesta = document.getElementById("respuesta");



// var palabra = prompt("Ingrese una palabra");
var element = "";

identificar.addEventListener("click", (event) => {
    event.preventDefault();

    let palabra = frase.value;

    for (let index = 0; index < palabra.length; index++) {
        if (palabra.substring(index, index + 1) != " ") {
            element += palabra.substring(index, index + 1) + " ";
        } else {
            element += " ";
        }
    }
    
    frase.value = "";
    frase.setAttribute('readonly', 'true');
    respuesta.innerHTML = element;

    setTimeout(() =>{
        location.reload();},9000);
    

});




// ----------------------------------------------------------------------------------------------------------------------------------------------


//                                      EJERCICIO 23

  


// function resaltar(){

//     var parrafo = document.getElementById('parrafo');

//     var contenido = parrafo.innerHTML;

//     var palabras = contenido.split(' ');

//     palabras.forEach(function(palabra, index){

//         if (palabra.length > 8) {

//             palabras[index] = '<span class="highlight">' + palabra + '</span>';
//         }
    
//     });

//     contenido = palabras.join(' ');    
//     parrafo.innerHTML = contenido;

//  }

// resaltar();








  