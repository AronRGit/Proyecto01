let inversion = parseInt(prompt("Ingrese el monto de inversión"));

avenidaa = inversion*0.35;
avenidab = inversion*0.25;
avenidac = inversion*0.1;
avenidad = inversion*0.15;
avenidae = inversion*0.15;

const avenidaA = document.getElementById("avenidaA");
const avenidaB = document.getElementById("avenidaB");
const avenidaC = document.getElementById("avenidaC");
const avenidaD = document.getElementById("avenidaD");
const avenidaE = document.getElementById("avenidaE");

avenidaA.innerText = "El monto de inversion de la Avenida la mar es: S/"+avenidaa;
avenidaB.innerText = "El monto de inversion de la Avenida Abancay es: S/"+avenidab;
avenidaC.innerText = "El monto de inversion de la Avenida 28 de Julio es: S/"+avenidac;
avenidaD.innerText = "El monto de inversion de la Avenida Aviación es: S/"+avenidad;
avenidaE.innerText = "El monto de inversion de la Avenida Tacna es: S/"+avenidae;