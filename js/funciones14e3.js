const btnResultado = document.getElementById("btnresultado");
btnResultado.onclick = function() {
    let general= parseInt(prompt("ingrese el numero de entradas General vendidas"));
    let mayores= parseInt(prompt("ingrese el numero de entradas para mayores de 65 vendidas"));
    let menores= parseInt(prompt("ingrese el numero de entradas para menores de edad vendidas"));
    recaudadogeneral = general*150;
    recaudadomayores = mayores*50;
    recaudadomenores = menores*80;
    totalrecaudado = recaudadogeneral+recaudadomayores+recaudadomenores;
    const resultado = document.getElementById("resultado");
    resultado.innerText= "En entradas general se recaudo: S/"+recaudadogeneral+", en entradas mayores de 65 se recaudo: S/"+recaudadomayores+", en entradas menores de edad se recaudo: S/"+recaudadomenores+". En total se recaudo: S/"+totalrecaudado;
}