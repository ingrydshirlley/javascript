/****************************************************************
 * Objetivo: arquivo de funções para realizar cálculos medias
 * Data: 10/02/2023
 * Autor: Ingryd 
 * Versão: 1.0
 *****************************************************************/

const media = function(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, NomeCurso, NomeDisciplina, numero1, numero2, numero3, numero4) {

    let nomeAluno = nomeAluno;
    let sexoAluno = sexoAluno.toUpperCase();
    let nomeProfessor = nomeProfessor;
    let sexoProfessor = sexoProfessor.toUpperCase();
    let nomeCurso = NomeCurso;
    let nomeDisciplina = NomeDisciplina;
    let nota1 = Number(numero1);
    let nota2 = Number(numero2);
    let nota3 = Number(numero3);
    let nota4 = Number(numero4);
    let relatorioFem;
    let relatorioMasc;

    let media = 0;
    let exameRecuperacao;
    let resultado;

    /*  switch (media) {
         case 'SOMAR':
             resultado = valor1 + valor2;
             break;
         case 'SUBTRAIR':
             resultado = valor1 - valor2;
             break;
         case 'MULTIPLICAR':
             resultado = valor1 * valor2;
             break;
         case 'DIVIDIR':
             // Validação da divisão por 0
             if (valor2 == 0) {
                 console.log('Não é possível fazer uma divisão por 0.')
                 status = false;
             } else
                 resultado = valor1 / valor2;
             break;
         default:
             console.log('ERRO: A operação informada não é válida. Confira a sua entrada.')
             status = false;
     } */

    // TRATATIVA DE ERRO
    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('Erro: é necessário digitar algum valor nas notas.')

    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('É necessário que todos os dados digitados sejam números.')

    } else if (nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 ||
        nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0 || exameRecuperacao > 100 || exameRecuperacao < 0) {
        console.log('Erro: digite números entre 0 e 100.');


    } else {
        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

        if (media >= 70) {
            console.log('Status do aluno: APROVADO');

        } else if (media >= 50 && media <= 69) {
            console.log('Você terá que fazer o exame de recuperação!')

        } else {
            console.log('Status do aluno: REPROVADO \n');
        }
        console.log('Média final: ' + media.toFixed(1));
    }

    if (resultado) {

    }


    function relatorio(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, NomeCurso, NomeDisciplina, numero1, numero2, numero3, numero4) {
        console.log('Relatório do aluno: \n' + 'O aluno' + nomeAluno + 'foi' + [aprovado] + 'na disciplina' + [xxxxxxxx] + Curso: xxxxxxxx Professor: xxxxxxxx Notas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame
                Média Final: xxxxxx
            Média final do Exame: xxxx
        )
    }

}

module.exports = {
    media
}