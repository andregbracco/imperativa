
let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

function convertirAMayusculas(array) {
    let i = 0;
    while (i < peliculas.length) {
        peliculas[i] = peliculas[i].toUpperCase();
        i++;
    }
    return peliculas
}

//console.log(convertirAMayusculas(peliculas));

let arrayNumeros = [1,2,3,4,5];

function imprimitInverso(array) {
    for(let i = (array.length -1); i >= 0; i--){
        console.log(array[i])
    }
}

let lista = ["a", "b", "c", "d", "e"];

function inversor(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length ; i++) {
        nuevoArray.unshift(array[i]);
    }
    return nuevoArray;
}
console.log(inversor(lista))

