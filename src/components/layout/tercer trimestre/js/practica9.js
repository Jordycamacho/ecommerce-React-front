let num = parseInt(prompt("Introduce tu número: "));
let factorial = 1;

for(let i = 1; i<=num; i++){
    factorial *= i;
}

alert(`el factorial de ${num} es igual a: ${factorial}`);