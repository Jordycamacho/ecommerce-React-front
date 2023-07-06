var valores = [true, 5, false, "hola", "adios", 2]

var texto1 = valores[3];
var texto2 = valores[4];
var True = valores[0] && !valores[2];
var False = valores[0] || valores[2];
var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

function Mensaje1(){
    if(texto1.length>texto2.length){
        alert(`El texto ${texto1} es mayor a el texto 2 ${texto2}`)
    }else{
        alert(`el texto ${texto2} es mayor a el texto 1 ${texto1}`)
    }
}


function Mensaje2 () {
    alert ("Resultado verdadero: " + True);
    alert ("Resultado falso: " + False);
}

function Mensaje3 () {
    alert ("Suma: " + suma);
    alert("Resta: " + resta);
    alert("Multiplicación: " + multiplicacion);
    alert("División: " + division);
}

Mensaje1();
Mensaje2();
Mensaje3();

