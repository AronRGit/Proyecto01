let numero = parseInt(prompt("Ingrese el numero"));
let factorial=1;

for(i=1;i<=numero;i++){
    
    factorial= factorial*i;
}

const resultado1 = document.getElementById("resultado1");

resultado1.innerText= "El factorial del numero es "+factorial;