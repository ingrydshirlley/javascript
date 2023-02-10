var oi = require('./modulo/calcularTabuada.js')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Multipicando: \n', function (multipicando) {
    let multipicando = multipicando.replace(',', '.');

    entradaDados.question('Maximo Multiplicador: \n', function (maxMultiplicador) {
        let maxMultiplicador = maxMultiplicador.replace(',', '.');

            let resultado;  
    })
});
