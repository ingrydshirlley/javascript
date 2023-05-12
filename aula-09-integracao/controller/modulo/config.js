/********************************
 * Objetivo: Este arquivo configura mensagens e statusCode de todo o projeto (ESCOPO GLOBAL), com variáveis e constantes
 * Data: 28/04/2023
 * Autor: ingryd
 * Versão: 1.0
 *********************************/

const ERROR_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatórios que não foram preenchidos' }
const ERROR_REQUIRED_ID = { status: 400, message: 'O atributo id é obrigatorio na reuquisicao'}
const ERROR_NOT_FOUND = { status: 404, message: 'Nenhum registro encontrado na requisição'}
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor do banco de dados' }
const ERROR_INVALID_CONTENT_TYPE = { status: 415, message: 'O tipo de midia content-type da solicitaçao nao é compativel com o servidor, [application/json]' }
const CREATED_ITEM = { status: 201, message: 'Registro com sucesso' }
const UPDATED_ITEM = { status: 200, message: 'Atualizado com sucesso' }
const DELETED_ITEM = { status: 200, message: 'Apagado com sucesso' }

module.exports = {
    ERROR_REQUIRED_DATA,
    CREATED_ITEM,
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_ID,
    UPDATED_ITEM,
    DELETED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_NOT_FOUND 
}