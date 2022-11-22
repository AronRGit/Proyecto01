const boton = document.getElementById("btncalcular");

boton.onclick = function(){
let importe = parseInt(prompt("Ingrese el monto de importe"));
let importefinal = 0;
if (importe>=150) {
    descuento = importe*0.12;
    importefinal= importe-descuento;
}
else{
    importefinal=importe;
}
const importeFinal = document.getElementById("importefinal");
importeFinal.innerText="El importe final a pagar es S/"+importefinal.toFixed(2);

}
const boton1 = document.getElementById("btncalcular1");

boton1.onclick = function(){
    let nombre= prompt("Ingrese el nombre del alumno");
    let ep = parseInt(prompt("Ingrese la nota del examen parcial"));
    let ef = parseInt(prompt("Ingrese la nota del examen final"));
    let pp = parseInt(prompt("Ingrese la nota de promedio de practicas"));
    let mensaje = "";
    promedio = (ep*0.25)+(ef*0.25)+(pp*0.5);
    const resultado = document.getElementById("resultado");
    if(promedio>10){
        mensaje = "El alumno "+nombre+"tiene de promedio "+promedio;
    }
    else{
        mensaje = "No aprobado";
    }
    resultado.innerText = mensaje;

}
