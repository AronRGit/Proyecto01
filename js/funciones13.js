let nota1= parseInt(prompt("ingrese la nota 1"));
let nota2= parseInt(prompt("ingrese la nota 2"));
let nota3= parseInt(prompt("ingrese la nota 3"));

promedionotas= ((nota1 + nota2 + nota3)/3);
const resultado1 = document.getElementById("resultado1");
resultado1.innerText= "El promedio es "+promedionotas.toFixed(2);

let sueldo1 = 1500;
let sueldo2 = 2200;
let sueldo3 = 2500;

sueldoaumentado1 = sueldo1*0.1 + sueldo1;
sueldoaumentado2 = sueldo2*0.12 + sueldo2;
sueldoaumentado3 = sueldo3*0.16 + sueldo3;

const resultado2 = document.getElementById("resultado2");
resultado2.innerText = "los sueldos son: "+sueldo1+", "+sueldo2+", "+sueldo3+" y los nuevos sueldos con aumeto son:"+sueldoaumentado1+", "+sueldoaumentado2+", "+sueldoaumentado3;

let notaalumno1 = 16;
let notaalumno2 = 18;
let notaalumno3 = 14;

notafinal = (notaalumno1*0.3) + (notaalumno2*0.3) + (notaalumno3*0.4);
const resultado3=document.getElementById("resultado3");
resultado3.innerText = "Las notas del alunmo son:"+notaalumno1+", "+notaalumno2+", "+notaalumno3+" La calificación final es:"+notafinal;
