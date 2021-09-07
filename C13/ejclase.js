//arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]

function arregloDeObjetos(numero) {
    let resultado = [];
    for(let i = 1 ; i <= numero ; i++) {
        let objeto = {
            valor: i
        };
        resultado.push(objeto)
    }
    return resultado
}

//arregloDeObjetosDos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]

function arregloDeObjetosDos(numero, palabra) {
    let resultado = [];
    for(let i = 1 ; i <= numero ; i++) {
        let objeto = {};
        objeto[palabra] = i;
        resultado.push(objeto)
    };
    return resultado
};

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

const banco = {
    clientes: arrayCuentas,

    consultarCliente: function(titular) {
    for (let i = 0; i < this.clientes.length ; i++) {
        let cliente = this.clientes[i];
        if(titular === cliente.titularCuenta) {
            return cliente
        }
        
    }
    },
    deposito: function(titular, dinero) {
        cliente = this.consultarCliente(titular)
        let saldo = cliente.saldoEnPesos;
        saldo += dinero;
        return `Depósito realizado, su nuevo saldo es: ${saldo}`
   },
   extraccion: function(titular, monto) {
       cliente = this.consultarCliente(titular)
       let saldo = cliente.saldoEnPesos;
       saldo -= monto;
       if (saldo > 0) {
           return `Extracción realizada correctamente, su nuevo saldo es: ${saldo}`
       } else return 'Saldo insuficiente'
   }
}

//let clienteEncontrado = banco.consultarCliente('Jarret Lafuente')
//let clienteDeposita = banco.deposito('Abigael Natte', 20000)
//let clienteExtrae = banco.extraccion('Abigael Natte', 20000)

let array = [
    {nombre: 'Lean', edad: 27 },
    {nombre: 'Eze', edad: 49}
]

function propiedadUnica(arreglo, string) {
    let nuevoArreglo = []
    for (let index = 0; index < arreglo.length; index++) {
        let objeto = {};
        objeto[string] = arreglo[index][string];
        nuevoArreglo.push(objeto)
    }
    return nuevoArreglo
}
//console.log(propiedadUnica(arrayCuentas, 'saldoEnPesos'))

let alumno = [
    {nombre: 'Bombón', legajo: 333, notas: [10, 10, 10]},
    {nombre: 'Shaggy', legajo: 555, notas: [9, 4, 8]},
    {nombre: 'Chimuelo', legajo: 777, notas: [10, 10, 10]},
    {nombre: 'Jengibre', legajo: 404, notas: [9, 10, 8]}
];

function promedioAprobacion(array, nombre, nota ) {
    for (let index = 0; index < array.length; index++){
        let dato = array[index]
        if (dato['nombre'] == nombre) {
            let listaNotas = dato['notas'];
            let suma = 0;
            for (let index = 0; index < listaNotas.length; index++) {
                suma += listaNotas[index];              
            }
            let promedio = suma / listaNotas.length
            if (promedio >= nota) {
                return "Alumno aprobado"
            } else return "Alumno desaprobado"
        }
    }
};
//console.log(promedioAprobacion(alumno, 'Chimuelo', 8))


let a = 2
while (a < 5) {
    console.log(a)
    a += 1
}

