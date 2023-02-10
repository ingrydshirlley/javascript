/*****************************************************************
 * Objetivo: Usar calcálos matemáticos (soma, subtração, divisão, multiplicação).
 * Data: 30/01//2023
 * Autor: Ingryd
 * Versão: 1.0
******************************************************************/

console.log('************************Calculadora************************');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o primeiro valor: \n', function (numero1) {
    let valor1 = parseFloat(numero1.replace(',', '.'));

    if (numero1 == '') {
        console.log('Digite números!')
    } else if (isNaN(valor1)) {
        console.log('Apenas números!')
    } else {
        entradaDados.question('Digite o segundo valor: \n', function (numero2) {
            let valor2 = parseFloat(numero2.replace(',', '.'));

            if (numero2 == '') {
                console.log('Digite números!')
            } else if (isNaN(valor2)) {
                console.log('Apenas números!')
            } else {

                entradaDados.question('Agora, escolha a operação: \n Aperte: \n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n', function (operacao) {
                    operacao = operacao;
                    let resultado = 0;
                    if (Number(operacao) == 1) {
                        resultado = (valor1 + valor2)
                        console.log('Resultado: ' + resultado);

                    } else if (Number(operacao) == 2) {
                        resultado = valor1 - valor2
                        console.log('Resultado: ' + resultado.toFixed(3));
                    } else if (Number(operacao) == 3) {
                        resultado = valor1 * valor2
                        console.log('Resultado: ' + resultado.toFixed(3));
                    } else if (Number(operacao) == 4) {
                        resultado = (valor1 / valor2)
                        console.log('Resultado: ' + resultado);
                    } else if (operacao == '') {
                        console.log('Erro: escolha números validos.')
                    } else if (isNaN(operacao)) {
                        console.log('Erro: digite números validos.')
                    } else if (operacao < 1 || operacao > 4) {
                        console.log('Selecione um número de 1 até 4')
                    } 
                })
            }
        })
    }
    
})









