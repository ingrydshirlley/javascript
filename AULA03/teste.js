var readline = require('readline');


var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite um numero: \n', function (numero) {
    let i = Number(numero);

    for (i >= 1; i <= 3; i++) {
        console.log('oiiii');
    }
    console.log('Fim do loop!!')


});

function helloWorld() {
    console.log('Hello ')
}