let numero = parseInt(prompt("Ingrese el numero"));

if(numero>500){
    resultado= numero*0.18;
}

const resultado1 = document.getElementById("resultado1");

resultado1.innerText= "El 18% del numero es: "+resultado;