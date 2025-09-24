//funcion para obtener un Array ordenado
function ordenar(arr) {
    const nuevoArray = [...arr]; //copiando el array para no modificarlo

    for (let i = 0; i < nuevoArray.length - 1; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}
console.log(ordenar([14, 23, 99, 874, 93, 12]));

//funcion para verificar si un num es par
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(7));

//funcion para calcular la altura de la plantita
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++; 
        if (altura >= alturaDeseada) {
            return dias;
        }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}
console.log(calcularDiasCrecimiento(5, 2, 10)); 

// para mostrar los resultados al usuario (pide algo asi la rubrica)
const arrayOriginal = [14, 23, 99, 874, 93, 12];
const arrayOrdenado = ordenar(arrayOriginal);

const numero = 7;
const par = esPar(numero) ? "Sí" : "No";

const dias = calcularDiasCrecimiento(5, 2, 10);

// con un alert
alert(
`Array original: ${arrayOriginal}
Array ordenado: ${arrayOrdenado}
¿El número ${numero} es par?: ${par}
Días para alcanzar altura 10: ${dias}`
);
