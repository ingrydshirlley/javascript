/********************************
 * Objetivo: Este arquivo configura mensagens e statusCode de todo o projeto (ESCOPO GLOBAL), com variáveis e constantes
 * Data: 28/04/2023
 * Autor: ingryd
 * Versão: 1.0
 *********************************/

const ERROR_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatórios que não foram preenchidos' }
const CREATED_ITEM = { status: 201, message: 'Registro com sucesso' }
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor do banco de dados' }

module.exports = {
    ERROR_REQUIRED_DATA,
    CREATED_ITEM,
    ERROR_INTERNAL_SERVER
}