const archivos = require("./lecturaEscritura");
let arrayDepartamentos = archivos.leerJson("departamentos");

let inmobiliaria = {
  departamentos: arrayDepartamentos,
  listarDepartamentos(arrayDeptos) {
    arrayDeptos.forEach(departamento => {
      console.log(' id: ' + departamento.id +
      ' precio $' + departamento.precioAlquiler +
      ' está ' + (departamento.disponible ? 'Disponible' : 'Alquilado') +
      ', ' + departamento.cantidadHabitacion + ' habitaciones' 
      )
    });
  },
  buscarPorId: function(id) {
    return this.departamentos.find(depto => depto.id === id)
  },
departamentosNoDisponibles: function() {
    let dptosNoDisponibles = this.departamentos.filter(depto => !depto.disponible)
    return dptosNoDisponibles
},

//2 E
departamentosDisponibles: function() {
    let dptosNoDisponibles = this.departamentos.filter(depto => depto.disponible)
    return dptosNoDisponibles
},

//2 F
filtrarPorAmbientes: function(num) {
    let ambientesFiltrados = this.departamentos.filter(depto => depto.cantidadHabitacion >= num)
    return ambientesFiltrados
},

filtrarPorPrecio: function(num) {
    let deptosDisponibles = this.departamentosDisponibles()
    let preciosFiltrados = deptosDisponibles.filter(deptos => deptos.precioAlquiler <= num)
    return preciosFiltrados
},
}

//inmobiliaria.listarDepartamentos(inmobiliaria.departamentos)
console.log(inmobiliaria.filtrarPorPrecio(5000))