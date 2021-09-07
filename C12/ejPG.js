const alicia = [23, 69, 32];
const bob = [25, 69, 35];


function encontrarGanador(participante1, participante2) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
   //continua con esto.

    for (let i = 0; i < participante1.length; i++) {
      if (participante1[i] > participante2[i]) {
        puntosPrimerParticipante++;
      } else if (participante1[i] < participante2[i]) {
        puntosSegundoParticipante++;
      } 
    }

    if (puntosPrimerParticipante > puntosSegundoParticipante) {
      return 'primer';
    } else if (puntosPrimerParticipante < puntosSegundoParticipante) {
      return 'segundo';
    } else {
      return 'ningun';
    }
}

//console.log("El ganador es: " + encontrarGanador(alicia, bob) + " participante");

function digitalHouse(a, b) {
    for (let i = 1; i <= 100; i++){
        if (i % a == 0 && i % b == 0) {
            console.log(i, "Digital House")
        } else if (i % b == 0) {
            console.log(i, "House")
        } else if (i % a == 0) {
            console.log(i, "Digital")
        } else {
            console.log(i)
        }
    }
}

//digitalHouse(2, 3)

function sumArray(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i]
    }
    return resultado;
}

//console.log(sumArray([1,2,3]))

function sumArray(lista) {
    let resultado = "";
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i]
    };
    return resultado
}

lista = ['h', 'o', 'l', 'a'];
console.log(sumArray(lista))