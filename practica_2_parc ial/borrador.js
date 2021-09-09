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
    }
]
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
        masImpuesto: function(impuesto) {
            for (let index = 0; index < this.departamentos.length; index++) {
                this.departamentos[index].precioAlquiler += (this.departamentos[index].precioAlquiler)*impuesto/100           
            }
            return this.departamentos
        },

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

console.log(inmobiliaria.rebajasPorNoAlquiler())
