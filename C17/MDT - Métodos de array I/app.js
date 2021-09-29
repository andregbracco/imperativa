const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");


//A

arrayProfesionales.forEach(profesional => {console.log(profesional.nombre + ' - ' + profesional.especialidad)

});

//B
arrayProfesionales.forEach(profesional => profesional.honorarioConsulta*-1.05);
archivos.escribirJson('profesionales', arrayProfesionales)
//console.log(arrayProfesionales)

//C
let habilitados = arrayProfesionales.filter(profesional => profesional.estaHabilitado)
//console.log(habilitados)

//D
//console.log('puntoD')
let arquitectos = arrayProfesionales.filter(profesional => profesional.especialidad === 'Arquitecto')
//console.log(arquitectos)

//E


//F
//deshabilitados.forEach(profesional => profesional.estaHabilitado=true)

//G 
//console.log('puntoG')
//console.log(arrayProfesionales.reduce((acum, valor) => acum + valor.cantidadConsultas,0))

//H 
let arrayRecaudacion = arrayProfesionales.map(function(profesional){
    let objProfesional = {
        nombre: profesional.nombre,
        especialidad: profesional.especialidad,
        recaudacion: profesional.cantidadConsultas*profesional.honorarioConsulta
    }
    return objProfesional
})
//console.log(arrayRecaudacion)


let primerosCincoProfesionales = arrayProfesionales.slice(0, 5);
console.log(primerosCincoProfesionales);