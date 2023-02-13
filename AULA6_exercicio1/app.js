/*****************************************************************
 * Objetivo: Usar calcálos matemáticos (soma, subtração, divisão, multiplicação).
 * Data: 03/02//2023
 * Autor: Ingryd
 * Versão: 1.0
 ******************************************************************/
var oi = require('./modulo/media.js')
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Nome do aluno: ', function(nomeAluno) {

    entradaDados.question('Sexo do aluno [FEMININO | MASCULINO]: ', function(sexoAluno) {
        let sexoDoAluno = sexoAluno;
        if (sexoDoAluno == 'feminino') {
            console.log('oi');
        } else if (sexoDoAluno == 'masculino') {
            console.log('tchau');
        }

        entradaDados.question('Nome do professor: ', function(nomeProfessor) {

            entradaDados.question('Nome do curso: ', function(NomeCurso) {

                entradaDados.question('Nome da disciplina: ', function(NomeDisciplina) {

                    entradaDados.question('Digite a nota 1: ', function(c) {

                        entradaDados.question('Digite a nota 2: ', function(numero2) {

                            entradaDados.question('Digite a nota 3: ', function(numero3) {

                                entradaDados.question('Digite a nota 4: ', function(numero4) {

                                });

                            });

                        });

                    });

                });

            });

        });

    });

});