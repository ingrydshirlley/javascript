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


entradaDados.question('Nome do aluno: \n', function(nomeAluno) {

    entradaDados.question('Sexo do aluno [FEMININO | MASCULINO]: \n', function(sexoAluno) {
        let sexoDoAluno = sexoAluno;
        if (sexoDoAluno == 'feminino') {
            console.log('oi');
            entradaDados.close();
        } else if (sexoDoAluno == 'masculino') {
            console.log('tchau');
            entradaDados.close();
        }

        entradaDados.question('Nome do professor: \n', function(nomeProfessor) {

            entradaDados.question('Sexo do professor [FEMININO | MASCULINO]: \n', function(sexoProfessor) {
                let sexoDoAluno = sexoAluno;
                if (sexoDoAluno == 'feminino') {
                    console.log('oi');
                    entradaDados.close();
                } else if (sexoDoAluno == 'masculino') {
                    console.log('tchau');
                    entradaDados.close();
                }

                entradaDados.question('Nome do curso: \n', function(NomeCurso) {

                    entradaDados.question('Nome da disciplina: \n', function(NomeDisciplina) {

                        entradaDados.question('Digite a nota 1: \n', function(numero1) {

                            entradaDados.question('Digite a nota 2: \n', function(numero2) {

                                entradaDados.question('Digite a nota 3: \n', function(numero3) {

                                    entradaDados.question('Digite a nota 4: \n', function(numero4) {



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