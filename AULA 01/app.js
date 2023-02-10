// Comentário em linha 

/*
    Comentário
     em 
    bloco
*/

// Permite escrever uma mensagem no terminal. 
console.log('Testando o node.JS');

// import da biblioteca que faz entrada de dados pelo usuário.
var readline = require ('readline');

// Criamos um objeto entradaDados com as referências do readline. (Função de callback)
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

// O que é uma função de call back - é um afunção que quando chamada ela retorna
// o seu conteúdo em uma única instrução, ou seja, em apenas um passo na programação.

// Criamos uma funçao callback para receber os dados digitados pelo usuário.
    //(O objeto entradaDados aguarda a digitação do usuário, após a digitação do conteúdo
    // é acionado um call back para encaminhar os dados para o console.log.
    // Esse conteúdo foi encaminhado através do paramêtro dados da função)
entradaDados.question("Digite seu nome: \n", function (dados){
    console.log('Bem Vindo, ' + dados + ' ao servidor node.Js!');

});

