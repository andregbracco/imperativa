const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Andrea Bracco";
const tema = "TEMA 1";

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
  },
  {
    id: 2,
    estaHabilitado: false,
    honorarioConsulta: 2208.17,
    edad: 36,
    nombre: "pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 0,
    puntaje: 7,
  },
  {
    id: 3,
    estaHabilitado: false,
    honorarioConsulta: 3266.71,
    edad: 20,
    nombre: "leanne Burch",
    email: "leanneburch@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 1,
    puntaje: 5,
  },
  {
    id: 4,
    estaHabilitado: false,
    honorarioConsulta: 2674.09,
    edad: 31,
    nombre: "haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 4,
  },
  {
    id: 5,
    estaHabilitado: true,
    honorarioConsulta: 1851.37,
    edad: 27,
    nombre: "tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 6,
  },
  {
    id: 6,
    estaHabilitado: true,
    honorarioConsulta: 2568.94,
    edad: 34,
    nombre: "russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 4,
    puntaje: 10,
  },
  {
    id: 7,
    estaHabilitado: true,
    honorarioConsulta: 2601.76,
    edad: 36,
    nombre: "dodson Shaffer",
    email: "dodsonshaffer@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 0,
  },
  {
    id: 8,
    estaHabilitado: true,
    honorarioConsulta: 1949.92,
    edad: 40,
    nombre: "guerra Bright",
    email: "guerrabright@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 8,
    puntaje: 0,
  },
  {
    id: 9,
    estaHabilitado: true,
    honorarioConsulta: 3898.11,
    edad: 20,
    nombre: "dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 6,
    puntaje: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    honorarioConsulta: 2745.73,
    edad: 27,
    nombre: "stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 6,
  },
  {
    id: 11,
    estaHabilitado: false,
    honorarioConsulta: 2808.98,
    edad: 39,
    nombre: "joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
    puntaje: 9,
  },
  {
    id: 12,
    estaHabilitado: true,
    honorarioConsulta: 1941.13,
    edad: 21,
    nombre: "mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 8,
    puntaje: 3,
  },
  {
    id: 13,
    estaHabilitado: false,
    honorarioConsulta: 3930.0344999999998,
    edad: 23,
    nombre: "ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 1,
    puntaje: 3,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A Crear un objeto literal que represente la empresa. Este objeto literal lo llamaremos por ejemplo appProfesionales . Agregar una propiedad llamada profesionales que contenga al array de profesionales.
const appProfesionales = {
  profesionales,
// B Agregar un método listarProfesionales que permita confeccionar un listado que facilite al usuario, leer los datos de los profesionales que estén dentro del array que se recibe por parámetro, de manera que imprima por consola los siguientes datos con este formato:
//  id 3 inactivo, Neumonología, Leanne Burch, valor consulta $3266.71, puntaje: 5
//  id 8 ok, Neumonología, Guerra Bright, valor consulta $1949.92, puntaje: 0
  listarProfesionales: function() {
    for (let index = 0; index < this.profesionales.length; index++) {
      let disponibilidad = this.profesionales[index].estaHabilitado ? 'ok' : 'inactivo'
      console.log(
        `id ${this.profesionales[index].id} ${disponibilidad}, ${this.profesionales[index].especialidad}, ${this.profesionales[index].nombre}, valor consulta $ ${this.profesionales[index].honorarioConsulta}, puntaje: ${this.profesionales[index].puntaje} `
      )     
    }
  },
// C Agregar un método filtrarMejoresPuntajes que permita filtrar profesionales cuyos puntajes superen un mínimo de 7 puntos inclusive
// Este método deberá retornar un array de profesionales con mejores puntajes
  filtrarMejoresPuntajes: function() {
    let mejoresPuntajes = []
    for (let index = 0; index < this.profesionales.length; index++) {
      if (this.profesionales[index].puntaje >= 7) {
        mejoresPuntajes.push(this.profesionales[index])
      }
      
    }return mejoresPuntajes
  },
// D Agregar un método buscarPorID que permita buscar dentro de la propiedad de nuestro objeto profesionales un profesional por la propiedad id, la misma deberá ser igual a un id que se envía como argumento al momento de invocarlo
  buscarPorID: function(id) {
    for (let index = 0; index < this.profesionales.length; index++) {
      if (this.profesionales[index].id == id) {
        return this.profesionales[index]
      }
      
    }return 'ID no existe'
  },
// E Agregar un método habilitarProfesional que permite cambiar el estado de la propiedad de un profesional estaHabilitado  a true, él mismo deberá realizar los siguiente pasos
//Recibe como parámetro el id del profesional y reutiliza el método buscarPorID para obtener el profesional.
//Una vez encontrado el profesional deberá cambiar el valor de la propiedad estaHabilitado a true.
  habilitarProfesional: function(id) {
    let dato = this.buscarPorID(id)
    dato.estaHabilitado = true;
    return dato;
  },
// F Agregar un método corregirNombres que corrija los nombres de todos los profesionales pasando la primera letra a mayúscula. Por ejemplo “julián Martinez” deberán modificarlo por “Julián Martinez”
  corregirNombres: function() {
    for (let index = 0; index < this.profesionales.length; index++) {
      //let nombres = this.profesionales[index].nombre
      //this.profesionales[index].nombre = this.profesionales[index].nombre.replace(this.profesionales[index].nombre[0], this.profesionales[index].nombre[0].toUpperCase())
      this.profesionales[index].nombre[0] = this.profesionales[index].nombre[0].toUpperCase()
      
    }return this.profesionales
  },

  corregirEmails: function() {
    for (let index = 0; index < this.profesionales.length; index++) {
      if (this.profesionales[index].email.includes('#')) {
        this.profesionales[index].email = this.profesionales[index].email.replace('#', '@')
      }
      
    }return this.profesionales
  }
}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
// Ejecución aquí
//appProfesionales.listarProfesionales()

console.log(o);

console.log(v, oo + "   C. filtrarMejoresPuntajes");
// Ejecución aquí
//console.log(appProfesionales.filtrarMejoresPuntajes())

console.log(o);

// console.log(v, oo + " D. buscarPorId(1)");
// // Ejecución aquí
// console.log(appProfesionales.buscarPorID(1))

// console.log(o);

// console.log(v, oo + "  E. habilitarProfesional");
// // Ejecución aquí
// console.log(appProfesionales.habilitarProfesional(0))

// console.log(o);

// console.log(v, oo + " F. corregirNombres");
// // Ejecución aquí
// console.log(appProfesionales.corregirNombres())
// console.log(o);

console.log(appProfesionales.corregirNombres())
