
function sumar(a, b) {
    return a + b;
} 

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a/ b;
}

console.log("-----------Testeo de Operaciones/Calculadora------------")
console.log(sumar(4,5))
console.log(restar(4,5))
console.log(multiplicar(4,2))
console.log(dividir(10,2))
console.log(dividir(10,0))

console.log("-----------Extra------------")

function cuadradoDeUnNumero(a) {
    return multiplicar(a,a);
}
console.log(cuadradoDeUnNumero(3))

function promedioDeTresNumeros(a, b, c) {
    let primera_suma = sumar(a, b);
    let suma = sumar(primera_suma, c);
    let resultado = dividir(suma, 3);
    return resultado;
}
console.log(promedioDeTresNumeros(2,3,4))

function calcularPorcentaje(numero, porcentaje) {
    return dividir(multiplicar(numero, porcentaje), 100);
}
console.log(calcularPorcentaje(300,15))

function GeneradorDePorcentaje(a, b) {
    return dividir(multiplicar(a, 100), b);
}
console.log(GeneradorDePorcentaje(2, 200))
