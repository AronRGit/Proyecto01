/* Ejercicio1 */
const btnResultado1 = document.getElementById("btnresultado1");
btnResultado1.onclick = function() {
    let numero1= parseInt(prompt("ingrese el primer numero"));
    let numero2= parseInt(prompt("ingrese el segundo numero"));
    suma = numero1 + numero2;
    producto = numero1 * numero2;
    const resultado1 = document.getElementById("resultado1");
    resultado1.innerText= "La suma es:"+suma+" y el producto es :"+producto;
}
/* Ejercicio2 */
const btnResultado2 = document.getElementById("btnresultado2");
btnResultado2.onclick = function() {
    let numero= parseInt(prompt("ingrese el numero"));
    resultado= numero*0.2;
    const resultado2 = document.getElementById("resultado2");
    resultado2.innerText= "El 20% del numero es:"+resultado;
}
/* Ejercicio3 */
const btnResultado3 = document.getElementById("btnresultado3");
btnResultado3.onclick = function() {
    let valor= parseInt(prompt("ingrese un valor"));
    centimetros= valor*100;
    milimetros= centimetros*10;
    const resultado3 = document.getElementById("resultado3");
    resultado3.innerText= "El valor en centimetros es:"+centimetros+".El valor en milimetros es:"+milimetros;
}
/* Ejercicio4 */
const btnResultado4 = document.getElementById("btnresultado4");
btnResultado4.onclick = function() {
    let base= parseInt(prompt("ingrese la base del triangulo"));
    let altura= parseInt(prompt("ingrese la altura del triangulo"));
    area = (base * altura)/2
    const resultado4 = document.getElementById("resultado4");
    resultado4.innerText= "El area del triangulo es:"+area;
}
/* Ejercicio5 */
const btnResultado5 = document.getElementById("btnresultado5");
btnResultado5.onclick = function() {
    let dolares= parseInt(prompt("ingrese la cantidad de dolares"));
    soles = dolares*3.38;
    const resultado5 = document.getElementById("resultado5");
    resultado5.innerText= "El valor en soles es: S/"+soles;
}
/* Ejercicio6 */
const btnResultado6 = document.getElementById("btnresultado6");
btnResultado6.onclick = function() {
    let pulgadas= parseInt(prompt("ingrese la medida en pulgadas"));
    milimetros = pulgadas*25.4;
    const resultado6 = document.getElementById("resultado6");
    resultado6.innerText= "La medida en milimetros es:"+milimetros+"mm."
}
/* Ejercicio7*/
const btnResultado7 = document.getElementById("btnresultado7");
btnResultado7.onclick = function() {
    let numero= parseInt(prompt("ingrese el numero"));
    cifrac= Math.floor(numero/100);
    cifrad= Math.floor((numero/10)%10);
    cifrau=numero%10;
    suma=cifrac+cifrad+cifrau;
    sumacuadrado= Math.pow(suma,2)
    const resultado7 = document.getElementById("resultado7");
    resultado7.innerText= "el resultado es:"+sumacuadrado;
}
/* Ejercicio8 */
const btnResultado8 = document.getElementById("btnresultado8");
btnResultado8.onclick = function() {
    let monto= parseInt(prompt("ingrese un monto"));
    porcentajea = monto*0.3;
    porcentajeb = monto*0.2;
    porcentajec = monto*0.5;

    const porcentajeA = document.getElementById("porcentajea");
    const porcentajeB = document.getElementById("porcentajeb");
    const porcentajeC = document.getElementById("porcentajec");
    porcentajeA.innerText= porcentajea;
    porcentajeB.innerText= porcentajeb;
    porcentajeC.innerText= porcentajec;

}
/* Ejercicio9 */
const btnResultado9 = document.getElementById("btnresultado9");
btnResultado9.onclick = function() {
    let precio= parseInt(prompt("ingrese el precio base"));
    igv = precio*0.19;
    preciofinal = precio+igv;
    const resultado9 = document.getElementById("resultado9");
    resultado9.innerText= "El igv es: S/"+igv+". Y el precio final es: S/"+preciofinal;
}

/* Ejercicio10 */
const btnResultado10 = document.getElementById("btnresultado10");
btnResultado10.onclick = function() {
    let general= parseInt(prompt("ingrese el numero de entradas General vendidas"));
    let mayores= parseInt(prompt("ingrese el numero de entradas para mayores de 65 vendidas"));
    let menores= parseInt(prompt("ingrese el numero de entradas para menores de edad vendidas"));
    recaudadogeneral = general*150;
    recaudadomayores = mayores*50;
    recaudadomenores = menores*80;
    totalrecaudado = recaudadogeneral+recaudadomayores+recaudadomenores;
    const resultado10 = document.getElementById("resultado10");
    resultado10.innerText= "En entradas general se recaudo: S/"+recaudadogeneral+", en entradas mayores de 65 se recaudo: S/"+recaudadomayores+", en entradas menores de edad se recaudo: S/"+recaudadomenores+". En total se recaudo: S/"+totalrecaudado;
}