const jsonHelper = require('./lecturaEscritura')

const carrera = {
    autos: jsonHelper.leerJson('autos'),
    autosPorTanda: 6,
    autosHabilitados: function() {
        return this.autos.filter((auto) => !auto.sancionado);
    },
    listarAutos: function(array) {
        array.forEach((elemento) => {
            console.log(`Piloto: ${elemento.piloto}, patente: ${elemento.patente}, peso en kg; ${elemento.peso}, estado: ${elemento.sancionado ? 'sancionado' : 'habilitado'}`)

        })
    },
    buscarPorPatente: function(patente) {
        return this.autos.find((auto) => auto.patente === patente)
    },
    filtrarPorCilindrada: function(cilindrada) {
        //let disponibles = this.autosHabilitados()
        //let resultado = disponibles.filter((auto) => auto.cilindrada <= cilindrada )
        //return resultado
        return this.autosHabilitados().filter((auto) => auto.cilindrada <= cilindrada )
    },
    pesoPromedio: function() {
        //let habilitados = this.autosHabilitados()
        //let total = habilitados.reduce((acum, auto) => acum + auto.peso, 0)
        //let promedio = total/habilitados.length
        //return `El promedio de los veh habilitados es de ${promedio}kg`
        return `El promedio de los veh habilitados es de ${(this.autosHabilitados().reduce((acum, auto) => acum + auto.peso, 0)) / this.autosHabilitados().length}kg`
    },
    ordenarPorVelocidad: function(autos) {
        let autosOrdenados = autos.sort((a,b) => {
            return a.velocidad - b.velocidad;
        })
        return autosOrdenados;
    },
    habilitarVehiculo : function(patente) {
        let auto = this.buscarPorPatente(patente)
        //auto.sancionado ? auto.sancionado = false :  auto.sancionado = false
        if (auto) {
            auto.sancionado = false;
            jsonHelper.escribirJson('autos', this.autos);
            return auto
            
        }else return 'undifined'
    },
    generarTanda: function(cilindrada) {
        let resultado = this.autos.filter((auto) => { 
            return !auto.sancionado && auto.cilindrada <= cilindrada
        });
        if (resultado.length <= this.autosPorTanda) {
             return resultado
        } else return `más vueltas que ${this.autosPorTanda}`
    },
    listarPodio: function(arrayAutos) {
        let lista = arrayAutos.sort((a,b) => {
            return b.puntaje - a.puntaje;
        })
        lista = lista.slice(0,3)
        return lista
    }
};

console.log(carrera.listarPodio(carrera.autos))




