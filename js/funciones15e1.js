let nombre = prompt("Ingrese el nombre del trabajador");
let sueldo = parseInt(prompt("Ingrese el sueldo "));
let hijos = parseInt(prompt("Ingrese el numero de hijos"));


if (hijos>0) {
    bono = sueldo*0.07;
    sueldofinal = bono + sueldo;
}
else{
    bono=0;
    sueldofinal = sueldo;
}

const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");

resultado1.innerText ="La bonificación es de S/"+bono.toFixed(2);
resultado2.innerText ="El sueldo final es de S/"+sueldofinal;