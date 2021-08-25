function convierteURL(string) {
    return "html://www."+ string + ".com"
}
console.log(convierteURL("pepito"))

function agregaAdmiracion(string) {
    return string + ("!")
}
console.log(agregaAdmiracion("Hola Hola"))

function edadPerro(edad) {
    return edad*7
}
console.log(edadPerro(8))

function valorPorHora(salario) {
    return salario/40
}
console.log(valorPorHora(50000))

function calculadorIMC(altura, peso) {
    return peso/ altura*altura
}
console.log(calculadorIMC(173, 70))
// --------- // 

function mayus(string) {
    return string.toUpperCase()
}
console.log(mayus("hola grupo"))

function tipoDeDato(dato) {
    return typeof(dato)
}
console.log(tipoDeDato(3333))

function circunsferencia(radio) {
    return Math.PI * radio*2
}
console.log(circunsferencia(2))







