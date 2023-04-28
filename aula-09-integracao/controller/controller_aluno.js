/************************************************************************
 * Objetivo: implementa a regra de negocio entre o app e a model
 * Data: 14/04/2023
 * Autor: Ingryd
 * Versão: 1.0
 *************************************************************************/

 //import do arquivo de acesso ao banco de dados
 var alunoDAO = require('../model/DAO/alunoDAO.js')


//funçao p receber os dados do app e enviar p model p INSERIR um novo item
const inserirAluno = async function(dadosAluno) {
    let message = require('./modulo/config.js')
    console.log(dadosAluno)
    if ( dadosAluno.nome            == ''   || dadosAluno.nome            == undefined    || dadosAluno.nome.length             > 100    ||
         dadosAluno.cpf             == ''   || dadosAluno.cpf             == undefined    || dadosAluno.cpf.length              > 18     ||
         dadosAluno.rg              == ''   || dadosAluno.rg              == undefined    || dadosAluno.rg.length               > 15     ||
         dadosAluno.email           == ''   || dadosAluno.email           == undefined    || dadosAluno.email.length            > 250    ||
         dadosAluno.data_nascimento == ''   || dadosAluno.data_nascimento == undefined    || dadosAluno.data_nascimento.length  > 10         
        ){
       return message.ERROR_REQUIRED_DATA       
    } else {
       let status = await alunoDAO.insertAluno(dadosAluno);
       if(status)
            return message.CREATED_ITEM
        else
            return message.ERROR_INTERNAL_SERVER
    }
}

//funçao p receber os dados do app e enviar p model p ATUALIZAR um novo item
const atualizarAluno = function(dadosAluno) {

}

//funçao p receber os dados do app e enviar p model p DELETAR um novo item
const deletarAluno = function(id) {

}

//funçao p retornar todos os itens da tabela recebidos da model
const selecinarTodosAlunos = async function() {
    
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
    selecinarTodosAlunos,
    inserirAluno
}