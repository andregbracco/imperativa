function encontreUn5(numeros) {
    let indice = 0;
    do {
        if (numeros[indice] == 5) {
            console.log("Se encontró un 5!");
            break;
        } else {
            console.log(numeros[indice]);
            indice++;
        }
    } while(indice <= numeros.length);

}

function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí   
    let i = 1;
    while (i <= 10) {
        let resultado = numero * i;
        console.log(numero + " * " + i + " = " + resultado);
        i++;
    }
}

tablaDeMultiplicar(2)