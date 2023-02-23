/*****************************************************************
 * Objetivo: Diferenciar números pares e ímpares 
 * Data: 22/02//2023
 * Autor: Ingryd
 * Versão: 1.0
******************************************************************/

var parImpar = require('./modulo/parImpar.js');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número inicial: ', function(valorInicial) {
    let valorInicio = valorInicial;

    entradaDados.question('Digite o número final: ', function(valorFim) {
        let valorFinal = valorFim;

        console.log('\n1- Par, 2- Impar, 3- Par e Impar');
        entradaDados.question('Digite a sua escolha: ', function(escolha) {
            let escolhaUsuario = escolha;

            let resultado = parImpar.parImpar(valorInicio, valorFinal, escolhaUsuario)
        })
    })
})