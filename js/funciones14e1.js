let nhombres = parseInt(prompt("Ingrese el numero de hombres"));
let nmujeres = parseInt(prompt("Ingrese el numero de mujeres"));

let total = nhombres + nmujeres;

let porcentajeH = nhombres / total;
porcentajeM = nmujeres / total;

porcentajeH = porcentajeH.toFixed(2)*100;
porcentajeM = porcentajeM.toFixed(2)*100;



const hombres = document.getElementById("hombres");
const mujeres = document.getElementById("mujeres");

hombres.innerText= "el porcentaje de hombres es "+porcentajeH+"%";
mujeres.innerText= "el porcentaje de mujeres es "+porcentajeM+"%";