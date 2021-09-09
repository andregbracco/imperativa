const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Bracco, Andrea";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const inmobiliaria = {
// A
    departamentos: departamentos,
// B
    listaDepartamentos: function(arrayDeptos){
        for(let i = 0; i < arrayDeptos.length; i++){
            let disponibilidad = arrayDeptos[i].disponible ? 'disponible' : 'alquilado'
            let mascotas = arrayDeptos[i].aceptaMascotas ? 'acepta' : 'no acepta'
            console.log(
                `id: ${arrayDeptos[i].id}, precio $ ${arrayDeptos[i].precioAlquiler}, está ${disponibilidad}, ${arrayDeptos[i].cantidadHabitacion} ambientes, máximo ${arrayDeptos[i].cantidadPersonas} personas, ${mascotas} mascotas, propietarios: ${arrayDeptos[i].propietarios}`
            )
        }
    },

    
// C
    departamentosDisponibles: function() {
        let disponibles = []
        for (let i = 0; i < this.departamentos.length; i++) {
            if(this.departamentos[i].disponible) {
                disponibles.push(this.departamentos[i]);
            }     
        }return disponibles
    },
// D
    buscarPorId: function(id) {
        for (let i = 0; i < this.departamentos.length; i++) {
            if(id === this.departamentos[i].id) {
                return this.departamentos[i];
            }
            
        }
    },

// E
    buscarPorPrecio: function(precio) {
        let deptosDisp = this.departamentosDisponibles()
        let lista = []
        for(let index = 0; index < deptosDisp.length; index++) {
            if((deptosDisp[index].precioAlquiler) <= precio) {
                lista.push(deptosDisp[index])
            }
            
        }return lista
    },

// F
    precioConImpuesto: function(porcentaje) {
        let arrayAumentado = []
        for (let index = 0; index < this.departamentos.length; index++) {
            let impuesto = this.departamentos[index].precioAlquiler*(porcentaje/100);
            this.departamentos[index].precioAlquiler += impuesto
            arrayAumentado.push(this.departamentos[index])            
        }
        return arrayAumentado
    },

// G
    simplificarPropietarios: function() {
      for (let index = 0; index < this.departamentos.length; index++) {
          let losPropietarios = this.departamentos[index].propietarios;
          let desde = losPropietarios.indexOf(":");
          let soloPropietarios = losPropietarios.slice(desde);
          this.departamentos[index].propietarios = "Prop." + soloPropietarios;
        }
        return this.departamentos;
    },
    alquilar: function(id) {
      for (let index = 0; index < this.departamentos.length; index++) {
        if (id == this.departamentos[index].id) {
          if (this.departamentos[index].disponible) {
            this.departamentos[index].disponible = false
            return this.departamentos[index];
          }else return 'ya está alquilado'
        }else return 'No existe'
        
      }
    },
    filtrarPetFriendly: function() {
      let listaAceptaPet = []
      for (let index = 0; index < this.departamentos.length; index++) {
        if (this.departamentos[index].aceptaMascotas) {
          listaAceptaPet.push(this.departamentos[index])
        }
        
      }return listaAceptaPet
    },
    rebajasPorNoAlquiler: function() {
      let listaRebajada = []
      for (let index = 0; index < this.departamentos.length; index++) {
        if (this.departamentos[index].disponible) {
          this.departamentos[index].precioAlquiler -= this.departamentos[index].precioAlquiler * 0.1
          listaRebajada.push(this.departamentos[index])
        }
        
      }return listaRebajada
    },
    buscarPorPropietarios: function(nombre) {
      listaPropietarios = []
      for (let index = 0; index < this.departamentos.length; index++) {
        if (this.departamentos[index].propietarios.includes(nombre)) {
          listaPropietarios.push(this.departamentos[index])
        }
        
      }return listaPropietarios
    }
};
/******************************/
/* Ejecución de las consignas */
/******************************/
//console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
//inmobiliaria.listaDepartamentos(departamentos)

console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
//inmobiliaria.listaDepartamentos(inmobiliaria.departamentosDisponibles())

console.log(o);

console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
//console.log(inmobiliaria.buscarPorId(80))

console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
//console.log(inmobiliaria.buscarPorPrecio(2500))

console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
//console.log(inmobiliaria.precioConImpuesto(10))

console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
//console.log(inmobiliaria.simplificarPropietarios())
console.log(o);

console.log(inmobiliaria.buscarPorPropietarios('Martín'))