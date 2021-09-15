const jsonHelper = require("./ejPG.js")

const concesionaria = {
    autos: jsonHelper.lector('AUTOS'),

    agregarAuto: function(marca, modelo, anio, precio, patente){
        let auto = {marca: marca, modelo: modelo, anio: anio, precio: precio, patente: patente, vendido: false}
        this.autos.push(auto)
    }
}

console.log(concesionaria.agregarAuto('Fiat', 'Punto', 2021, 1500000, 'SS111AB')); 
console.log(concesionaria.autos)