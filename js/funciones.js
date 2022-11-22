// let nombre = prompt("Ingrese el nombre del trabajador");
// let diastrabajo = parseInt(prompt("ingrese los dias trabajados"));

//  sueldobasico = (diastrabajo*40);
// if(diastrabajo>15){
//     sueldoneto= sueldobasico*1.2;
// }
// else{
//     sueldoneto = sueldobasico;
// }
// alert("El sueldo neto de "+nombre+" es de: S/"+sueldoneto);

/* RETO
La empresa Anita S.A. fabrica los juguetes Robot y Muñeca,
y realiza sus ventas por delivery.
La empresa de delivery le cobra 5 soles por entrega y 1 sol adicional
cuando el paquete a entregar pesa mas de 10 kilos. Cada Robot pesa 1 Kg y cada Muñeca ½ Kg.
Escribir una aplicación que calcule el importe que debe cobrar la empresa Anita S.A.
por el servicio de delivery ingresando la cantidad de Robot y Muñecas
que se transportarán en un paquete.
*/

/* let pesorobot = 1;
let pesomuñeca = 0.5;

let cantidadRobot = parseInt(prompt("ingrese la cantidad de robots"));
let cantidaMuñeca = parseInt(prompt("ingrese la cantidad de muñecas"));
let costo = 5;

pesototal= (cantidadRobot*pesorobot)+(cantidaMuñeca*pesomuñeca);
if(pesototal>10){
    costo= costo + 1;
}
alert("El importe a pagar es: S/"+costo); */

/* op="";
while (true) {
        alert("Mensaje de alerta");
        op = prompt("Desea continuar? (si/no)");
        if (op=="no") {
            break;
        }
} */

const btntarea13 = document.getElementById("btntarea13");
const btntarea13p = document.getElementById("btntarea13p");
const btntarea14 = document.getElementById("btntarea14");
const btntarea14e1 = document.getElementById("btntarea14e1");
const btntarea14e2 = document.getElementById("btntarea14e2");
const btntarea14e3 = document.getElementById("btntarea14e3");
const btntarea15 = document.getElementById("btntarea15");
const btntarea15e1 = document.getElementById("btntarea15e1");
const btntarea15e2 = document.getElementById("btntarea15e2");
const btntarea15e3 = document.getElementById("btntarea15e3");
const btntarea16 = document.getElementById("btntarea16");
const btntarea16e1 = document.getElementById("btntarea16e1");
const btntarea16e2 = document.getElementById("btntarea16e2");
const btntarea16e3 = document.getElementById("btntarea16e3");
const iframe = document.getElementById("frame");

btntarea13.onclick = function() {
        iframe.src = "tarea13.html";
}
btntarea13p.onclick = function() {
    iframe.src = "tarea13p.html";
}
btntarea14.onclick = function() {
    iframe.src = "tarea14.html";
}
btntarea14e1.onclick = function() {
    iframe.src = "tarea14e1.html";
}
btntarea14e2.onclick = function() {
    iframe.src = "tarea14e2.html";
}
btntarea14e3.onclick = function() {
    iframe.src = "tarea14e3.html";
}
btntarea15.onclick = function() {
    iframe.src = "tarea15.html";
}
btntarea15e1.onclick = function() {
    iframe.src = "tarea15e1.html";
}
btntarea15e2.onclick = function() {
    iframe.src = "tarea15e2.html";
}
btntarea15e3.onclick = function() {
    iframe.src = "tarea15e3.html";
}
btntarea16.onclick = function() {
    iframe.src = "tarea16.html";
}
btntarea16e1.onclick = function() {
    iframe.src = "tarea16e1.html";
}
btntarea16e2.onclick = function() {
    iframe.src = "tarea16e2.html";
}
btntarea16e3.onclick = function() {
    iframe.src = "tarea16e3.html";
}