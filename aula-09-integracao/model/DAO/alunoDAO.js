/************************************************************************
 * Objetivo: realizar a interação do aluno com banco de dados
 * Data: 14/04/2023
 * Autor: Ingryd
 * Versão: 1.0
 *************************************************************************/

//import da biblioteca do prisma client (responsavel por manipular dados no BD)
var { PrismaClient } = require('@prisma/client')
//instancia da classe do prisma client
var prisma = new PrismaClient()

//inserir um novo registro no BD
const insertAluno = async function (dadosAluno) {
    //variavel com o scriptSQL para executa no BD
    let sql = `insert into tbl_aluno (
                                        nome, 
                                        cpf, 
                                        rg, 
                                        email,
                                        data_nascimento
                                      ) 
                                      values
                                        (   '${dadosAluno.nome}',
                                            '${dadosAluno.cpf}', 
                                            '${dadosAluno.rg}', 
                                            '${dadosAluno.email}', 
                                            '${dadosAluno.data_nascimento}'
                                        )`;
    //executa o script SQL no banco de dados e recebemos o retorno se deu certo ou nao
    let result = await prisma.$executeRawUnsafe(sql)
    if (result) {
        return true
    } else {
        return false
    }
}

//atualizar um registro do BD
const updateAluno = function (dadosAluno) { }
//excluir um registro do BD
const deleteAluno = function (id) { }

//retorna todos os registros do BD
const selectAllAluno = async function () {
    //variavel com o scriptSQL para executa no BD
    let sql = 'select * from tbl_aluno'

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

//retorna todos os registros do BD
const selectByIdAluno = function (id) { }

module.exports = {
    selectAllAluno,
    insertAluno,
}