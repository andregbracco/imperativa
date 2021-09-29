
//const jsonHelper = require("./ejPG.js")

//const concesionaria = {
 //   autos: jsonHelper.lector('AUTOS'),

 //   agregarAuto: function(marca, modelo, anio, precio, patente){
 //       let auto = {marca: marca, modelo: modelo, anio: anio, precio: precio, patente: patente, vendido: false}
  //      this.autos.push(auto)
 //   }
//}

//console.log(concesionaria.agregarAuto('Fiat', 'Punto', 2021, 1500000, 'SS111AB')); 
//console.log(concesionaria.autos)


function multiplicoCellback (num1, num2, callback) {
    return 2* callback(num1, num2)
};
let resultado = multiplicoCellback(2, 3, (a,b) => a + b);

console.log(resultado)

const nombres = ['Martín', 'Homero', 'Cosme']



function mostrarResultado(palabra) {
    if (palabra){
        return 'El nombre fue encontrado'
    }else return 'El nombre no fue encontrado'
}

// buscarNombre editada
function buscarNombre(nombre, lista, callback) {
       return callback((lista.includes(nombre)))
}

//console.log(buscarNombre('Flor', nombres, mostrarResultado))

const profesionales = [
    {
      id: 0,
      estaHabilitado: false,
      honorarioConsulta: 2007.68,
      edad: 29,
      nombre: "huber Wilkins",
      email: "huberwilkins#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 0,
      puntaje: 8,
    },
    {
      id: 1,
      estaHabilitado: true,
      honorarioConsulta: 2325.56,
      edad: 21,
      nombre: "goldie Haley",
      email: "goldiehaley@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 0,
      puntaje: 7,
    }
]

console.log(profesionales[0].email.replace('#', '@'))
console.log(profesionales[0].email)
console.log(profesionales[0].email.includes('#'))

let nom = ['andrea', 'pepito']

console.log(nom[0][0])

nom[0][0] = nom[0][0].toUpperCase()

