/************************************************************************
 * Objetivo: realizar a interação do aluno com banco de dados
 * Data: 14/04/2023
 * Autor: Ingryd
 * Versão: 1.0
 *************************************************************************/

//inserir um novo registro no BD
const insertAluno = function(dadosAluno) {}
    //atualizar um registro do BD
const updateAluno = function(dadosAluno) {}
    //excluir um registro do BD
const deleteAluno = function(id) {}
    //retorna todos os registros do BD
const selectAllAluno = async function() {
    //import da biblioteca do prisma client (responsavel por manipular dados no BD)
    const {PrismaClient} = require('@prisma/client')

    //instancia da classe do prisma client
    const prisma = new PrismaClient()

    //variavel com o scriptSQL para executa no BD
    let sql = 'select * from tbl_aluno'

    let rsAluno = await prisma.$queryRawUnsafe(sql) 

    if(rsAluno.length > 0){
        return rsAluno
    } else {
        return false
    }
}
    //retorna todos os registros do BD
const selectByIdAluno = function(id) {}

module.exports = {
    selectAllAluno
}