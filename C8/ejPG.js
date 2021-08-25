
let edad=20; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

let par = true;

function PuedePasar(edad) {
    if(edad<18) {
        par = edad%0 ==0;
        if (par){
            return ("No puede ingresar, y tu edad es par")
        }
        else return ("No puede pasar al bar, y tu edad es impar")
    }
    else if(edad<21){
        if (edad%2 == 0) {
        return ("Tu edad es par")
    }
        if (par){
            return("Puede pasar al bar, pero no puede tomar alcohol, y tu edad es par")
        }
        else return ("Puede pasar, no tomar, edad impar.")
    }
    else if(edad === 21){
        return("Felicitaciones, sos mayor de edad, tu edad es impar")
    }
    else if(edad<0) {
        return("Error, edad inválida")
    }
    else if(edad>21){
        if (par%2 ==0){
            return ("podés pasar y tu edad es par")
        }
        else return ("podés pasar y tu edad es impar")
    }
}
console.log(PuedePasar(35))

let litrosConsumidos = 0;
let precio = 0;

function totalPagar(vehiculo, litrosConsumidos) {
    if (vehiculo== "coche") {
        litrosConsumidos = litrosConsumidos;
        if (litrosConsumidos > 0 && litrosConsumidos < 25) {
            return `Precio: ${86 * litrosConsumidos + 50}`
        } else return `Precio: ${86 * litrosConsumidos + 25}`
    }

    else if (vehiculo == "moto") {
        litrosConsumidos = litrosConsumidos;
        if (litrosConsumidos > 0 && litrosConsumidos < 25) {
            return `Precio: ${70* litrosConsumidos + 50}`
        } else return `Precio: ${70* litrosConsumidos +25}`
    }

    else if (vehículo == "autobús") {
        litrosConsumidos = litrosConsumidos;
        if (litrosConsumidos > 0 && litrosConsumidos < 25) {
            return `Precio: ${55* litrosConsumidos + 50}`
        } else return `Precio: ${55* litrosConsumidos +25}`
    }
}

console.log(totalPagar("moto", 30))


function pedidoSand(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    precio_total = 0;
    if (base == "pollo"){
        precio_total = 150;
    }
    else if (base = "carne"){
        precio_total = 200;
    }
    else if (base = "vegetariano"){
        precio_total = 100;
    }
    if (pan == "blanco"){
        precio_total += 50;
    }
    else if (pan == "negro"){
        precio_total += 60;
    }
    else if (pan == "sin gluten"){
        precio_total += 75;
    }
    if(queso) {precio_total += 20}
    if(tomate) {precio_total += 15}
    if(lechuga) {precio_total += 10}
    if(cebolla) {precio_total += 15}
    if(mayonesa) {precio_total += 5}
    if(mostaza) {precio_total += 5}
    return precio_total
}

console.log(pedidoSand("carne", "blanco", true, false, false, false, false, false))

function secreto(a) {
    let numero = Math.floor(Math.random()*11);
    if (a === numero){
        return "Siiii"
    }
    else return `Número secreto: ${numero}, tu número ${a}`
}

console.log(secreto(4))

function abrirParacaidas(velocidad, altura){
    if ((velocidad < 1000) && (altura >= 2000 && altura < 3000)) {
        return "Abrir paracaídas";
    } else return "No abrir aún"
}

console.log(abrirParacaidas(100, 2500))

switch ("arbol") {
    case "perro":
        console.log("dog");
        break;
    case "casa":
        console.log("house");      
        break;
    case "arbol":
        console.log("tree");
        break;

    default:
        console.log("ingresá perro, casa o árbol")
}

let hecho = false;

if (!hecho){

    switch ("muy mala") {
        case "muy mala":
            console.log("calificaste la peli como muy mala, lo lamentamos");
            break;
        case "mala":
            console.log("calificaste la peli como mala, lo lamentamos");     
            break;
        case "mediocre":
            console.log("calificaste la peli como mediocre, lo lamentamos");     
            break;
        case "buena":
            console.log("calificaste la peli como buena :) ");     
            break;
        case "muy buena":
            console.log("calificaste la peli como muy buena :D");     
            break;
        default:
            console.log("valor inválido")
    }
    hecho = true;
    console.log("gracias")
}


