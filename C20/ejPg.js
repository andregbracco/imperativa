const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

// Utilizar un método de array que retorne los primeros 5 profesionales del arrayProfesionales, no debe modificar él array original, él resultado de este método asignar a una variable primerosCincoProfesionales luego hacer la impresión de la misma

let primerosCincoProfesionales = arrayProfesionales.slice(0, 5);
// console.log(primerosCincoProfesionales);

// Utilizar un método de array que nos permita reemplazar el profesional con id 14 por un nuevoProfesional, es decir se modificará él arrayProfesionales, luego imprimir él mismo para verificar él cambio.


// Ahora necesitamos un método para ordenar él arrayProfesionales de según la propiedad honorarioConsulta de menor a mayor, mostrar él array ordenado
let ordenar = arrayProfesionales.sort(
    (a,b) => a.honorarioConsulta - b.honorarioConsulta
)
//console.table(ordenar)

// Utilizar un método para realizar una búsqueda sobre él arrayProfesionales del profesional con identificador 15,es decir, que retorne solo un profesional. Asignar este resultado a una variable luego realizar la impresión de la misma.
let encontrar = arrayProfesionales.find(
    (profesional) => profesional.nombre === 'Will Smith'
);
//console.log(encontrar)

// Extra: ahora sobre todos los métodos que desarrollamos en estas dos mesas 19 y 20 podemos crear funciones para poder reutilizarlos, también crear una función que utilizando él módulo lecturaEscritura logremos hacer la persistencia en él archivo json cada vez que modifiquemos él arrayProfesionales

let especialidades = (array) => {
    array.forEach((profesional) => 
    console.log(profesional.nombre + ' ' + profesional.especialidad)
    );
}

//especialidades(arrayProfesionales)

let aumento = (array, incremento) => {
    array.forEach(
        (profesional) => (profesional.honorarioConsulta *= incremento / 100), 0
    )
}

console.log(aumento(arrayProfesionales, 1,05))
console.table(arrayProfesionales)


