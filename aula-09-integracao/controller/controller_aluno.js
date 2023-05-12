/************************************************************************
 * Objetivo: implementa a regra de negocio entre o app e a model
 * Data: 14/04/2023
 * Autor: Ingryd
 * Versão: 1.0
*************************************************************************/

//import do arquivo de acesso ao banco de dados
var alunoDAO = require('../model/DAO/alunoDAO.js')

var message = require('./modulo/config.js')


//funçao p receber os dados do app e enviar p model p INSERIR um novo item
const inserirAluno = async function (dadosAluno) {
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 250 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10
    ) {
        return message.ERROR_REQUIRED_DATA
    } else {
        let status = await alunoDAO.insertAluno(dadosAluno)

        if (status) {
            let dadosJSON = {}
            let alunoNovoId = await alunoDAO.selectLastId()
            dadosAluno.id = alunoNovoId

            dadosJSON.status = message.CREATED_ITEM.status
            dadosJSON.aluno = dadosAluno
            return dadosJSON
        }
        else
            return message.ERROR_INTERNAL_SERVER
    }
}

//funçao p receber os dados do app e enviar p model p ATUALIZAR um novo item
const atualizarAluno = async function (dadosAluno, idAluno) {
    //validação dos dados
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 250 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10
    ) {
        return message.ERROR_REQUIRED_DATA
    } else {
        dadosAluno.id = idAluno
        let status = await alunoDAO.insertAluno(dadosAluno)

        if (status) {
            let dadosJSON = {}

            dadosJSON.status = message.CREATED_ITEM.status
            dadosJSON.aluno = dadosAluno
            return dadosJSON
        }
        else
            return message.ERROR_INTERNAL_SERVER
    }
}

//funçao p receber os dados do app e enviar p model p DELETAR um novo item
const deletarAluno = async function (idAluno) {
    //validação do id
    if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_REQUIRED_ID
    } else {
        let status = await alunoDAO.deleteAluno(idAluno);
        if (status)
            return message.DELETED_ITEM
        else
            return message.ERROR_INTERNAL_SERVER
    }
}

//funçao p retornar todos os itens da tabela recebidos da model
const selecinarTodosAlunos = async function () {
    let dadosAluno = await alunoDAO.selectAllAluno()
    let dadosJSON = {}

    if (dadosAluno) {
        dadosJSON.status = 200
        dadosJSON.count = dadosAluno.length
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }
}

//funçao p buscar um item buscando pelo id
const buscarIdAluno = async function (id) {
    if (id == '' || id == undefined || isNaN(id)) {
        return message.ERROR_REQUIRED_ID
    }
    else {
        let dadosAluno = await alunoDAO.selectByIdAluno(id)
        let dadosJSON = {}

        if (dadosAluno) {
            dadosJSON.status = 200
            dadosJSON.alunos = dadosAluno
            return dadosJSON
        } else {
            return message.ERROR_NOT_FOUND
        }
    }
}


module.exports = {
    selecinarTodosAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    buscarIdAluno
}