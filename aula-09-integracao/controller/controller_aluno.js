/************************************************************************
 * Objetivo: implementa a regra de negocio entre o app e a model
 * Data: 14/04/2023
 * Autor: Ingryd
 * Versão: 1.0
 *************************************************************************/

//funçao p receber os dados do app e enviar p model p INSERIR um novo item
const inserirAluno = function(dadosAluno) {

}

//funçao p receber os dados do app e enviar p model p ATUALIZAR um novo item
const atualizarAluno = function(dadosAluno) {

}

//funçao p receber os dados do app e enviar p model p DELETAR um novo item
const deletarAluno = function(id) {

}

//funçao p retornar todos os itens da tabela recebidos da model
const selecinarTodosAlunos = async function() {
    //import do arquivo de acesso ao banco de dados
    let alunoDAO = require('../model/DAO/alunoDAO.js')

    let dadosAluno = await alunoDAO.selectAllAluno()
    let dadosJSON = {}

    if (dadosAluno){
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    } else {
        return false
    }
}
    
//funçao p buscar um item buscando pelo id
const buscarIdAluno = function(id) {

}

module.exports = {
    selecinarTodosAlunos
}