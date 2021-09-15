let str = 'un string cualquiera';

let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '54', str ];

//console.log(arrayAleatorio[arrayAleatorio.length - 1])


let arrayPeliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]



function peliculasMayus(arrayPeliculas) {
    let cantidad = arrayPeliculas.length - 1;
    arrayPeliculas[cantidad] = arrayPeliculas[cantidad].toUpperCase()

    cantidad -= 1;
    arrayPeliculas[cantidad] = arrayPeliculas[cantidad].toUpperCase()

    cantidad -= 1;
    arrayPeliculas[cantidad] = arrayPeliculas[cantidad].toUpperCase()

    cantidad -= 1;
    arrayPeliculas[cantidad] = arrayPeliculas[cantidad].toUpperCase()

    cantidad -= 1;
    arrayPeliculas[cantidad] = arrayPeliculas[cantidad].toUpperCase()

}

peliculasMayus(arrayPeliculas)


let nuevoArray = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

peliculasMayus(nuevoArray)

let videojuegoEliminado = nuevoArray.pop()

console.log(arrayPeliculas + nuevoArray)
console.log(videojuegoEliminado)

const asiaScores = [8, 10, 6, 9, 10];
const euroScores = [8, 10, 6, 8, 10];

function compara(asia, euro) {
    let cantidad = 0;
    if (asia[cantidad] == euro[cantidad]) {
        cantidad += 1;
        if (asia[cantidad] == euro[cantidad]) {
            cantidad += 1;
            if (asia[cantidad] == euro[cantidad]){
                cantidad += 1;
                if (asia[cantidad] == euro[cantidad]){
                    cantidad += 1;
                }else {
                    return `No son iguales por el índice ${cantidad}`
                }
            }else {
                return `No son iguales por el índice ${cantidad}`
            }
        }else {
            return `No son iguales por el índice ${cantidad}`
        }
    } else {
        return `No son iguales por el índice ${cantidad}`
    }
}

console.log(compara(asiaScores, euroScores))

