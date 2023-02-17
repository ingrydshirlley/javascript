/*****************************************************************
 * Objetivo: Usar calcálos matemáticos (soma, subtração, divisão, multiplicação).
 * Data: 03/02//2023
 * Autor: Ingryd
 * Versão: 1.0
 ******************************************************************/

/* var oi = require('./modulo/media.js') */
var readline = require('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Nome do aluno: ', function (nomeAluno) {

    entradaDados.question('Sexo do aluno [FEMININO | MASCULINO]: ', function (sexoAluno) {
        let sexoDoAluno = sexoAluno.toUpperCase();
        if (sexoDoAluno.toUpperCase() == 'FEMININO') {
            console.log('oi');
        } else if (sexoDoAluno.toUpperCase() == 'MASCULINO') {
            console.log('tchau');
        } else if (sexoDoAluno == '') {
            console.log('Por favor, informe o sexo');
        } else if (sexoDoAluno != 'FEMININO' || sexoDoProfessor != 'MASCULINO') {
            console.log('NAOOOOOOO');
        }
        entradaDados.question('Nome do professor: ', function (nomeProfessor) {

            entradaDados.question('Sexo do professor [FEMININO | MASCULINO]: ', function (sexoProfessor) {
                let sexoDoProfessor = sexoProfessor.toUpperCase();
                if (sexoDoProfessor.toUpperCase() == 'FEMININO') {
                    console.log('oi');
                } else if (sexoDoProfessor.toUpperCase() == 'MASCULINO') {
                    console.log('tchau');
                } else if (sexoDoProfessor == '') {
                    console.log('Por favor, informe o sexo');
                } else if (sexoDoProfessor != 'FEMININO' || sexoDoProfessor != 'MASCULINO') {
                    console.log('NAOOOOOOO');
                }

                entradaDados.question('Nome do curso: ', function (NomeCurso) {

                    entradaDados.question('Nome da disciplina: ', function (NomeDisciplina) {

                        entradaDados.question('Digite a nota 1: ', function (numero1) {
                            let nota = Number(numero1);
                            if (nota == '') {
                                console.log('digite um numero seu tonto');
                            } else if (nota == isNaN) {
                                console.log('so aceitamos numeros');
                            }

                            entradaDados.question('Digite a nota 2: ', function (numero2) {

                                entradaDados.question('Digite a nota 3: ', function (numero3) {

                                    entradaDados.question('Digite a nota 4: ', function (numero4) {

                                    });

                                });

                            });

                        });

                    });

                });

            });

        });

    });

});