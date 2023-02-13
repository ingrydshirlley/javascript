/****************************************************
 * Objetivo: arquivo de funções para realizar cálculos medias
 * Data: 10/02/2023
 * Autor: Ingryd 
 * Versão: 1.0
 ****************************************************/
const media = function(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, numero1, numero2, numero3, numero4) {
    let nomeAluno = nomeAluno;
    let sexoAluno = sexoAluno.toUpperCase();
    let nomeProfessor = nomeProfessor;
    let sexoProfessor = sexoProfessor.toUpperCase();
    let nomeCurso = nomeCurso;
    let nomeDisciplina = nomeDisciplina;
    let nota1 = Number(numero1);
    let nota2 = Number(numero2);
    let nota3 = Number(numero3);
    let nota4 = Number(numero4);
    let relatorioFem;
    let relatorioMasc;

    let media = 0;
    let exameRecuperacao;
    let resultado;

    // TRATATIVA DE ERRO
    if (numero1 == '' || numero2 == '' || numero3 == '' || numero4 == '') {
        console.log('Erro: é necessário digitar algum valor nas notas.')

    } else if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
        console.log('É necessário que todos os dados digitados sejam números.')

    } else if (numero1 > 100 || numero1 < 0 || numero2 > 100 || numero2 < 0 ||
        numero3 > 100 || numero3 < 0 || numero4 > 100 || numero4 < 0 || exameRecuperacao > 100 || exameRecuperacao < 0) {
        console.log('Erro: digite números entre 0 e 100.');

    } else {
        media = (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4)) / 4;

        if (media >= 70) {
            console.log('Status do aluno: APROVADO');

        } else if (media >= 50 && media <= 69) {
            console.log('Você terá que fazer o exame de recuperação!')

        } else {
            console.log('Status do aluno: REPROVADO \n');
        }

        function resultado() {
            if (media >= 70) {
                console.log('Status do aluno: APROVADO');
            } else if (media >= 50 && media <= 69) {
                console.log('Você terá que fazer o exame de recuperação!');
            } else {
                console.log('Status do aluno: REPROVADO \n');
            }
        }
    }

    function relatorio(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, NomeCurso, NomeDisciplina, numero1, numero2, numero3, numero4) {
        if (sexoAluno == 'feminino' && sexoProfessor == 'feminino') {
            console.log('A aluna ' + nomeAluno + 'foi ' + resultado + ' na disciplina. \n' + nomeDisciplina + 'Curso: \n' + nomeCurso + 'Professor: \n' + nomeProfessor + 'Notas da aluna:' + nota1 + nota2 + nota3 + nota4 + 'Média Final: ' + media)
        }
    }
}

module.exports = {
    media
}