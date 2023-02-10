/*****************************************************************
 * Objetivo: Realizar a média escolar de 4 notas dos alunos.
 * Data: 27/01//2023
 * Autor: Ingryd
 * Versão: 1.0
******************************************************************/

console.log('Sistema de Cálculo de Médias Escolares');

// Import da biblioteca para entrada de dados
var readline = require('readline');

// Objeto para manipular entrada de dados via teclado 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// função de callback para retornar o nome do aluno 
entradaDados.question('Digite o nome do aluno: \n', function (nome) {
    // Variável local para receber o nome do aluno,
    // que será retornado pela função 

    let nomeAluno = nome;

    // Função de callback para entrada da nota1
    entradaDados.question('Digite a nota1: \n', function (nota1) {
        let primeiraNota = nota1;

        // Nota2
        entradaDados.question('Digite a nota2: \n', function (nota2) {
            let segundaNota = nota2;

            // Nota3
            entradaDados.question('Digite a nota3: \n', function (nota3) {
                let terceiraNota = nota3;

                // Nota4
                entradaDados.question('Digite a nota4: \n', function (nota4) {
                    let quartaNota = nota4;
                    let media = 0;

                    console.log(primeiraNota);

                    /*
                    Converção de dados String para número
                    Number.parseInt() ou parseInt() - Converte para Inteiro
                    Number.parseFloat() ou parseFloat() - Converte para float 
                    Number() - converte para int ou float, conforme a entrada do dado 
                    */

                    /*
                    Operadores de comparação 
                    == (Verificar a igualdade de conteudo)
                    != (Verifivar a diferença de conteudo)
                    < (Verificar o menor valor)
                    > (Verificar o maior valor)
                    <= (Verificar o menor ou igual valor)
                    >= (Verificar o maior ou igual valor)
                    === (Verificar a igualdade de conteudo e validar a tipagem de dados)
                    Ex: 0 == 0    V
                        0 == '0'  V
                        0 === '0' F
                        0 ==! 0.0 F
                    */

                    /*
                    Operadores Lógicos
                    OU         || (piper)   OR
                    E          &            AND 
                    Negação    !            NOT  
                
                    * Ordem de execuçãoo dos operadores lógicos 
                    0º  ()
                    1º  Negação 
                    2º  E
                    3º  OU
                    
                    */

                    // Validação para tratar entradas vazias
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') 
                    {
                        console.log('Erro: é necessário digitar algum valor nas entradas.')
                    // Validação para entrada de dados não numéricos
                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) 
                    {
                        console.log('É necessário que todos os dados digitados sejam números.')
                    // Validação de entrada de valores entre 0 e 10
                    } else if (primeiraNota > 10 || primeiraNota < 0 || segundaNota > 10 || segundaNota < 0 || terceiraNota > 10 || terceiraNota < 0 || quartaNota > 10 || quartaNota < 0)
                    {
                        console.log('Erro: digite números validos.');
                    } else{
                        media = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota) + parseFloat(quartaNota)) / 4;

                        if (media >= 7)
                        {
                            console.log('Status do aluno: APROVADO');
                        } else
                        {
                            console.log('Status do aluno: REPROVADO');
                        }

                        console.log('Média final: ' + media.toFixed(1));
                    }
                    


                })
            })
        })
    })

});



