
let x = 10;
let y = "a";

//true//
console.log(y === "b" || x >= 10);

let a = 3;
let b = 8;

//false //
console.log(!(a == "3" || a === b) && !(b !== 8 && a <= b));

let str = ""
let msj = "jaja!"
let esGracioso = "false"

//false//
console.log(!((str || msj) && esGracioso))

console.log("--------------------------")

//Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
//debe ser mayor a 1,30 m

let edad = 12;
let altura = 130;

let puedoSubir = edad > 12 && altura > 130;

console.log(puedoSubir)

//Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
//debe usar el flash

let luz = "suficiente";
let objeto = "no mueve rápidamente"

let usarFlash = (luz === "insuficiente" || objeto === "se mueve rápidamente");

console.log(usarFlash)

//Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
//parciales, o si obtiene un 4 en el examen final.

nota1 = 10;
nota2 = 2;
final = 2;

let pasaNivel = (nota1 > 7 && nota2 > 7 ) || final >= 4;

console.log(pasaNivel)

//Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
//prácticas de piano y lo hizo de memoria

tarea = "si";
piano = "no";
memoria = "si";

let verTV = tarea === "si" && piano === "si" && memoria === "si";

console.log(verTV)