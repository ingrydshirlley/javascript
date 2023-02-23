var readline = require('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita a entrada de dados do usuário
var sexoAluno
var sexoProfessor
var nomeAluno
var nomeProfessor
var nomeCurso
var nomeDisciplina

entradaDados.question("Digite o nome do aluno:"){
    
    entradaDados.question("Digite o nome do professor:"){
        entradaDados.question("Digite o sexo do aluno (M/F):"){
            entradaDados.question("Digite o sexo do professor (M/F):"){
                entradaDados.question("Digite o nome do curso:"){
                    entradaDados.question("Digite o nome da disciplina:")
                    let nota1 = parseInt(entradaDados.question("Digite a nota 1 (entre 0 e 100):"));
                    let nota2 = parseInt(entradaDados.question("Digite a nota 2 (entre 0 e 100):"));
                    let nota3 = parseInt(entradaDados.question("Digite a nota 3 (entre 0 e 100):"));
                    let nota4 = parseInt(entradaDados.question("Digite a nota 4 (entre 0 e 100):"));
                }
                
            }
            
        }
        
    }
    
}


// Valida as notas e exibe uma mensagem de erro se necessário
if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
    console.log("Erro: As notas devem ser entre 0 e 100.");
} else {
    // Calcula a média do aluno
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 70) {
        // O aluno está aprovado
        console.log(`Relatório do ${sexoAluno === 'F' ? 'aluna' : 'aluno'}:`);
        console.log(`O ${sexoAluno === 'F' ? 'aluna' : 'aluno'} ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}.`);
        console.log(`Curso: ${nomeCurso}`);
        console.log(`Professor${sexoProfessor === 'F' ? 'a' : ''}: ${nomeProfessor}`);
        console.log(`Notas do ${sexoAluno === 'F' ? 'aluna' : 'aluno'}: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);
        console.log(`Média Final: ${media}`);
    } else if (media >= 50) {
        // O aluno está de exame
        const notaExame = parseInt(entradaDados.question("Digite a nota do exame (entre 0 e 100):"));

        if (notaExame < 0 || notaExame > 100) {
            console.log("Erro: A nota do exame deve ser entre 0 e 100.");
        } else {
            const mediaFinal = (media + notaExame) / 2;

            if (mediaFinal >= 60) {
                // O aluno está aprovado no exame
                console.log(`Relatório do ${sexoAluno === 'F' ? 'aluna' : 'aluno'}:`);
                console.log(`O ${sexoAluno === 'F' ? 'aluna' : 'aluno'} ${nomeAluno} está aprovado na disciplina ${nomeDisciplina} por exame.`);
                console.log(`Curso: ${nomeCurso}`);
                console.log(`Professor${sexoProfessor === 'F' ? 'a' : ''}: ${nomeProfessor}`);
                console.log(`Notas`);
            }
        }
    }
}